'use strict';

var path = require('path');
var fs = require('fs');

var inject_script = `
(function () {
    if (typeof window.jsb === 'object') {
        var updateResPaths = localStorage.getItem('CCCX1UpdateResPaths');
        if (updateResPaths) {
            var paths = JSON.parse(updateResPaths);
            jsb.fileUtils.setSearchPaths(paths);

            var fileList = [];
            var storagePath = paths[0] || '';
            var tempPath = storagePath + '_temp/';
            var baseOffset = tempPath.length;

            if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp')) {
                jsb.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + relativePath;
                    if (srcPath[srcPath.length] == '/') {
                        jsb.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        if (jsb.fileUtils.isFileExist(dstPath)) {
                            jsb.fileUtils.removeFile(dstPath)
                        }
                        jsb.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                jsb.fileUtils.removeDirectory(tempPath);
            }

            //AppVersion > ResVersion时，删除update
            var needDel = false;
            var appVersion = localStorage.getItem('SZAPP_VERSION');
            var resVersion = localStorage.getItem('SZRES_VERSION');
            console.log("AppVersion:" + appVersion);
            console.log("ResVersion:" + resVersion);
            var verApp = appVersion.split('.');
            var verRes = resVersion.split('.');
            if (verApp.length > verRes.length) {
                needDel = true;
            } else {
                for (var i = 0; i < verApp.length; ++i) {
                    var a = parseInt(verApp[i]);
                    var b = parseInt(verRes[i] || 0);
                    if (a == b) {
                        continue;
                    }
                    needDel = a > b;
                    break;
                }
            }
            if (needDel) {
                jsb.fileUtils.removeDirectory(storagePath);
            }
        }
    }
})();
`;

function modifyMainJSForUpdate(options, endCb) {
    var root = path.normalize(options.dest);
    var url = path.join(root, "main.js");
    fs.readFile(url, "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        var newStr = inject_script + data;
        fs.writeFile(url, newStr, function (error) {
            if (err) {
                throw err;
            }
            Editor.log('main.js修改:', err ? '失败' : '成功');
            endCb && endCb();
        });
    });
}

function createManifest(options, endCb) {
    Editor.log('热更资源索引文件整理: 开始')
    var dest = options.dest.replace(/\\/g, '/');
    var generator = require('./libs/version_generator');
    generator.build(dest, (err, res) => {
        Editor.log('热更资源索引文件整理:', err ? '失败' : '成功');
        if (err) {
            Editor.log('error:', err);
        }
        endCb && endCb();
    });
}

function onBeforeBuildFinish(options, callback) {
    Editor.log("onBeforeBuildFinish");
    if (options.actualPlatform != 'android') {
        callback && callback();
    }
    //修改main.js
    modifyMainJSForUpdate(options, () => {
        //生成索引文件
        createManifest(options, () => {
            callback && callback();
        });
    });
}

module.exports = {
    load() {
        // 当 package 被正确加载的时候执行
        Editor.Builder.on('build-finished', onBeforeBuildFinish);
    },

    unload() {
        // 当 package 被正确卸载的时候执行
    },

    messages: {
        'say-hello'() {
            Editor.log('Hello World!')
        },
    },
}
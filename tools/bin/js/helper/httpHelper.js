//网络助手·读取网络文件

const https = require('https');
const http = require('http');

var httpHelper = {
    /**
     * 加载https文件
     * @param url 文件名路径
     * @param endCb 回调函数
     * @return 无
     */
    readFileByHttps: function (url, endCb) {
        let content = '';
        let req = https.get(url, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            res.on('data', (d) => {
                content += Buffer.from(d).toString('utf-8');
            });
        })
        req.on('error', (e) => { console.error(e); })
        req.on('finish', (e) => { console.log('finish'); })
        req.on('close', (e) => {
            //let obj = JSON.parse(content);
            endCb && endCb(content);
        });
    },

    /**
     * 加载http文件
     * @param url 文件名路径
     * @param endCb 回调函数
     * @return 无
     */
    readFileByHttp: function (url, endCb) {
        let content = '';
        let req = http.get(url, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
            res.on('data', (d) => {
                content += Buffer.from(d).toString('utf-8');
            });

        })
        req.on('error', (e) => { console.error(e); })
        req.on('finish', (e) => { console.log('finish'); })
        req.on('close', (e) => {
            console.log('close');
            //let obj = JSON.parse(content);
            endCb && endCb(content);
        });
    },

    /**
     * 获得网络文件并解析成json对象
     * @param url 文件名路径
     * @param endCb 回调函数
     * @return 无
     */
    getNetFileJson(url, endCb) {
        let readCb = (data) => {
            try {
                let obj = JSON.parse(data);
                endCb && endCb(obj);
            } catch (error) {
                console.log('faild to parse net file: ', url);
                endCb && endCb(null);
            }
        }
        if (url.indexOf('https') >= 0) {
            this.readFileByHttps(url, readCb);
        } else {
            this.readFileByHttp(url, readCb);
        }
    }
}

module.exports = httpHelper;
var path = require("path");
var fs = require("fs");
var readLine = require("readline");


var genErrDesc = {
    file: '',

    readFileToArr: function (fileName, callback) {
        let arr = [];
        let readObj = readLine.createInterface({
            input: fs.createReadStream(fileName)
        });
        readObj.on('line', (line) => {
            if (line.indexOf(' = ') >= 0) {
                arr.push(line);
            }
        });
        readObj.on('close', () => {
            callback(arr);
        });
    },

    doWork: function (dir) {
        dir = dir || 'D:/1_work/X1/x1_client'
        let file = `${dir}/assets/resources/proto/errorcode.ts`
        this.readFileToArr(file, (arr) => {
            let content = 'export const ErrDesc = {\n';
            for (let one of arr) {
                let idxB = one.indexOf('=');
                let idxD = one.indexOf(',');
                let idxZ = one.indexOf('//');
                if (idxB >= 0) {
                    let id = parseInt(one.substring(idxB + 1, idxD));
                    let sz = one.substring(idxZ + 2);
                    content += `    [${id}]: "${sz}",\n`;
                }
            }
            content += '}';

            let descFile = `${dir}/assets/c2f-framework/net/ErrDesc.ts`;
            fs.writeFileSync(descFile, content);
        })
    },
}

if (process.argv.length > 2) {
    let dir = process.argv[2]
    genErrDesc.doWork(dir);
} else {
    genErrDesc.doWork(null);
}



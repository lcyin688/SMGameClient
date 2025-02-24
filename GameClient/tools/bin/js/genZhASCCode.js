var textHelper = require('./helper/textHelper');

var genZhASCCode = {

    genCode: function (str) {
        if (str.length <= 0) {
            console.log('目标字符为空');
            return;
        }
        for (let i = 0; i < str.length; i++) {
            let code = textHelper.getZhAscCode(str[i]);
            console.log(`目标字符：${str[i]} => ASCII码:${code}`);
        }
    },
}

if (process.argv.length > 2) {
    let str = process.argv[2]
    genZhASCCode.genCode(str);
} else {
    genZhASCCode.genCode('');
}
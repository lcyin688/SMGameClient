# protobuf cocos creator

#### 介绍




#### 使用说明

    1.下载安装 protobufjs
        npm i -g protobufjs或者cnpm i -g protobufjs
        npm install -g protobufjs或者cnpm install -g protobufjs
    2. 需要注意的是protobufjs7需要单独安装protobufjs-cli <protobufjs6.x版本无需安装>
    npm i --g protobufjs-cli

    3.先执行 sh buildClientJs.sh 生成客户端的js文件
    4.在执行 sh buildClientTs.sh 生成客户端的Ts文件
    
    5.也可以合并执行 sh buildClientFinal.sh  多个 proto 文件合并成一个js 和Ts 文件

#### 参与贡献
// 学习参考网站
https://blog.csdn.net/leesongshared2014/article/details/135705776



### cocos creator 中使用

A、创建一个新的Cocos工程项目如LessonProtobuf

B、在LessonProtobuf项目根目录下打开终端执行安装protobufjs和protobufjs-cli并保存<package.json中会在dependencies中加入protobufjs和protobuf-cli的配置下次可直接使用>

npm i --save protobufjs protobufjs-cli
#也可以根据自己操作习惯分开执行
npm i --save protobufjs
npm i --save protobufjs-cli
C、安装完成之后也可以在LessonProtobuf根目录下创建一个存放自己的Proto源文件的文件夹比如叫Proto如下图
D、在LessonProtobuf根目录创建一个Proto.js文件夹用来存放最终cocos可用的ts/js合并文件,如下图
E、打开终端进入LessonProtobuf根目录执行生成命令即可<也可以在package.json中按照nodejs的规则定义脚本执行命令>或者配置package.json
pbjs --dependency protobufjs/minimal.js --target static-module --wrap commonjs --out ./Proto.js/proto.js ./Proto/*.proto
pbts --main --out ./Proto.js/proto.d.ts ./Proto.js/*.js
F、将生成的Proto.js文件夹拷贝到自己Cocos项目assets/script下<根据自己的目录来>如下图


(核心 在 cocos creator tsconfig.json 中配置 即可正常使用)
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true
  },


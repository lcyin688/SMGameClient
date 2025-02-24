# c2f-framework

#### 介绍
creator2.4.11 2D游戏框架

#### 软件架构
软件架构说明

 web google 浏览器上安装 插件 Cocos Creator Devtool  可以直接当作节点树工具使用

#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx
构建APK 
在修改 gradle.properties 文件
在项目根目录下的 gradle.properties 文件中添加以下行：
android.ndk.suppressMinSdkVersionError=21

ndk.dir=D\:\\android\\Sdk\\ndk\\25.1.8937393
classpath 'com.android.tools.build:gradle:8.2.0'
distributionUrl=https\://services.gradle.org/distributions/gradle-8.2-bin.zip
JDK 1.7

//公司可用
classpath 'com.android.tools.build:gradle:7.2.2'
distributionUrl=https\://services.gradle.org/distributions/gradle-7.3.3-bin.zip
sdk.dir=D\:\\Android\\sdk\\Sdk
ndk.dir=D\:\\Android\\android-sdk-windows\\ndk\\25.1.8937393
JDK 11


#### 参与贡献


#### 使用注意事项

1. 整个游戏功能以包为单位分成N块，加载包时，需要将包中UI配置新增到Layer总配置中
2. 包名不支持变更，如果需变更请手动同步
3. 包中脚本文件夹下需要有"${包名}Vew.ts"(首字母大写)文件，该文件定义了子包中窗口参数配置

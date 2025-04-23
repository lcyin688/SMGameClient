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


errorcode 服务器回的code 和 本地定义的 报错内容联系起来

//事件注册参考  EventName 


//网络回调  监听的demo

    protected onLoad(): void {
        c2f.webSocket.addListener(this, [
            msgid.GS_RankRwdInfo_R,
            msgid.GS_RankRwd_R,
        ], this.msgReceive.bind(this));

    }
    private msgReceive(op: number, data: any) {
        switch (op) {
            case msgid.GS_RankRwdInfo_R:
                this.onRankRwdInfo(data)
                break;
            case msgid.GS_RankRwd_R://领取奖励
                this.onRankRwd(data)
                break;
            default:
                break;
        }
    }


//倒计时demo

    private setTimeView() {
        let endTs = szg.player.act.getActEndTs(this.model.curSeq, GameConsts.ActivityTime.end);
        let tsNow = szg.player.time.getServerTs()
        let sec = endTs - tsNow;
        this.setTimeCountDownScore(this.view.timeCountdownLabel, sec)
    }


    /**倒计时显示 */
    private setTimeCountDownScore(countdownLabel: CountdownLabel, interval: number) {
        let dayStr = "%{d}" + c2f.language.words(2504) + "%{hh}:%{mm}:%{ss}";
        countdownLabel.startCountdown(interval, {
            S: "%{ss}",
            M: "%{mm}:%{ss}",
            H: "%{hh}:%{mm}:%{ss}",
            D: dayStr
        }, c2f.language.words(39110), null, () => {
        });
    }

//请求网络消息
        let cData: msg.CS_Login = {
                account: username,
                password: password,
                serverId: 1,
        }
        c2f.webSocket.send(GameMsgId.MsgId.MSG_CS_Login,cData,{
            view: this.view,
            ops: [GameMsgId.MsgId.MSG_SC_Login],
            waitNet:false,
            getErr:false,
            callback: (code: number, data: msg.SC_Login) => {

                cc.log(" 登录 消息回来",data)
                c2f.gui.notifyTxt('1515');
                //todo 登录成功逻辑
            }
        })

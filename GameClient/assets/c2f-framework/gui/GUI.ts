const { ccclass, menu } = cc._decorator;

/** 游戏界面屏幕自适应管理 */
@ccclass
export class GUI extends cc.Component {
    /** 是否为竖屏显示 */
    portrait!: boolean;

    /** 竖屏设计尺寸 */
    private portraitDrz: cc.Size = null!;
    /** 横屏设计尺寸 */
    private landscapeDrz: cc.Size = null!;

    onLoad() {
        this.init();
    }

    /** 初始化引擎 */
    protected init() {
        if (cc.view.getDesignResolutionSize().width > cc.view.getDesignResolutionSize().height) {
            this.landscapeDrz = cc.view.getDesignResolutionSize();
            this.portraitDrz = new cc.Size(this.landscapeDrz.height, this.landscapeDrz.width);
        }
        else {
            this.portraitDrz = cc.view.getDesignResolutionSize();
            this.landscapeDrz = new cc.Size(this.portraitDrz.height, this.portraitDrz.width);
        }

        this.autoSize();
    }

    /** 游戏画布尺寸变化 */
    public autoSize() {
        let dr: cc.Size;
        const resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        } else {
            dr = this.portraitDrz
        }

        let rw = cc.winSize.width;
        let rh = cc.winSize.height;
        let finalW = rw;
        let finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            // 如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
            this.portrait = false;
        } else {
            // 如果更短，则用定宽
            finalW = dr.width;
            finalH = finalW * rh / rw;
            this.portrait = true;
        }

        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node!.width = finalW;
        this.node!.height = finalH;

        c2f.log.logView(dr, "设计尺寸");
        c2f.log.logView(cc.winSize, "屏幕尺寸");
    }

    public fixedWidth() {
        let dr: cc.Size;
        const resolutionSize = cc.view.getDesignResolutionSize();
        if (resolutionSize.width > resolutionSize.height) {
            dr = this.landscapeDrz;
        } else {
            dr = this.portraitDrz
        }

        let rw = cc.winSize.width;
        let rh = cc.winSize.height;
        let finalW = rw;
        let finalH = rh;
        finalW = dr.width;
        finalH = finalW * rh / rw;
        this.portrait = true;

        // 手工修改canvas和设计分辨率，这样反复调用也能生效。
        cc.view.setDesignResolutionSize(finalW, finalH, cc.ResolutionPolicy.UNKNOWN);
        this.node!.width = finalW;
        this.node!.height = finalH;
    }
}
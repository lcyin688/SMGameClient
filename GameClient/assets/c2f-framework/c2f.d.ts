//框架定义
declare namespace jsb {
    export var Device: any;
}

declare namespace cc {
    export var nativeSDK: any;
}

interface String {
    /** 字符串格式化{ 0 }, { 1 } */
    format(...param): string;
    /** 首字母大写 */
    capWord(): string;
    /** 去除换行 */
    clearBr(): string;
    /** 去除空格 */
    trimAll(): string;
}

interface Date {
    /**
     * 日期转字符串
     * 格式 YYYY-MM-DD hh:mm:ss
     */
    dateToString(): string;

    /**
     *
     *  日期格式化
     * 格式 YYYY/yyyy/YY/yy 表示年份
     * MM/M 月份
     * W/w 星期
     * dd/DD/d/D 日期
     * hh/HH/h/H 时间
     * mm/m 分钟
     * ss/SS/s/S 秒
     */
    format(formatStr: string): string;
}

interface ObjectConstructor {
    /** 对象key首字母大写 */
    firstBig(obj: Object): Object;
    /** 合并两个对象 */
    merge(sub1: Object, sub2: Object): Object;
    /** 深度拷贝 */
    copyDepth(src: T): T;
    /** 是否为空 */
    isEmpty(obj: Object): boolean;
    /** 成员个数 */
    count(obj: Object): number;
}

declare namespace cc {
    interface Sprite {
        /**
         * 动态修改Sprite的spriteFrame：便于动态加载资源的管理
         * 源码见：.\assets\c2f-framework\hack\SpriteHack.ts
         */
        changeSpriteFrame(url: string, endCb: Function): void;
        /** 通过图集更改sprite的spriteFrame */
        changeSFWithAtlas(url: string, subFile: string, endCb: Function): void;
    }

    interface ToggleContainer {
        /** 仅刷新其内部toggle显示状态·不激发事件 */
        updateTogglesUIStateOnly(selectName: string): void;
    }
}

// declare module sp {
//     interface Skeleton {
//         /**
//          * 动态修改Spine的skeletonData：便于动态加载资源的管理
//          * 源码见：.\assets\c2f-framework\hack\SpineHack.ts
//          * @param url
//          * @param endCb
//          */
//         changeSkeletonData(url: string, endCb: Function): void;
//     }
// }

declare namespace jsb {
    export module reflection {
        /**
         * https://docs.cocos.com/creator/manual/zh/advanced-topics/java-reflection.html
         * call OBJC/Java static methods
         *
         * @param className
         * @param methodName
         * @param methodSignature JAVA需要这个参数，IOS不需要
         * @param parameters
         */
        export function callStaticMethod(className: string, methodName: string, methodSignature: string = null, ...parameters: any): any;
    }
}

/**@description 提示弹出框配置 */
declare interface AlertConfig {
    /**@description 用来标识弹出框，后面可指定tag进行关闭所有相同tag的弹出框 */
    tag?: string | number;
    text?: string;
    /**@description 标题,默认为 : 提示 */
    title?: string;
    /**@description 确定按钮文字 默认为 : 确定*/
    confirmString?: string;
    /**@description 取消按钮文字 默认为 : 取消*/
    cancelString?: string;
    /**@description 确定按钮回调 有回调则显示按钮，无回调则不显示*/
    confirmCb?: (isOK: boolean) => void;
    /**@description 取消按钮回调 有回调则显示按钮，无回调则不显示*/
    cancelCb?: (isOK: boolean) => void;
    /**@description 富文件显示内容 跟text只能二选1 */
    richText?: string;
    /**@description true 回调后在关闭弹出 false 关闭弹出框在回调 默认为 : false */
    immediatelyCallback?: boolean;
    /**@description 是否允许该tag的弹出框重复弹出，默认为true 会弹出同类型的多个 */
    isRepeat?: boolean;
    /**@description 用户自定义数据 */
    userData?: any;
}

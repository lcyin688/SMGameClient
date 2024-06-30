//注意!!! click响应函数handler
//富文本 param 设置为 clickNames 的值
//exp:<on click='handler' param="{0}"> 描述</on>  -->{0} 这个值就是clickName  类型 string


const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu('c2f/common/RichTextEvent')
export default class RichTextEvent extends cc.Component {

    private clickNames: string[] = [];
    private cliskCbs: Function[] = [];

    /** 设置richText响应名称及其回调函数 */
    public updateView(names: string[], cbs: Function[]) {
        this.clickNames = names;
        this.cliskCbs = cbs;
    }

    private handler(evt, param) {
        if (!this.clickNames && this.clickNames.length <= 0) {
            return;
        }
        let idx = this.clickNames.indexOf(param);
        if (this.cliskCbs.length > 0 && this.cliskCbs[idx] && typeof this.cliskCbs[idx] == 'function') {
            this.cliskCbs[idx](param);
        }
    }

    protected onDestroy(): void {
        this.clickNames = [];
        this.cliskCbs = [];
    }
}

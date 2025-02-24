import { UIHelper } from "../../../Script/game/UIHelper";

const { ccclass, property, requireComponent, menu } = cc._decorator;
@ccclass
@requireComponent(sp.Skeleton)
export default class UISpine extends cc.Component {

    private completeHandler: Function = null;
    private eventHandler: Function = null;


    public setListenerCb(completeCb: Function, eventCb: Function) {
        this.completeHandler = completeCb;
        this.eventHandler = eventCb;
    }

    protected onLoad(): void {
        let spine = this.node.getComponent(sp.Skeleton);
        if (!spine) {
            return;
        }
        spine.setEventListener((entry: sp.spine.TrackEntry, event: sp.spine.Event | number) => {
            if (typeof event == 'number') {
                return;
            }
            const eventName = event.data.name;
            if (eventName == 'sound') {
                // UIHelper.playEffect(event.stringValue);
            }
            this.eventHandler && this.eventHandler(entry, event);
        });
        spine.setCompleteListener((data) => {
            this.completeHandler && this.completeHandler(data);
        })
    }
}
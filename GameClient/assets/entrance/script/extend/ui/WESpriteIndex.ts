const { ccclass, property, disallowMultiple, executeInEditMode, requireComponent, menu } = cc._decorator;

declare global {
    interface IUI {
        WESpriteIndex: typeof WESpriteIndex;
    }

    namespace c2f {
        namespace ui {
            type WESpriteIndex = InstanceType<typeof WESpriteIndex>;
        }
    }
}

/**
 * 帧图切换组件
 * 支持多语言图片
 */
@ccclass
@executeInEditMode
@requireComponent(cc.Sprite)
@disallowMultiple()
@menu('c2f/sprite/WESpriteIndex(帧图改变)')
export default class WESpriteIndex extends cc.Component {
    @property({
        type: [cc.SpriteFrame],
        tooltip: CC_DEV && 'sprite将会用到帧图片',
    })
    spriteFrames: Array<cc.SpriteFrame> = [null];

    /**
     * 通过索引设置
     */
    @property({
        tooltip: CC_DEV && '当前显示的帧图',
        override: true,
    })
    get index() {
        return this._index;
    }
    set index(value: number) {
        this.setIndex(value);
    }
    @property
    private _index: number = 0;

    public _name: string = '';

    get maxIndex() {
        return this.spriteFrames.length;
    }

    /**
     * 帧图名字->index
     */
    caches: Map<string, number>;

    setIndex(value: number) {
        if (value < 0) {
            return;
        }
        this._index = value % this.spriteFrames.length;
        const sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteFrames[this._index];
    }

    /** 通过设置帧图名字来设置对象 */
    setName(name: string) {
        if (!this.caches) {
            this.caches = new Map();
        }

        this._name = name;

        let index = this.caches.get(name);
        if (index == null) {
            index = this.spriteFrames.findIndex((v) => {
                return v.name == name;
            });
        }

        if (index < 0) {
            cc.error(`WESpriteIndex setName, not exist name: ${name}`);
        }
        this.index = index || 0;

        this.caches.set(name, index);
    }

    getName() {
        return this._name;
    }

    setIndexAdd(add: number) {
        this._index += add;
        this.setIndex(this._index);
    }

    /** 随机范围设置帧图片 */
    random(min?: number, max?: number) {
        if (!this.spriteFrames) {
            return;
        }
        const frameMax = this.spriteFrames.length;
        if (min == null || min < 0) {
            min = 0;
        }
        if (max == null || max > frameMax) {
            max = frameMax;
        }

        this.index = Math.floor(Math.random() * (max - min) + min);

        this.setIndex(this.index);
    }

    next() {
        this.index++;
    }

    previous() {
        this.index--;
    }
}

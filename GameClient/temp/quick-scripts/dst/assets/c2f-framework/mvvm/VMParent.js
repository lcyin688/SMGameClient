
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/mvvm/VMParent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52812buJBFGALNvK3OEiaXe', 'VMParent');
// c2f-framework/mvvm/VMParent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewModel_1 = require("./ViewModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 提供VM环境，控制旗下所有VM节点
 * 一般用于 非全局的 VM绑定,VM 环境与 组件紧密相连
 * （Prefab 模式绑定）
 * VMParent 必须必其他组件优先执行
 * v0.1 修复bug ，现在可以支持 Parent 嵌套 （但是注意性能问题，不要频繁嵌套）
 */
var VMParent = /** @class */ (function (_super) {
    __extends(VMParent, _super);
    function VMParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**绑定的标签，可以通过这个tag 获取 当前的 vm 实例 */
        _this.tag = '_temp';
        /**需要绑定的私有数据 */
        _this.data = {};
        /**VM 管理 */
        _this.VM = ViewModel_1.VM;
        return _this;
    }
    /**
     * [注意]不能直接覆盖此方法，如果需要覆盖。
     * 只能在该方法内部调用父类的实现
    ```ts
        onLoad(){
            super.onLoad();
        }
    ```
     *
     */
    VMParent.prototype.onLoad = function () {
        if (this.data == null)
            return;
        this.tag = '_temp' + '<' + this.node.uuid.replace('.', '') + '>';
        ViewModel_1.VM.add(this.data, this.tag);
        //cc.log(VM['_mvs'],tag)
        //搜寻所有节点：找到 watch path
        var comps = this.getVMComponents();
        //console.group();
        for (var i = 0; i < comps.length; i++) {
            var comp = comps[i];
            this.replaceVMPath(comp, this.tag);
        }
        //console.groupEnd()
        this.onBind();
    };
    /**在 onLoad 完成 和 start() 之前调用，你可以在这里进行初始化数据等操作 */
    VMParent.prototype.onBind = function () {
    };
    /**在 onDestroy() 后调用,此时仍然可以获取绑定的 data 数据*/
    VMParent.prototype.onUnBind = function () {
    };
    VMParent.prototype.replaceVMPath = function (comp, tag) {
        var path = comp['watchPath'];
        //let comp_name: string = comp.name;
        if (comp['templateMode'] == true) {
            var pathArr = comp['watchPathArr'];
            if (pathArr) {
                for (var i = 0; i < pathArr.length; i++) {
                    var path_1 = pathArr[i];
                    pathArr[i] = path_1.replace('*', tag);
                }
            }
        }
        else {
            //VMLabel
            //遇到特殊 path 就优先替换路径
            if (path.split('.')[0] === '*') {
                comp['watchPath'] = path.replace('*', tag);
            }
        }
    };
    /**未优化的遍历节点，获取VM 组件 */
    VMParent.prototype.getVMComponents = function () {
        var _this = this;
        var comps = this.node.getComponentsInChildren('VMBase');
        var parents = this.node.getComponentsInChildren('VMParent').filter(function (v) { return v.uuid !== _this.uuid; }); //过滤掉自己
        //过滤掉不能赋值的parent
        var filters = [];
        parents.forEach(function (node) {
            filters = filters.concat(node.getComponentsInChildren('VMBase'));
        });
        comps = comps.filter(function (v) { return filters.indexOf(v) < 0; });
        return comps;
    };
    /**
     * [注意]不能覆盖此方法，如果需要覆盖。
     * 需要在该方法内部调用父类的实现，再定义自己的方法
      ```ts
        onDestroy(){
            super.onDestroy();
        }
      ```
     */
    VMParent.prototype.onDestroy = function () {
        this.onUnBind();
        //解除全部引用
        ViewModel_1.VM.remove(this.tag);
        this.data = null;
    };
    VMParent = __decorate([
        ccclass
    ], VMParent);
    return VMParent;
}(cc.Component));
exports.default = VMParent;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL212dm0vVk1QYXJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWlDO0FBSTNCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7R0FNRztBQUVIO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0dDO1FBOUZHLGtDQUFrQztRQUN4QixTQUFHLEdBQVcsT0FBTyxDQUFDO1FBQ2hDLGVBQWU7UUFDTCxVQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLFdBQVc7UUFDSixRQUFFLEdBQUcsY0FBRSxDQUFDOztJQXlGbkIsQ0FBQztJQXZGRzs7Ozs7Ozs7O09BU0c7SUFDTyx5QkFBTSxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUU5QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakUsY0FBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuQyxrQkFBa0I7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNyQztRQUNELG9CQUFvQjtRQUVwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGlEQUFpRDtJQUN2Qyx5QkFBTSxHQUFoQjtJQUNBLENBQUM7SUFFRCwwQ0FBMEM7SUFDaEMsMkJBQVEsR0FBbEI7SUFDQSxDQUFDO0lBRU8sZ0NBQWEsR0FBckIsVUFBc0IsSUFBa0IsRUFBRSxHQUFXO1FBQ2pELElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxvQ0FBb0M7UUFFcEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksT0FBTyxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckMsSUFBTSxNQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0o7U0FDSjthQUFNO1lBQ0gsU0FBUztZQUNULG1CQUFtQjtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDOUM7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBc0I7SUFDZCxrQ0FBZSxHQUF2QjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSSxDQUFDLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsT0FBTztRQUV0RyxnQkFBZ0I7UUFDaEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFhO1lBQzFCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFBO1FBRUYsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLDRCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLFFBQVE7UUFDUixjQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBL0ZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0c1QjtJQUFELGVBQUM7Q0FoR0QsQUFnR0MsQ0FoR3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0dqRDtrQkFoR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWTSB9IGZyb20gJy4vVmlld01vZGVsJztcbmltcG9ydCBWTUJhc2UgZnJvbSBcIi4vVk1CYXNlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiDmj5DkvptWTeeOr+Wig++8jOaOp+WItuaXl+S4i+aJgOaciVZN6IqC54K5XG4gKiDkuIDoiKznlKjkuo4g6Z2e5YWo5bGA55qEIFZN57uR5a6aLFZNIOeOr+Wig+S4jiDnu4Tku7bntKflr4bnm7jov55cbiAqIO+8iFByZWZhYiDmqKHlvI/nu5HlrprvvIlcbiAqIFZNUGFyZW50IOW/hemhu+W/heWFtuS7lue7hOS7tuS8mOWFiOaJp+ihjFxuICogdjAuMSDkv67lpI1idWcg77yM546w5Zyo5Y+v5Lul5pSv5oyBIFBhcmVudCDltYzlpZcg77yI5L2G5piv5rOo5oSP5oCn6IO96Zeu6aKY77yM5LiN6KaB6aKR57mB5bWM5aWX77yJXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWTVBhcmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvKirnu5HlrprnmoTmoIfnrb7vvIzlj6/ku6XpgJrov4fov5nkuKp0YWcg6I635Y+WIOW9k+WJjeeahCB2bSDlrp7kvosgKi9cbiAgICBwcm90ZWN0ZWQgdGFnOiBzdHJpbmcgPSAnX3RlbXAnO1xuICAgIC8qKumcgOimgee7keWumueahOengeacieaVsOaNriAqL1xuICAgIHByb3RlY3RlZCBkYXRhOiBhbnkgPSB7fTtcbiAgICAvKipWTSDnrqHnkIYgKi9cbiAgICBwdWJsaWMgVk0gPSBWTTtcblxuICAgIC8qKlxuICAgICAqIFvms6jmhI9d5LiN6IO955u05o6l6KaG55uW5q2k5pa55rOV77yM5aaC5p6c6ZyA6KaB6KaG55uW44CCXG4gICAgICog5Y+q6IO95Zyo6K+l5pa55rOV5YaF6YOo6LCD55So54i257G755qE5a6e546wIFxuICAgIGBgYHRzXG4gICAgICAgIG9uTG9hZCgpe1xuICAgICAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIH1cbiAgICBgYGAgXG4gICAgICogXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50YWcgPSAnX3RlbXAnICsgJzwnICsgdGhpcy5ub2RlLnV1aWQucmVwbGFjZSgnLicsICcnKSArICc+JztcbiAgICAgICAgVk0uYWRkKHRoaXMuZGF0YSwgdGhpcy50YWcpO1xuICAgICAgICAvL2NjLmxvZyhWTVsnX212cyddLHRhZylcbiAgICAgICAgLy/mkJzlr7vmiYDmnInoioLngrnvvJrmib7liLAgd2F0Y2ggcGF0aFxuICAgICAgICBsZXQgY29tcHMgPSB0aGlzLmdldFZNQ29tcG9uZW50cygpO1xuICAgICAgICAvL2NvbnNvbGUuZ3JvdXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29tcCA9IGNvbXBzW2ldO1xuICAgICAgICAgICAgdGhpcy5yZXBsYWNlVk1QYXRoKGNvbXAsIHRoaXMudGFnKVxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5ncm91cEVuZCgpXG5cbiAgICAgICAgdGhpcy5vbkJpbmQoKTtcbiAgICB9XG5cbiAgICAvKirlnKggb25Mb2FkIOWujOaIkCDlkowgc3RhcnQoKSDkuYvliY3osIPnlKjvvIzkvaDlj6/ku6XlnKjov5nph4zov5vooYzliJ3lp4vljJbmlbDmja7nrYnmk43kvZwgKi9cbiAgICBwcm90ZWN0ZWQgb25CaW5kKCkge1xuICAgIH1cblxuICAgIC8qKuWcqCBvbkRlc3Ryb3koKSDlkI7osIPnlKgs5q2k5pe25LuN54S25Y+v5Lul6I635Y+W57uR5a6a55qEIGRhdGEg5pWw5o2uKi9cbiAgICBwcm90ZWN0ZWQgb25VbkJpbmQoKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXBsYWNlVk1QYXRoKGNvbXA6IGNjLkNvbXBvbmVudCwgdGFnOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBhdGg6IHN0cmluZyA9IGNvbXBbJ3dhdGNoUGF0aCddO1xuICAgICAgICAvL2xldCBjb21wX25hbWU6IHN0cmluZyA9IGNvbXAubmFtZTtcblxuICAgICAgICBpZiAoY29tcFsndGVtcGxhdGVNb2RlJ10gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IHBhdGhBcnI6IHN0cmluZ1tdID0gY29tcFsnd2F0Y2hQYXRoQXJyJ107XG4gICAgICAgICAgICBpZiAocGF0aEFycikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gcGF0aEFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aEFycltpXSA9IHBhdGgucmVwbGFjZSgnKicsIHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9WTUxhYmVsXG4gICAgICAgICAgICAvL+mBh+WIsOeJueauiiBwYXRoIOWwseS8mOWFiOabv+aNoui3r+W+hFxuICAgICAgICAgICAgaWYgKHBhdGguc3BsaXQoJy4nKVswXSA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgY29tcFsnd2F0Y2hQYXRoJ10gPSBwYXRoLnJlcGxhY2UoJyonLCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5pyq5LyY5YyW55qE6YGN5Y6G6IqC54K577yM6I635Y+WVk0g57uE5Lu2ICovXG4gICAgcHJpdmF0ZSBnZXRWTUNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBjb21wcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbignVk1CYXNlJyk7XG4gICAgICAgIGxldCBwYXJlbnRzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKCdWTVBhcmVudCcpLmZpbHRlcih2ID0+IHYudXVpZCAhPT0gdGhpcy51dWlkKTsgLy/ov4fmu6Tmjonoh6rlt7FcblxuICAgICAgICAvL+i/h+a7pOaOieS4jeiDvei1i+WAvOeahHBhcmVudFxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgICAgICBwYXJlbnRzLmZvckVhY2goKG5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAgICAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmNvbmNhdChub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKCdWTUJhc2UnKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29tcHMgPSBjb21wcy5maWx0ZXIoKHYpID0+IGZpbHRlcnMuaW5kZXhPZih2KSA8IDApO1xuICAgICAgICByZXR1cm4gY29tcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogW+azqOaEj13kuI3og73opobnm5bmraTmlrnms5XvvIzlpoLmnpzpnIDopoHopobnm5bjgIJcbiAgICAgKiDpnIDopoHlnKjor6Xmlrnms5XlhoXpg6josIPnlKjniLbnsbvnmoTlrp7njrDvvIzlho3lrprkuYnoh6rlt7HnmoTmlrnms5VcbiAgICAgIGBgYHRzXG4gICAgICAgIG9uRGVzdHJveSgpe1xuICAgICAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIGBgYFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25VbkJpbmQoKTtcbiAgICAgICAgLy/op6PpmaTlhajpg6jlvJXnlKhcbiAgICAgICAgVk0ucmVtb3ZlKHRoaXMudGFnKTtcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB9XG59XG4iXX0=
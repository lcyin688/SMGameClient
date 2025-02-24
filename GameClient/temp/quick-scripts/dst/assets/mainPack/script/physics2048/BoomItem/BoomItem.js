
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/BoomItem/BoomItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bac3e+2QCREopRAED6edh84', 'BoomItem');
// mainPack/script/physics2048/BoomItem/BoomItem.ts

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
var UIPControlBase_1 = require("./../../../../c2f-framework/gui/layer/UIPControlBase");
var UIHelper_1 = require("../../../../Script/game/UIHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoomItem = /** @class */ (function (_super) {
    __extends(BoomItem, _super);
    function BoomItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'P_BoomItem';
        _this.model = undefined;
        _this.view = undefined;
        return _this;
    }
    BoomItem.prototype.playBoom = function (data, cbFun) {
        var _this = this;
        var dis = data.radius;
        this.moveAni1(dis);
        this.scheduleOnce(function () {
            cbFun();
            _this.moveAni2(dis);
        }, 0.2);
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 0.5);
    };
    BoomItem.prototype.moveAni1 = function (dis) {
        var positions = UIHelper_1.UIHelper.getCirclePointsArr(dis, dis + 300, new cc.Vec2(0, 0), 15);
        var _loop_1 = function (i) {
            var bubble = cc.instantiate(this_1.view.move1);
            bubble.parent = this_1.node;
            bubble.active = true;
            bubble.setPosition(positions[i][0]);
            var rodomScale = Math.random() * 0.5 + 0.5;
            bubble.setScale(rodomScale, rodomScale);
            cc.tween(bubble).to(0.3, { opacity: 20, scale: 1, position: positions[i][1] }).call(function (sender) {
                bubble.destroy();
            }).start();
        };
        var this_1 = this;
        for (var i = 1; i < positions.length; i++) {
            _loop_1(i);
        }
    };
    BoomItem.prototype.moveAni2 = function (dis) {
        var positions = UIHelper_1.UIHelper.getCirclePointsArr(dis, dis + 400, new cc.Vec2(0, 0), 20);
        var _loop_2 = function (i) {
            var bubble = cc.instantiate(this_2.view.move1);
            bubble.parent = this_2.node;
            bubble.active = true;
            bubble.setPosition(positions[i][0]);
            var rodomScale = Math.random() * 0.5 + 0.5;
            bubble.setScale(rodomScale, rodomScale);
            cc.tween(bubble).to(0.3, { opacity: 20, scale: 1, position: positions[i][1] }).call(function (sender) {
                bubble.destroy();
            }).start();
        };
        var this_2 = this;
        for (var i = 1; i < positions.length; i++) {
            _loop_2(i);
        }
    };
    BoomItem = __decorate([
        ccclass
    ], BoomItem);
    return BoomItem;
}(UIPControlBase_1.UIPControlBase));
exports.default = BoomItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvQm9vbUl0ZW0vQm9vbUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQXNGO0FBS3RGLDZEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBYztJQUFwRDtRQUFBLHFFQWlEQztRQS9DRyxnQkFBZ0I7UUFDVCxnQkFBVSxHQUFHLFlBQVksQ0FBQztRQUUxQixXQUFLLEdBQWtCLFNBQVMsQ0FBQztRQUNqQyxVQUFJLEdBQWlCLFNBQVMsQ0FBQzs7SUEyQzFDLENBQUM7SUExQ1UsMkJBQVEsR0FBZixVQUFnQixJQUE4QixFQUFFLEtBQWU7UUFBL0QsaUJBVUM7UUFURyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFBO1lBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRU8sMkJBQVEsR0FBaEIsVUFBaUIsR0FBVztRQUN4QixJQUFJLFNBQVMsR0FBRyxtQkFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0NBQ3pFLENBQUM7WUFDTixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQUssSUFBSSxDQUFDLEtBQUssQ0FBWSxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBSyxJQUFJLENBQUE7WUFDekIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtZQUMxQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQTtZQUN2QyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBWTtnQkFDN0YsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBOzs7UUFUZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWhDLENBQUM7U0FVVDtJQUNMLENBQUM7SUFDTywyQkFBUSxHQUFoQixVQUFpQixHQUFXO1FBQ3hCLElBQUksU0FBUyxHQUFHLG1CQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtnQ0FDekUsQ0FBQztZQUNOLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBSyxJQUFJLENBQUMsS0FBSyxDQUFZLENBQUM7WUFDeEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFLLElBQUksQ0FBQTtZQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25DLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFBO1lBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1lBQ3ZDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFZO2dCQUM3RixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7OztRQVRkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBaEMsQ0FBQztTQVVUO0lBQ0wsQ0FBQztJQTlDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlENUI7SUFBRCxlQUFDO0NBakRELEFBaURDLENBakRxQywrQkFBYyxHQWlEbkQ7a0JBakRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlQQ29udHJvbEJhc2UgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZ3VpL2xheWVyL1VJUENvbnRyb2xCYXNlJztcbmltcG9ydCB7IEMyRkVudW0gfSBmcm9tICcuLy4uLy4uLy4uLy4uL2MyZi1mcmFtZXdvcmsvZGVmaW5lL0MyRkVudW0nO1xuaW1wb3J0IEJvb21JdGVtTW9kZWwgZnJvbSAnLi9Cb29tSXRlbU1vZGVsJztcbmltcG9ydCBCb29tSXRlbVZpZXcgZnJvbSAnLi9Cb29tSXRlbVZpZXcnO1xuaW1wb3J0IHsgVUlQYSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdC9nYW1lL1VJUGFyYW0nO1xuaW1wb3J0IHsgVUlIZWxwZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9VSUhlbHBlcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vbUl0ZW0gZXh0ZW5kcyBVSVBDb250cm9sQmFzZSB7XG5cbiAgICAvKiog6aKE5Yi25ZCNIOe7meWunuS+i+iwg+eUqCAqL1xuICAgIHB1YmxpYyBwcmVmYWJOYW1lID0gJ1BfQm9vbUl0ZW0nO1xuXG4gICAgcHVibGljIG1vZGVsOiBCb29tSXRlbU1vZGVsID0gdW5kZWZpbmVkO1xuICAgIHB1YmxpYyB2aWV3OiBCb29tSXRlbVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgcHVibGljIHBsYXlCb29tKGRhdGE6IFVJUGEuUGh5c2ljczIwNDhJdGVtQXJncywgY2JGdW46IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBkaXMgPSBkYXRhLnJhZGl1c1xuICAgICAgICB0aGlzLm1vdmVBbmkxKGRpcylcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2JGdW4oKVxuICAgICAgICAgICAgdGhpcy5tb3ZlQW5pMihkaXMpXG4gICAgICAgIH0sIDAuMilcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlQW5pMShkaXM6IG51bWJlcikge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gVUlIZWxwZXIuZ2V0Q2lyY2xlUG9pbnRzQXJyKGRpcywgZGlzICsgMzAwLCBuZXcgY2MuVmVjMigwLCAwKSwgMTUpXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnViYmxlID0gY2MuaW5zdGFudGlhdGUodGhpcy52aWV3Lm1vdmUxKSBhcyBjYy5Ob2RlO1xuICAgICAgICAgICAgYnViYmxlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgICAgICAgICAgYnViYmxlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIGJ1YmJsZS5zZXRQb3NpdGlvbihwb3NpdGlvbnNbaV1bMF0pXG4gICAgICAgICAgICBsZXQgcm9kb21TY2FsZSA9IE1hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjVcbiAgICAgICAgICAgIGJ1YmJsZS5zZXRTY2FsZShyb2RvbVNjYWxlLCByb2RvbVNjYWxlKVxuICAgICAgICAgICAgY2MudHdlZW4oYnViYmxlKS50bygwLjMsIHsgb3BhY2l0eTogMjAsIHNjYWxlOiAxLCBwb3NpdGlvbjogcG9zaXRpb25zW2ldWzFdIH0pLmNhbGwoKHNlbmRlcjogTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1YmJsZS5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG1vdmVBbmkyKGRpczogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBVSUhlbHBlci5nZXRDaXJjbGVQb2ludHNBcnIoZGlzLCBkaXMgKyA0MDAsIG5ldyBjYy5WZWMyKDAsIDApLCAyMClcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidWJibGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnZpZXcubW92ZTEpIGFzIGNjLk5vZGU7XG4gICAgICAgICAgICBidWJibGUucGFyZW50ID0gdGhpcy5ub2RlXG4gICAgICAgICAgICBidWJibGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgYnViYmxlLnNldFBvc2l0aW9uKHBvc2l0aW9uc1tpXVswXSlcbiAgICAgICAgICAgIGxldCByb2RvbVNjYWxlID0gTWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNVxuICAgICAgICAgICAgYnViYmxlLnNldFNjYWxlKHJvZG9tU2NhbGUsIHJvZG9tU2NhbGUpXG4gICAgICAgICAgICBjYy50d2VlbihidWJibGUpLnRvKDAuMywgeyBvcGFjaXR5OiAyMCwgc2NhbGU6IDEsIHBvc2l0aW9uOiBwb3NpdGlvbnNbaV1bMV0gfSkuY2FsbCgoc2VuZGVyOiBOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgYnViYmxlLmRlc3Ryb3koKVxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXX0=
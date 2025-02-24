
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/mainPack/script/physics2048/Physics2048Main/Physics2048MainModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b27b4B2vNGP6gq+OalkhJu', 'Physics2048MainModel');
// mainPack/script/physics2048/Physics2048Main/Physics2048MainModel.ts

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
var GameConsts_1 = require("../../../../Script/game/GameConsts");
var UIModelBase_1 = require("./../../../../c2f-framework/gui/layer/UIModelBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Physics2048MainModel = /** @class */ (function (_super) {
    __extends(Physics2048MainModel, _super);
    function Physics2048MainModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 预制名 给实例调用 */
        _this.prefabName = 'F_Physics2048Main';
        /**当前最大达到的档位 */
        _this.curHistoryMaxLv = 0;
        _this.curMaxCount = 0;
        return _this;
    }
    Physics2048MainModel.prototype.initData = function () {
        this.totalScore = 0;
        this.curHistoryMaxLv = c2f.storage.getNumber(GameConsts_1.GameConsts.StorageKey.curHistory2048MaxLv);
        this.visibleSize = cc.view.getVisibleSize();
    };
    Physics2048MainModel.prototype.rodomOneIndex = function () {
        var radomNum = c2f.random.getRandomInt(0, 11);
        var index = 0;
        if (radomNum < 3) {
            index = 0;
        }
        else if (radomNum < 5) {
            index = 1;
        }
        else if (radomNum < 10) {
            index = 2;
        }
        else {
            index = 3;
        }
        return index;
    };
    Physics2048MainModel = __decorate([
        ccclass
    ], Physics2048MainModel);
    return Physics2048MainModel;
}(UIModelBase_1.UIModelBase));
exports.default = Physics2048MainModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9tYWluUGFjay9zY3JpcHQvcGh5c2ljczIwNDgvUGh5c2ljczIwNDhNYWluL1BoeXNpY3MyMDQ4TWFpbk1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFnRTtBQUVoRSxpRkFBZ0Y7QUFFMUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Qsd0NBQVc7SUFBN0Q7UUFBQSxxRUFtQ0M7UUFsQ0csZ0JBQWdCO1FBQ1QsZ0JBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUN4QyxlQUFlO1FBQ1IscUJBQWUsR0FBVyxDQUFDLENBQUE7UUFDM0IsaUJBQVcsR0FBVyxDQUFDLENBQUE7O0lBOEJsQyxDQUFDO0lBckJVLHVDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLHVCQUFVLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQy9DLENBQUM7SUFFTSw0Q0FBYSxHQUFwQjtRQUNJLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM3QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDYixJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDZCxLQUFLLEdBQUcsQ0FBQyxDQUFBO1NBQ1o7YUFBTSxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckIsS0FBSyxHQUFHLENBQUMsQ0FBQTtTQUNaO2FBQU0sSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxDQUFDLENBQUE7U0FDWjthQUFNO1lBQ0gsS0FBSyxHQUFHLENBQUMsQ0FBQTtTQUNaO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQWpDZ0Isb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FtQ3hDO0lBQUQsMkJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ2lELHlCQUFXLEdBbUM1RDtrQkFuQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDb25zdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHQvZ2FtZS9HYW1lQ29uc3RzJztcbmltcG9ydCBQaHlzaWNzMjA0OEl0ZW0gZnJvbSAnLi4vUGh5c2ljczIwNDhJdGVtL1BoeXNpY3MyMDQ4SXRlbSc7XG5pbXBvcnQgeyBVSU1vZGVsQmFzZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vYzJmLWZyYW1ld29yay9ndWkvbGF5ZXIvVUlNb2RlbEJhc2UnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MyMDQ4TWFpbk1vZGVsIGV4dGVuZHMgVUlNb2RlbEJhc2Uge1xuICAgIC8qKiDpooTliLblkI0g57uZ5a6e5L6L6LCD55SoICovXG4gICAgcHVibGljIHByZWZhYk5hbWUgPSAnRl9QaHlzaWNzMjA0OE1haW4nO1xuICAgIC8qKuW9k+WJjeacgOWkp+i+vuWIsOeahOaho+S9jSAqL1xuICAgIHB1YmxpYyBjdXJIaXN0b3J5TWF4THY6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgY3VyTWF4Q291bnQ6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgdmlzaWJsZVNpemU6IGNjLlNpemVcbiAgICBwdWJsaWMgYmxvY2tJdGVtOiBjYy5QcmVmYWI7XG4gICAgcHVibGljIGJvb21JdGVtOiBjYy5QcmVmYWI7XG5cblxuICAgIHB1YmxpYyBwaHlzaWNzMjA0OEl0ZW06IFBoeXNpY3MyMDQ4SXRlbTtcbiAgICBwdWJsaWMgaXNDYW5DcmVhdGVOZXc6IGJvb2xlYW47XG4gICAgcHVibGljIHRvdGFsU2NvcmU6IG51bWJlclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcbiAgICAgICAgdGhpcy50b3RhbFNjb3JlID0gMFxuICAgICAgICB0aGlzLmN1ckhpc3RvcnlNYXhMdiA9IGMyZi5zdG9yYWdlLmdldE51bWJlcihHYW1lQ29uc3RzLlN0b3JhZ2VLZXkuY3VySGlzdG9yeTIwNDhNYXhMdilcbiAgICAgICAgdGhpcy52aXNpYmxlU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgIH1cblxuICAgIHB1YmxpYyByb2RvbU9uZUluZGV4KCkge1xuICAgICAgICBsZXQgcmFkb21OdW0gPSBjMmYucmFuZG9tLmdldFJhbmRvbUludCgwLCAxMSlcbiAgICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgICBpZiAocmFkb21OdW0gPCAzKSB7XG4gICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgfSBlbHNlIGlmIChyYWRvbU51bSA8IDUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMVxuICAgICAgICB9IGVsc2UgaWYgKHJhZG9tTnVtIDwgMTApIHtcbiAgICAgICAgICAgIGluZGV4ID0gMlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG59Il19
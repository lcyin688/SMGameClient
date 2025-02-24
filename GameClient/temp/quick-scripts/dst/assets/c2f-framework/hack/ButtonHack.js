
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/ButtonHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11aeeQHGvlOP6jJ8BO6X8yy', 'ButtonHack');
// c2f-framework/hack/ButtonHack.ts

"use strict";
// 基于CocosCreator2.x 按钮组件hack代码
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonState = exports.ButtonHackEvent = void 0;
var C2FConst_1 = require("../define/C2FConst");
var ButtonHackEvent;
(function (ButtonHackEvent) {
    /** 按钮状态变更 */
    ButtonHackEvent["STATE_CHANGE"] = "ButtonHackEvent-STATE_CHANGE";
})(ButtonHackEvent = exports.ButtonHackEvent || (exports.ButtonHackEvent = {}));
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["NORMAL"] = 0] = "NORMAL";
    ButtonState[ButtonState["HOVER"] = 1] = "HOVER";
    ButtonState[ButtonState["PRESSED"] = 2] = "PRESSED";
    ButtonState[ButtonState["DISABLED"] = 3] = "DISABLED";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
if (!CC_EDITOR) {
    if (!cc.Button.prototype["__$CCButtonHack$__"]) {
        cc.Button.prototype["__$CCButtonHack$__"] = true;
    }
    //@ts-ignore
    cc.Button.prototype.engineApplyTransition = cc.Button.prototype._applyTransition;
    //@ts-ignore
    cc.Button.prototype._applyTransition = function (state) {
        if (this.engineApplyTransition) {
            this.engineApplyTransition(state);
        }
        if (this.node) {
            this.node.emit(ButtonHackEvent.STATE_CHANGE, state);
        }
    };
    //@ts-ignore
    cc.Button.prototype.engineOnTouchBegan = cc.Button.prototype._onTouchBegan;
    //@ts-ignore
    cc.Button.prototype._onTouchBegan = function (event) {
        //所有按钮统一添加点击间隔
        var curTick = (new Date()).getTime();
        var clickIntval = null;
        if (this.touchTick) {
            clickIntval = curTick - this.touchTick;
        }
        if (clickIntval && clickIntval < 300) {
            return;
        }
        this.touchTick = curTick;
        //engine
        if (this.engineOnTouchBegan) {
            this.engineOnTouchBegan(event);
        }
        //如果有UI特效组件则优先使用组件
        var sfx = this.node.getComponent('UIAudioEffect');
        if (sfx) {
            return;
        }
        var realName = this.node.name;
        if (realName.startsWith('_')) {
            realName = realName.substring(1);
        }
        if (realName.endsWith('_')) {
            realName = realName.substring(0, realName.length - 1);
        }
        var id = C2FConst_1.C2FConst.UIAudioID.common;
        if (C2FConst_1.C2FConst.closeBtnNames.indexOf(realName) >= 0) {
            id = C2FConst_1.C2FConst.UIAudioID.close;
        }
    };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svQnV0dG9uSGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCOzs7QUFFL0IsK0NBQThDO0FBRTlDLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN2QixhQUFhO0lBQ2IsZ0VBQTZDLENBQUE7QUFDakQsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBRUQsSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ25CLGlEQUFVLENBQUE7SUFDViwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLHFEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUxXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBS3RCO0FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1FBQzVDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQ3BEO0lBRUQsWUFBWTtJQUNaLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pGLFlBQVk7SUFDWixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEtBQVU7UUFDdkQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUMsQ0FBQztJQUdGLFlBQVk7SUFDWixFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDM0UsWUFBWTtJQUNaLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUs7UUFDL0MsY0FBYztRQUNkLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsV0FBVyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxXQUFXLElBQUksV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixRQUFRO1FBQ1IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0Qsa0JBQWtCO1FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTztTQUNWO1FBQ0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxFQUFFLEdBQUcsbUJBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksbUJBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxFQUFFLEdBQUcsbUJBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQyxDQUFDO0NBQ0wiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDln7rkuo5Db2Nvc0NyZWF0b3IyLngg5oyJ6ZKu57uE5Lu2aGFja+S7o+eggVxuXG5pbXBvcnQgeyBDMkZDb25zdCB9IGZyb20gXCIuLi9kZWZpbmUvQzJGQ29uc3RcIjtcblxuZXhwb3J0IGVudW0gQnV0dG9uSGFja0V2ZW50IHtcbiAgICAvKiog5oyJ6ZKu54q25oCB5Y+Y5pu0ICovXG4gICAgU1RBVEVfQ0hBTkdFID0gXCJCdXR0b25IYWNrRXZlbnQtU1RBVEVfQ0hBTkdFXCIsXG59XG5cbmV4cG9ydCBlbnVtIEJ1dHRvblN0YXRlIHtcbiAgICBOT1JNQUwgPSAwLFxuICAgIEhPVkVSID0gMSxcbiAgICBQUkVTU0VEID0gMixcbiAgICBESVNBQkxFRCA9IDMsXG59XG5cbmlmICghQ0NfRURJVE9SKSB7XG4gICAgaWYgKCFjYy5CdXR0b24ucHJvdG90eXBlW1wiX18kQ0NCdXR0b25IYWNrJF9fXCJdKSB7XG4gICAgICAgIGNjLkJ1dHRvbi5wcm90b3R5cGVbXCJfXyRDQ0J1dHRvbkhhY2skX19cIl0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuZW5naW5lQXBwbHlUcmFuc2l0aW9uID0gY2MuQnV0dG9uLnByb3RvdHlwZS5fYXBwbHlUcmFuc2l0aW9uO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuX2FwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmVuZ2luZUFwcGx5VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmVBcHBseVRyYW5zaXRpb24oc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KEJ1dHRvbkhhY2tFdmVudC5TVEFURV9DSEFOR0UsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuZW5naW5lT25Ub3VjaEJlZ2FuID0gY2MuQnV0dG9uLnByb3RvdHlwZS5fb25Ub3VjaEJlZ2FuO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNjLkJ1dHRvbi5wcm90b3R5cGUuX29uVG91Y2hCZWdhbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvL+aJgOacieaMiemSrue7n+S4gOa3u+WKoOeCueWHu+mXtOmalFxuICAgICAgICBsZXQgY3VyVGljayA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBjbGlja0ludHZhbCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGljaykge1xuICAgICAgICAgICAgY2xpY2tJbnR2YWwgPSBjdXJUaWNrIC0gdGhpcy50b3VjaFRpY2s7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrSW50dmFsICYmIGNsaWNrSW50dmFsIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpY2sgPSBjdXJUaWNrO1xuICAgICAgICAvL2VuZ2luZVxuICAgICAgICBpZiAodGhpcy5lbmdpbmVPblRvdWNoQmVnYW4pIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lT25Ub3VjaEJlZ2FuKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvL+WmguaenOaciVVJ54m55pWI57uE5Lu25YiZ5LyY5YWI5L2/55So57uE5Lu2XG4gICAgICAgIGxldCBzZnggPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdVSUF1ZGlvRWZmZWN0Jyk7XG4gICAgICAgIGlmIChzZngpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVhbE5hbWUgPSB0aGlzLm5vZGUubmFtZTtcbiAgICAgICAgaWYgKHJlYWxOYW1lLnN0YXJ0c1dpdGgoJ18nKSkge1xuICAgICAgICAgICAgcmVhbE5hbWUgPSByZWFsTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWxOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICAgICAgICAgIHJlYWxOYW1lID0gcmVhbE5hbWUuc3Vic3RyaW5nKDAsIHJlYWxOYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpZCA9IEMyRkNvbnN0LlVJQXVkaW9JRC5jb21tb247XG4gICAgICAgIGlmIChDMkZDb25zdC5jbG9zZUJ0bk5hbWVzLmluZGV4T2YocmVhbE5hbWUpID49IDApIHtcbiAgICAgICAgICAgIGlkID0gQzJGQ29uc3QuVUlBdWRpb0lELmNsb3NlO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZGVjbGFyZSBtb2R1bGUgY2Mge1xuICAgIGludGVyZmFjZSBCdXR0b24ge1xuICAgICAgICB0b3VjaFRpY2s6IG51bWJlcjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IH07Il19
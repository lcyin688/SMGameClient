
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/hack/EditorBoxHack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd149fL5M1VOXJmnx3sUtJJu', 'EditorBoxHack');
// c2f-framework/hack/EditorBoxHack.ts

// 基于CocosCreator2.x EditBox组件hack代码
// 移动端web环境下，当EditBox会被弹出的软键盘遮挡时，视图向上滚动至EditBox在软键盘上方可见的位置。反之视图位置不变
if (!CC_PREVIEW && cc.sys.platform === cc.sys.MOBILE_BROWSER) {
    cc.EditBox["_ImplClass"].prototype._adjustWindowScroll = function () {
        var self = this;
        setTimeout(function () {
            if (window.scrollY < 100) {
                var editBox = self._delegate;
                if (editBox && editBox.node) {
                    var worldBox = editBox.node.getBoundingBoxToWorld();
                    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    var ratio = cc.winSize.height / scrollHeight;
                    var keyboardDomHeight = scrollHeight - clientHeight;
                    var keyboardCocosHeight = keyboardDomHeight * ratio;
                    console.error("scrollHeight: " + scrollHeight + ", clientHeight: " + clientHeight + ", ratio: " + ratio);
                    console.error("keyboardDomHeight: " + keyboardDomHeight + ", keyboardCocosHeight: " + keyboardCocosHeight);
                    if (worldBox.yMin >= keyboardCocosHeight) {
                        console.error("return");
                        return;
                    }
                    // DOM坐标系下，EditBox底部与软键盘顶部的距离
                    var domDelta = (keyboardCocosHeight - worldBox.yMin) / ratio;
                    window.scroll({ top: domDelta, behavior: 'smooth' });
                    console.error("domDelta: " + domDelta);
                }
                else {
                    self._elem.scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth" });
                    console.error("scrollIntoView");
                }
            }
        }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL2hhY2svRWRpdG9yQm94SGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMsbUVBQW1FO0FBQ25FLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7SUFDMUQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUc7UUFDckQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQztZQUNQLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksT0FBTyxHQUFlLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQ3pCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDcEQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3ZGLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUN2RixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7b0JBQzdDLElBQUksaUJBQWlCLEdBQUcsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDcEQsSUFBSSxtQkFBbUIsR0FBRyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQ3BELE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQWlCLFlBQVksd0JBQW1CLFlBQVksaUJBQVksS0FBTyxDQUFDLENBQUM7b0JBQy9GLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXNCLGlCQUFpQiwrQkFBMEIsbUJBQXFCLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLG1CQUFtQixFQUFFO3dCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN4QixPQUFPO3FCQUNWO29CQUVELDZCQUE2QjtvQkFDN0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUM3RCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFhLFFBQVUsQ0FBQyxDQUFDO2lCQUMxQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDckYsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNuQzthQUNKO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFBO0NBQ0oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDln7rkuo5Db2Nvc0NyZWF0b3IyLnggRWRpdEJveOe7hOS7tmhhY2vku6PnoIFcbi8vIOenu+WKqOerr3dlYueOr+Wig+S4i++8jOW9k0VkaXRCb3jkvJrooqvlvLnlh7rnmoTova/plK7nm5jpga7mjKHml7bvvIzop4blm77lkJHkuIrmu5rliqjoh7NFZGl0Qm945Zyo6L2v6ZSu55uY5LiK5pa55Y+v6KeB55qE5L2N572u44CC5Y+N5LmL6KeG5Zu+5L2N572u5LiN5Y+YXG5pZiAoIUNDX1BSRVZJRVcgJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuTU9CSUxFX0JST1dTRVIpIHtcbiAgICBjYy5FZGl0Qm94W1wiX0ltcGxDbGFzc1wiXS5wcm90b3R5cGUuX2FkanVzdFdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGxldCBlZGl0Qm94OiBjYy5FZGl0Qm94ID0gc2VsZi5fZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgaWYgKGVkaXRCb3ggJiYgZWRpdEJveC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB3b3JsZEJveCA9IGVkaXRCb3gubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmF0aW8gPSBjYy53aW5TaXplLmhlaWdodCAvIHNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleWJvYXJkRG9tSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5Ym9hcmRDb2Nvc0hlaWdodCA9IGtleWJvYXJkRG9tSGVpZ2h0ICogcmF0aW87XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHNjcm9sbEhlaWdodDogJHtzY3JvbGxIZWlnaHR9LCBjbGllbnRIZWlnaHQ6ICR7Y2xpZW50SGVpZ2h0fSwgcmF0aW86ICR7cmF0aW99YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGtleWJvYXJkRG9tSGVpZ2h0OiAke2tleWJvYXJkRG9tSGVpZ2h0fSwga2V5Ym9hcmRDb2Nvc0hlaWdodDogJHtrZXlib2FyZENvY29zSGVpZ2h0fWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAod29ybGRCb3gueU1pbiA+PSBrZXlib2FyZENvY29zSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicmV0dXJuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRE9N5Z2Q5qCH57O75LiL77yMRWRpdEJveOW6lemDqOS4jui9r+mUruebmOmhtumDqOeahOi3neemu1xuICAgICAgICAgICAgICAgICAgICBsZXQgZG9tRGVsdGEgPSAoa2V5Ym9hcmRDb2Nvc0hlaWdodCAtIHdvcmxkQm94LnlNaW4pIC8gcmF0aW87XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoeyB0b3A6IGRvbURlbHRhLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGRvbURlbHRhOiAke2RvbURlbHRhfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2VsZW0uc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiLCBpbmxpbmU6IFwibmVhcmVzdFwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgc2Nyb2xsSW50b1ZpZXdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxufSJdfQ==
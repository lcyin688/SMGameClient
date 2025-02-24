
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/c2f-framework/tbl/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5b2fzKaWVKTrooE6lcSUvM', 'Alert');
// c2f-framework/tbl/Alert.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
var ccclass = cc._decorator.ccclass;
var Alert = /** @class */ (function () {
    function Alert() {
        this.queue = [];
    }
    Alert.getInstance = function () {
        if (!this._instance) {
            this._instance = new Alert();
        }
        return this._instance;
    };
    //private curPanel: DialoguePopup = null;
    Alert.prototype.getConfig = function (config) {
        var result = {};
        if (config.tag) {
            result.tag = config.tag;
        }
        if (config.text) {
            result.text = config.text;
        }
        if (config.title) {
            result.title = config.title;
        }
        if (config.confirmString) {
            result.confirmString = config.confirmString;
        }
        if (config.cancelString) {
            result.cancelString = config.cancelString;
        }
        if (config.richText) {
            result.richText = config.richText;
        }
        if (config.immediatelyCallback) {
            result.immediatelyCallback = config.immediatelyCallback;
        }
        if (config.isRepeat) {
            result.isRepeat = config.isRepeat;
        }
        return result;
    };
    /**显示弹出框 */
    Alert.prototype.show = function (config) {
        if (config.tag && config.isRepeat === false) {
            if (this.isRepeat(config.tag)) {
                console.warn("\u5F39\u51FA\u6846\u5DF2\u7ECF\u5B58\u5728 config : " + JSON.stringify(this.getConfig(config)));
                return false;
            }
        }
        this.queue.push(config);
        this._show(config);
        return true;
    };
    /**@description 当前显示的弹出框是否是tag */
    Alert.prototype.isCurrentShow = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (current.tag == tag) {
        //         return true;
        //     }
        // }
        return false;
    };
    /**@description 获取当前显示弹出的配置 */
    Alert.prototype.currentShow = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (tag) {
        //         if (current.tag == tag) {
        //             return current;
        //         }
        //     } else {
        //         return current;
        //     }
        // }
        return null;
    };
    /**@description 是否有该类型的弹出框 */
    Alert.prototype.isRepeat = function (tag) {
        // if (this.curPanel) {
        //     let current = this.curPanel.model.config;
        //     if (current.tag == tag) {
        //         console.warn(`重复的弹出框 config ; ${JSON.stringify(this.getConfig(current))}`)
        //         return true;
        //     }
        // } else {
        //     for (let i = 0; i < this.queue.length; i++) {
        //         let data = this.queue[i];
        //         if (data.tag == tag) {
        //             console.warn(`重复的弹出框 config ; ${JSON.stringify(this.getConfig(data))}`)
        //             return true;
        //         }
        //     }
        // }
        return false;
    };
    /**@description 关闭当前显示的
     * @param tag 可不传，关闭当前的弹出框，否则关闭指定tag的弹出框
     */
    Alert.prototype.close = function (tag) {
        // if (tag) {
        //     let j = this.queue.length;
        //     while (j--) {
        //         if (this.queue[j].tag == tag) {
        //             this.queue.splice(j, 1);
        //         }
        //     }
        //     if (this.curPanel) {
        //         let current = this.curPanel.model.config;
        //         if (current.tag == tag) {
        //             this.finishAlert();
        //         }
        //     }
        // } else {
        //     this.finishAlert();
        // }
    };
    Alert.prototype.closeAll = function () {
        this.queue = [];
        this.finishAlert();
    };
    Alert.prototype.finishAlert = function () {
        // if (this.curPanel) {
        //     this.curPanel.closeView();
        //     this.curPanel = null;
        // }
        var config = this.queue.shift();
        if (this.queue.length != 0) {
            this._show(this.queue[0]);
            return this.queue[0];
        }
        return config;
    };
    Alert.prototype._show = function (config) {
        // if (!this.curPanel) {
        //     let uic: PopViewParams = {
        //         onUIAdded: (node: cc.Node, params: any) => {
        //             // console.error(" onUIAdded params ", params)
        //             this.curPanel = node.getComponent(DialoguePopup)
        //         },
        //         onUIRemoved: (node: cc.Node, params: any) => {
        //             // console.error(" onUIRemoved  params", params)
        //         },
        //     }
        //     c2f.gui.open(MainPackUI.DialoguePopup, config, uic)
        // }
    };
    Alert._instance = null;
    return Alert;
}());
exports.Alert = Alert;
c2f.alert = Alert.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jMmYtZnJhbWV3b3JrL3RibC9BbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQVNsQztJQUFBO1FBUVksVUFBSyxHQUFrQixFQUFFLENBQUM7SUF1SnRDLENBQUM7SUE3SmlCLGlCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBeUM7SUFHakMseUJBQVMsR0FBakIsVUFBa0IsTUFBbUI7UUFDakMsSUFBSSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztRQUM3QixJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWixNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDM0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDdEIsTUFBTSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUM3QztRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENB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QUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxxQkFBSyxHQUFiLFVBQWMsTUFBbUI7UUFDN0Isd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyx1REFBdUQ7UUFDdkQsNkRBQTZEO1FBQzdELCtEQUErRDtRQUMvRCxhQUFhO1FBQ2IseURBQXlEO1FBQ3pELCtEQUErRDtRQUMvRCxhQUFhO1FBQ2IsUUFBUTtRQUNSLDBEQUEwRDtRQUMxRCxJQUFJO0lBQ1IsQ0FBQztJQTVKYyxlQUFTLEdBQVUsSUFBSSxDQUFBO0lBOEoxQyxZQUFDO0NBL0pELEFBK0pDLElBQUE7QUEvSlksc0JBQUs7QUFpS2xCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGJsIH0gZnJvbSBcIi4vVGJsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBJVGJsIHsgfVxuICAgIGludGVyZmFjZSBJQzJGIHtcbiAgICAgICAgYWxlcnQ6IEFsZXJ0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFsZXJ0IHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEFsZXJ0ID0gbnVsbFxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQWxlcnQge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBbGVydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBxdWV1ZTogQWxlcnRDb25maWdbXSA9IFtdO1xuICAgIC8vcHJpdmF0ZSBjdXJQYW5lbDogRGlhbG9ndWVQb3B1cCA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgZ2V0Q29uZmlnKGNvbmZpZzogQWxlcnRDb25maWcpIHtcbiAgICAgICAgbGV0IHJlc3VsdDogQWxlcnRDb25maWcgPSB7fTtcbiAgICAgICAgaWYgKGNvbmZpZy50YWcpIHtcbiAgICAgICAgICAgIHJlc3VsdC50YWcgPSBjb25maWcudGFnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcudGV4dCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBjb25maWcudGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnRpdGxlKSB7XG4gICAgICAgICAgICByZXN1bHQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5jb25maXJtU3RyaW5nKSB7XG4gICAgICAgICAgICByZXN1bHQuY29uZmlybVN0cmluZyA9IGNvbmZpZy5jb25maXJtU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuY2FuY2VsU3RyaW5nKSB7XG4gICAgICAgICAgICByZXN1bHQuY2FuY2VsU3RyaW5nID0gY29uZmlnLmNhbmNlbFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLnJpY2hUZXh0KSB7XG4gICAgICAgICAgICByZXN1bHQucmljaFRleHQgPSBjb25maWcucmljaFRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5pbW1lZGlhdGVseUNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXN1bHQuaW1tZWRpYXRlbHlDYWxsYmFjayA9IGNvbmZpZy5pbW1lZGlhdGVseUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuaXNSZXBlYXQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5pc1JlcGVhdCA9IGNvbmZpZy5pc1JlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKuaYvuekuuW8ueWHuuahhiAqL1xuICAgIHNob3coY29uZmlnOiBBbGVydENvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLnRhZyAmJiBjb25maWcuaXNSZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JlcGVhdChjb25maWcudGFnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg5by55Ye65qGG5bey57uP5a2Y5ZyoIGNvbmZpZyA6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5nZXRDb25maWcoY29uZmlnKSl9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucXVldWUucHVzaChjb25maWcpO1xuICAgICAgICB0aGlzLl9zaG93KGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG5cbiAgICB9XG5cbiAgICAvKipAZGVzY3JpcHRpb24g5b2T5YmN5pi+56S655qE5by55Ye65qGG5piv5ZCm5pivdGFnICovXG4gICAgcHVibGljIGlzQ3VycmVudFNob3codGFnOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VyUGFuZWwpIHtcbiAgICAgICAgLy8gICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJQYW5lbC5tb2RlbC5jb25maWc7XG4gICAgICAgIC8vICAgICBpZiAoY3VycmVudC50YWcgPT0gdGFnKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKkBkZXNjcmlwdGlvbiDojrflj5blvZPliY3mmL7npLrlvLnlh7rnmoTphY3nva4gKi9cbiAgICBwdWJsaWMgY3VycmVudFNob3codGFnPzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1clBhbmVsKSB7XG4gICAgICAgIC8vICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VyUGFuZWwubW9kZWwuY29uZmlnO1xuICAgICAgICAvLyAgICAgaWYgKHRhZykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChjdXJyZW50LnRhZyA9PSB0YWcpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipAZGVzY3JpcHRpb24g5piv5ZCm5pyJ6K+l57G75Z6L55qE5by55Ye65qGGICovXG4gICAgcHVibGljIGlzUmVwZWF0KHRhZzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1clBhbmVsKSB7XG4gICAgICAgIC8vICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VyUGFuZWwubW9kZWwuY29uZmlnO1xuICAgICAgICAvLyAgICAgaWYgKGN1cnJlbnQudGFnID09IHRhZykge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUud2Fybihg6YeN5aSN55qE5by55Ye65qGGIGNvbmZpZyA7ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5nZXRDb25maWcoY3VycmVudCkpfWApXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgZGF0YSA9IHRoaXMucXVldWVbaV07XG4gICAgICAgIC8vICAgICAgICAgaWYgKGRhdGEudGFnID09IHRhZykge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOmHjeWkjeeahOW8ueWHuuahhiBjb25maWcgOyAke0pTT04uc3RyaW5naWZ5KHRoaXMuZ2V0Q29uZmlnKGRhdGEpKX1gKVxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKkBkZXNjcmlwdGlvbiDlhbPpl63lvZPliY3mmL7npLrnmoQgXG4gICAgICogQHBhcmFtIHRhZyDlj6/kuI3kvKDvvIzlhbPpl63lvZPliY3nmoTlvLnlh7rmoYbvvIzlkKbliJnlhbPpl63mjIflrpp0YWfnmoTlvLnlh7rmoYZcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xvc2UodGFnPzogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmICh0YWcpIHtcbiAgICAgICAgLy8gICAgIGxldCBqID0gdGhpcy5xdWV1ZS5sZW5ndGg7XG4gICAgICAgIC8vICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMucXVldWVbal0udGFnID09IHRhZykge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShqLCAxKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5jdXJQYW5lbCkge1xuICAgICAgICAvLyAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJQYW5lbC5tb2RlbC5jb25maWc7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGN1cnJlbnQudGFnID09IHRhZykge1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZmluaXNoQWxlcnQoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmZpbmlzaEFsZXJ0KCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VBbGwoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5maW5pc2hBbGVydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5pc2hBbGVydCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VyUGFuZWwpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY3VyUGFuZWwuY2xvc2VWaWV3KCk7XG4gICAgICAgIC8vICAgICB0aGlzLmN1clBhbmVsID0gbnVsbDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG93KHRoaXMucXVldWVbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWVbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zaG93KGNvbmZpZzogQWxlcnRDb25maWcpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLmN1clBhbmVsKSB7XG4gICAgICAgIC8vICAgICBsZXQgdWljOiBQb3BWaWV3UGFyYW1zID0ge1xuICAgICAgICAvLyAgICAgICAgIG9uVUlBZGRlZDogKG5vZGU6IGNjLk5vZGUsIHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCIgb25VSUFkZGVkIHBhcmFtcyBcIiwgcGFyYW1zKVxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmN1clBhbmVsID0gbm9kZS5nZXRDb21wb25lbnQoRGlhbG9ndWVQb3B1cClcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIG9uVUlSZW1vdmVkOiAobm9kZTogY2MuTm9kZSwgcGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIiBvblVJUmVtb3ZlZCAgcGFyYW1zXCIsIHBhcmFtcylcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgYzJmLmd1aS5vcGVuKE1haW5QYWNrVUkuRGlhbG9ndWVQb3B1cCwgY29uZmlnLCB1aWMpXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn1cblxuYzJmLmFsZXJ0ID0gQWxlcnQuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==
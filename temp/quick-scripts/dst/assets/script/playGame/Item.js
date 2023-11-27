
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playGame/Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af9a4qiEpVEGLobT+PDI9si', 'Item');
// script/playGame/Item.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.idItem = 0;
        _this.listNode = new Array(4);
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Item.prototype.onLoad = function () {
    };
    Item.prototype.setUp = function (index, arrColor) {
        this.reset();
        this.idItem = index;
        this.arrColor = arrColor;
    };
    Item.prototype.start = function () {
    };
    Item.prototype.onClickItem = function () {
        console.log("qwer", this.idItem);
        this.node.emit("Click_binh", this);
    };
    Item.prototype.reset = function () {
        this.listNode = new Array(4);
    };
    __decorate([
        property(cc.Node)
    ], Item.prototype, "icon", void 0);
    Item = __decorate([
        ccclass
    ], Item);
    return Item;
}(cc.Component));
exports.default = Item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1DQztRQWhDRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFJbkIsY0FBUSxHQUFjLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQXlCbkMsaUJBQWlCO0lBQ3JCLENBQUM7SUF2Qkcsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxRQUFrQjtRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU3QixDQUFDO0lBQ0Qsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwwQkFBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNHO0lBSEosSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1DeEI7SUFBRCxXQUFDO0NBbkNELEFBbUNDLENBbkNpQyxFQUFFLENBQUMsU0FBUyxHQW1DN0M7a0JBbkNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSBcIi4vQmFsbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlkSXRlbTogbnVtYmVyID0gMDtcblxuICAgIGFyckNvbG9yOiBudW1iZXJbXTtcblxuICAgIGxpc3ROb2RlOiBjYy5Ob2RlW10gPSBuZXcgQXJyYXkoNCk7XG5cblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICAgIHNldFVwKGluZGV4LCBhcnJDb2xvcjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmlkSXRlbSA9IGluZGV4O1xuICAgICAgICB0aGlzLmFyckNvbG9yID0gYXJyQ29sb3I7XG5cbiAgICB9XG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgb25DbGlja0l0ZW0oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXdlclwiLCB0aGlzLmlkSXRlbSlcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJDbGlja19iaW5oXCIsIHRoaXMpXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMubGlzdE5vZGUgPSBuZXcgQXJyYXkoNCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
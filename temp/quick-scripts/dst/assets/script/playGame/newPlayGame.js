
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playGame/newPlayGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4f9env1UNJUJQdMcCvN+A6', 'newPlayGame');
// script/playGame/newPlayGame.ts

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
var ItemPrefab_1 = require("../ItemPrefab");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.layer = null;
        _this.layer1 = null;
        _this.layer2 = null;
        _this.layer3 = null;
        _this.layer4 = null;
        _this.arrayItem = [];
        _this.arrItem1 = [3, 1, 1];
        _this.arrItem2 = [3, 2, 2];
        _this.arrItem3 = [2, 2, 3];
        _this.arrItem4 = [1, 3, 1];
        _this.idxClick = -1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.buildMap();
    };
    NewClass.prototype.start = function () {
    };
    // update (dt) {}
    NewClass.prototype.buildMap = function () {
        this.arrayItem = [];
        this.arrayItem.push(this.arrItem1, this.arrItem2, this.arrItem3, this.arrItem4);
        for (var i = 0; i < this.arrayItem.length; i++) {
            this.createItem(this.arrayItem[i], this.layer.children[i]);
        }
    };
    NewClass.prototype.onHanlderClickLayer1 = function () {
        console.log("onHanlderClickLayer1");
        this.onClickItem(1, this.arrItem1, this.layer1);
    };
    NewClass.prototype.onHanlderClickLayer2 = function () {
        console.log("onHanlderClickLayer2");
        this.onClickItem(2, this.arrItem2, this.layer2);
    };
    NewClass.prototype.onHanlderClickLayer3 = function () {
        console.log("onHanlderClickLayer3");
        this.onClickItem(3, this.arrItem3, this.layer3);
    };
    NewClass.prototype.onHanlderClickLayer4 = function () {
        console.log("onHanlderClickLayer4");
        this.onClickItem(4, this.arrItem4, this.layer4);
    };
    NewClass.prototype.onClickItem = function (idItem, arrItemClick, layerItemClick) {
        console.log("onClickItem=--=-=-=");
        if (this.idxClick == -1) {
            //chon diem bat dau
            // arrItemClick cua item bay len
            if (layerItemClick.childrenCount > 0) {
                console.log("click chinh no ==> bay bong len ", arrItemClick);
                this.moveBall(arrItemClick, layerItemClick, 1, layerItemClick);
                this.idxClick = idItem;
            }
            this.idxClick == -1;
        }
        else {
            if (this.idxClick == idItem) {
                // chon dich den la diem bat dau
                console.log("click chinh no lan nua ==> tha bong xuong");
                this.moveBall(arrItemClick, layerItemClick, 0, layerItemClick);
                this.idxClick = -1;
            }
            else {
                // chon dich den la diem khac
                if (this.idxClick == 2) {
                    //   this.moveBall(this.arrItem2, this.layer2, 2, layerItemClick);
                    this.arrItem2 = this.onHanlderClickLayer(this.arrItem2, arrItemClick, this.layer2, layerItemClick);
                    console.log("dich den this.arrItem2: ", this.arrItem2);
                }
                else if (this.idxClick == 3) {
                    //   this.moveBall(this.arrItem3, this.layer3, 2, layerItemClick);
                    this.arrItem3 = this.onHanlderClickLayer(this.arrItem3, arrItemClick, this.layer3, layerItemClick);
                    console.log("dich den this.arrItem3: ", this.arrItem3);
                }
                else if (this.idxClick == 1) {
                    //   this.moveBall(this.arrItem1, this.layer1, 2, layerItemClick);
                    this.arrItem1 = this.onHanlderClickLayer(this.arrItem1, arrItemClick, this.layer1, layerItemClick);
                    console.log("dich den this.arrItem1: ", this.arrItem1);
                }
                else if (this.idxClick == 4) {
                    //   this.moveBall(this.arrItem4, this.layer4, 2, layerItemClick);
                    this.arrItem4 = this.onHanlderClickLayer(this.arrItem4, arrItemClick, this.layer4, layerItemClick);
                    console.log("dich den this.arrItem4: ", this.arrItem4);
                }
                this.idxClick = -1;
            }
        }
    };
    NewClass.prototype.onHanlderClickLayer = function (arrItem, arrItemClick, layerOut, layerIn) {
        if (arrItem === void 0) { arrItem = []; }
        if (arrItemClick === void 0) { arrItemClick = []; }
        // arrItemClick cua dich den
        console.log("arrItem ban dau : ", arrItem);
        console.log("arrItemClick ban dau : ", arrItemClick);
        // lay phan tu cuoi cung
        var arrMove = [arrItem[arrItem.length - 1]];
        // lay nhung phan tu giong phan tu cuoi
        if (arrItem.length > 1) {
            for (var i = arrItem.length - 2; i > -1; i--) {
                if (arrItem[i] == arrMove[0]) {
                    arrMove.push(arrItem[i]);
                }
                else {
                    break;
                }
            }
        }
        console.log("arrMove : ", arrMove);
        var arrIndexRemove = [];
        for (var i = arrItem.length - 1; i > arrItem.length - 1 - arrMove.length; i--) {
            arrIndexRemove.push(i);
        }
        // console.log("array index remove=--=-=-=-==-=-: ", arrIndexRemove);
        // check max item
        var maxItem = arrItemClick.length + arrMove.length;
        if (maxItem > 4) {
            this.moveBall(arrItem, layerOut, 0, layerIn);
            console.log("maxItem ==> khong di chuyen duoc", arrItemClick, arrItem);
            return arrItem;
        }
        else {
            // xu ly di chuyen
            // check cung mau cho di chuyen
            if (arrItemClick[arrItemClick.length - 1] == arrMove[arrMove.length - 1] || arrItemClick.length < 1) {
                for (var i = 0; i < arrMove.length; i++) {
                    arrItemClick.push(arrMove[i]);
                }
                this.moveBall(arrItem, layerOut, 2, layerIn);
                var index = arrItem.length - arrMove.length;
                arrItem = arrItem.slice(0, index);
                // for (let i = 0; i < arrItemClick.length; i++) {
                //     if (arrItemClick[i] = arrMove[0] && arrItemClick.length == 4) {
                //         layerIn.getComponent(cc.Button).interactable = false;
                //     }
                // }
                console.log("ban dau slice : ", arrItem);
                console.log("dich den sau khi di chuyen: ", arrItemClick);
                return arrItem;
            }
            else {
                this.moveBall(arrItem, layerOut, 0, layerIn);
                console.log("arrItem", arrItem, "layerOut", layerOut, "layerIn", layerIn);
                console.log("chua di chuyen duoc");
                return arrItem;
            }
        }
    };
    NewClass.prototype.moveBall = function (arrItem, layerOut, idx, layerIn) {
        var arrMove = [arrItem[arrItem.length - 1]];
        if (arrItem.length > 1) {
            for (var i = arrItem.length - 2; i > -1; i--) {
                if (arrItem[i] == arrMove[0]) {
                    arrMove.push(arrItem[i]);
                }
                else {
                    break;
                }
            }
        }
        var arrIndexRemove = [];
        for (var i = arrItem.length - 1; i > arrItem.length - 1 - arrMove.length; i--) {
            arrIndexRemove.push(i);
        }
        console.log("arrIndexRemove=-=-=-=-", arrIndexRemove);
        var _loop_1 = function (i) {
            var icon = layerOut.children[arrIndexRemove[i]];
            // console.log("quang layerOut.children -=-=-=-=-=-", layerOut.children)
            console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove, arrIndexRemove[i]);
            // let pos = layerIn.parent.convertToWorldSpaceAR(layerIn.position);
            // let pos1 = icon.convertToNodeSpaceAR(pos);
            if (idx == 1) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + 300 + i * -30 })
                    .call(function () {
                    console.log("quanghh=-=-=-", layerOut.position.y + 300 + i * -30);
                })
                    .start();
            }
            else if (idx == 0) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + arrIndexRemove[i] * 50 })
                    .start();
            }
            else if (idx == 2) {
                layerIn.getComponent(cc.Button).interactable = false;
                layerOut.getComponent(cc.Button).interactable = false;
                icon.setParent(layerIn);
                var a = layerOut.parent.convertToWorldSpaceAR(layerOut.position);
                var b = icon.convertToNodeSpaceAR(a);
                icon.setPosition(b.x, layerOut.position.y + 300);
                console.log("quanghh=-=-=-", i);
                cc.tween(icon)
                    .to(0.3, { x: 0 })
                    .to(0.3, { y: layerIn.position.y + (layerIn.childrenCount - 1) * 50 })
                    .call(function () {
                    layerOut.removeChild(icon, true);
                })
                    .call(function () {
                    // icon.setPosition(0, layerIn.childrenCount * 50);
                    // layerIn.addChild(icon);
                    layerIn.getComponent(cc.Button).interactable = true;
                    layerOut.getComponent(cc.Button).interactable = true;
                })
                    .start();
            }
        };
        for (var i = 0; i < arrIndexRemove.length; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.createItem = function (arr, layer) {
        if (arr === void 0) { arr = []; }
        for (var i = 0; i < arr.length; i++) {
            var item = cc.instantiate(this.itemPrefab);
            item.getComponent(ItemPrefab_1.default).setIndex(arr[i]);
            item.x = 0;
            item.y = i * 50;
            layer.addChild(item);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer4", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBR2pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOE5DO1FBNU5HLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsY0FBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7O0lBeU0xQixDQUFDO0lBdk1HLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELGlCQUFpQjtJQUNqQiwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFB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ZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1QcmVmYWIgZnJvbSBcIi4uL0l0ZW1QcmVmYWJcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtUHJlZmFiOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5ZXIxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyMzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5ZXI0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGFycmF5SXRlbSA9IFtdO1xuXG4gICAgYXJySXRlbTEgPSBbMywgMSwgMV07XG4gICAgYXJySXRlbTIgPSBbMywgMiwgMl07XG4gICAgYXJySXRlbTMgPSBbMiwgMiwgM107XG4gICAgYXJySXRlbTQgPSBbMSwgMywgMV07XG5cbiAgICBpZHhDbGljazogbnVtYmVyID0gLTE7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgYnVpbGRNYXAoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlJdGVtID0gW107XG4gICAgICAgIHRoaXMuYXJyYXlJdGVtLnB1c2godGhpcy5hcnJJdGVtMSwgdGhpcy5hcnJJdGVtMiwgdGhpcy5hcnJJdGVtMywgdGhpcy5hcnJJdGVtNClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKHRoaXMuYXJyYXlJdGVtW2ldLCB0aGlzLmxheWVyLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyMSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkhhbmxkZXJDbGlja0xheWVyMVwiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrSXRlbSgxLCB0aGlzLmFyckl0ZW0xLCB0aGlzLmxheWVyMSk7XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSGFubGRlckNsaWNrTGF5ZXIyXCIpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tJdGVtKDIsIHRoaXMuYXJySXRlbTIsIHRoaXMubGF5ZXIyKTtcbiAgICB9XG4gICAgb25IYW5sZGVyQ2xpY2tMYXllcjMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25IYW5sZGVyQ2xpY2tMYXllcjNcIik7XG4gICAgICAgIHRoaXMub25DbGlja0l0ZW0oMywgdGhpcy5hcnJJdGVtMywgdGhpcy5sYXllcjMpO1xuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyNCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkhhbmxkZXJDbGlja0xheWVyNFwiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrSXRlbSg0LCB0aGlzLmFyckl0ZW00LCB0aGlzLmxheWVyNCk7XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGlkSXRlbSwgYXJySXRlbUNsaWNrLCBsYXllckl0ZW1DbGljaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIik7XG4gICAgICAgIGlmICh0aGlzLmlkeENsaWNrID09IC0xKSB7XG4gICAgICAgICAgICAvL2Nob24gZGllbSBiYXQgZGF1XG4gICAgICAgICAgICAvLyBhcnJJdGVtQ2xpY2sgY3VhIGl0ZW0gYmF5IGxlblxuICAgICAgICAgICAgaWYgKGxheWVySXRlbUNsaWNrLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBjaGluaCBubyA9PT4gYmF5IGJvbmcgbGVuIFwiLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbUNsaWNrLCBsYXllckl0ZW1DbGljaywgMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaWR4Q2xpY2sgPSBpZEl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlkeENsaWNrID09IC0xXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZHhDbGljayA9PSBpZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBjaG9uIGRpY2ggZGVuIGxhIGRpZW0gYmF0IGRhdVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgY2hpbmggbm8gbGFuIG51YSA9PT4gdGhhIGJvbmcgeHVvbmdcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtQ2xpY2ssIGxheWVySXRlbUNsaWNrLCAwLCBsYXllckl0ZW1DbGljaylcbiAgICAgICAgICAgICAgICB0aGlzLmlkeENsaWNrID0gLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNob24gZGljaCBkZW4gbGEgZGllbSBraGFjXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubW92ZUJhbGwodGhpcy5hcnJJdGVtMiwgdGhpcy5sYXllcjIsIDIsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJdGVtMiA9IHRoaXMub25IYW5sZGVyQ2xpY2tMYXllcih0aGlzLmFyckl0ZW0yLCBhcnJJdGVtQ2xpY2ssIHRoaXMubGF5ZXIyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gdGhpcy5hcnJJdGVtMjogXCIsIHRoaXMuYXJySXRlbTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZHhDbGljayA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tb3ZlQmFsbCh0aGlzLmFyckl0ZW0zLCB0aGlzLmxheWVyMywgMiwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckl0ZW0zID0gdGhpcy5vbkhhbmxkZXJDbGlja0xheWVyKHRoaXMuYXJySXRlbTMsIGFyckl0ZW1DbGljaywgdGhpcy5sYXllcjMsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWNoIGRlbiB0aGlzLmFyckl0ZW0zOiBcIiwgdGhpcy5hcnJJdGVtMyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkeENsaWNrID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1vdmVCYWxsKHRoaXMuYXJySXRlbTEsIHRoaXMubGF5ZXIxLCAyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySXRlbTEgPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5hcnJJdGVtMSwgYXJySXRlbUNsaWNrLCB0aGlzLmxheWVyMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHRoaXMuYXJySXRlbTE6IFwiLCB0aGlzLmFyckl0ZW0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubW92ZUJhbGwodGhpcy5hcnJJdGVtNCwgdGhpcy5sYXllcjQsIDIsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJdGVtNCA9IHRoaXMub25IYW5sZGVyQ2xpY2tMYXllcih0aGlzLmFyckl0ZW00LCBhcnJJdGVtQ2xpY2ssIHRoaXMubGF5ZXI0LCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gdGhpcy5hcnJJdGVtNDogXCIsIHRoaXMuYXJySXRlbTQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlkeENsaWNrID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25IYW5sZGVyQ2xpY2tMYXllcihhcnJJdGVtID0gW10sIGFyckl0ZW1DbGljayA9IFtdLCBsYXllck91dCwgbGF5ZXJJbikge1xuICAgICAgICAvLyBhcnJJdGVtQ2xpY2sgY3VhIGRpY2ggZGVuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJySXRlbSBiYW4gZGF1IDogXCIsIGFyckl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW1DbGljayBiYW4gZGF1IDogXCIsIGFyckl0ZW1DbGljayk7XG5cbiAgICAgICAgLy8gbGF5IHBoYW4gdHUgY3VvaSBjdW5nXG4gICAgICAgIGxldCBhcnJNb3ZlID0gW2Fyckl0ZW1bYXJySXRlbS5sZW5ndGggLSAxXV07XG4gICAgICAgIC8vIGxheSBuaHVuZyBwaGFuIHR1IGdpb25nIHBoYW4gdHUgY3VvaVxuICAgICAgICBpZiAoYXJySXRlbS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAyOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJJdGVtW2ldID09IGFyck1vdmVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyTW92ZS5wdXNoKGFyckl0ZW1baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFyck1vdmUgOiBcIiwgYXJyTW92ZSk7XG4gICAgICAgIGxldCBhcnJJbmRleFJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAxOyBpID4gYXJySXRlbS5sZW5ndGggLSAxIC0gYXJyTW92ZS5sZW5ndGg7IGktLSkge1xuICAgICAgICAgICAgYXJySW5kZXhSZW1vdmUucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFycmF5IGluZGV4IHJlbW92ZT0tLT0tPS09LT09LT0tOiBcIiwgYXJySW5kZXhSZW1vdmUpO1xuICAgICAgICAvLyBjaGVjayBtYXggaXRlbVxuICAgICAgICBsZXQgbWF4SXRlbSA9IGFyckl0ZW1DbGljay5sZW5ndGggKyBhcnJNb3ZlLmxlbmd0aDtcbiAgICAgICAgaWYgKG1heEl0ZW0gPiA0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAwLCBsYXllckluKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF4SXRlbSA9PT4ga2hvbmcgZGkgY2h1eWVuIGR1b2NcIiwgYXJySXRlbUNsaWNrLCBhcnJJdGVtKVxuICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB4dSBseSBkaSBjaHV5ZW5cbiAgICAgICAgICAgIC8vIGNoZWNrIGN1bmcgbWF1IGNobyBkaSBjaHV5ZW5cbiAgICAgICAgICAgIGlmIChhcnJJdGVtQ2xpY2tbYXJySXRlbUNsaWNrLmxlbmd0aCAtIDFdID09IGFyck1vdmVbYXJyTW92ZS5sZW5ndGggLSAxXSB8fCBhcnJJdGVtQ2xpY2subGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcnJJdGVtQ2xpY2sucHVzaChhcnJNb3ZlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMiwgbGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXJySXRlbS5sZW5ndGggLSBhcnJNb3ZlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBhcnJJdGVtID0gYXJySXRlbS5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJJdGVtQ2xpY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGFyckl0ZW1DbGlja1tpXSA9IGFyck1vdmVbMF0gJiYgYXJySXRlbUNsaWNrLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuIGRhdSBzbGljZSA6IFwiLCBhcnJJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHNhdSBraGkgZGkgY2h1eWVuOiBcIiwgYXJySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMCwgbGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtXCIsIGFyckl0ZW0sIFwibGF5ZXJPdXRcIiwgbGF5ZXJPdXQsIFwibGF5ZXJJblwiLCBsYXllckluKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNodWEgZGkgY2h1eWVuIGR1b2NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBtb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgaWR4LCBsYXllckluKSB7XG4gICAgICAgIGxldCBhcnJNb3ZlID0gW2Fyckl0ZW1bYXJySXRlbS5sZW5ndGggLSAxXV07XG4gICAgICAgIGlmIChhcnJJdGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDI7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyckl0ZW1baV0gPT0gYXJyTW92ZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJNb3ZlLnB1c2goYXJySXRlbVtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFyckluZGV4UmVtb3ZlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDE7IGkgPiBhcnJJdGVtLmxlbmd0aCAtIDEgLSBhcnJNb3ZlLmxlbmd0aDsgaS0tKSB7XG4gICAgICAgICAgICBhcnJJbmRleFJlbW92ZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJySW5kZXhSZW1vdmU9LT0tPS09LVwiLCBhcnJJbmRleFJlbW92ZSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJJbmRleFJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBsYXllck91dC5jaGlsZHJlblthcnJJbmRleFJlbW92ZVtpXV07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW5nIGxheWVyT3V0LmNoaWxkcmVuIC09LT0tPS09LT0tXCIsIGxheWVyT3V0LmNoaWxkcmVuKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZyBhcnJJbmRleFJlbW92ZSAtPS09LT0tPS09LVwiLCBhcnJJbmRleFJlbW92ZSwgYXJySW5kZXhSZW1vdmVbaV0pXG5cbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSBsYXllckluLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobGF5ZXJJbi5wb3NpdGlvbik7XG4gICAgICAgICAgICAvLyBsZXQgcG9zMSA9IGljb24uY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGlmIChpZHggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGljb24pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogbGF5ZXJPdXQucG9zaXRpb24ueSArIDMwMCArIGkgKiAtMzAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZ2hoPS09LT0tXCIsIGxheWVyT3V0LnBvc2l0aW9uLnkgKyAzMDAgKyBpICogLTMwKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGxheWVyT3V0LnBvc2l0aW9uLnkgKyBhcnJJbmRleFJlbW92ZVtpXSAqIDUwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMikge1xuICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGF5ZXJPdXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBsYXllck91dC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxheWVyT3V0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IGljb24uY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQb3NpdGlvbihiLngsIGxheWVyT3V0LnBvc2l0aW9uLnkgKyAzMDApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZ2hoPS09LT0tXCIsIGkpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMywgeyB4OiAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgeTogbGF5ZXJJbi5wb3NpdGlvbi55ICsgKGxheWVySW4uY2hpbGRyZW5Db3VudCAtIDEpICogNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPdXQucmVtb3ZlQ2hpbGQoaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGljb24uc2V0UG9zaXRpb24oMCwgbGF5ZXJJbi5jaGlsZHJlbkNvdW50ICogNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5ZXJJbi5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUl0ZW0oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaXRlbS54ID0gMDtcbiAgICAgICAgICAgIGl0ZW0ueSA9IGkgKiA1MDtcbiAgICAgICAgICAgIGxheWVyLmFkZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
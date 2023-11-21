
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
        _this.arrItem1 = [];
        _this.arrItem2 = [2, 3, 3];
        _this.arrItem3 = [3, 2, 2];
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
            return arrItem;
            console.log("maxItem ==> khong di chuyen duoc", arrItemClick, arrItem);
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
            // console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove)
            var pos = layerIn.parent.convertToWorldSpaceAR(layerIn.position);
            var pos1 = icon.convertToNodeSpaceAR(pos);
            if (idx == 1) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + 300 + i * -50 })
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
                cc.tween(icon)
                    .to(0.2, { x: pos1.x })
                    .to(0.2, { y: layerIn.childrenCount * 50 })
                    .delay(0.1).call(function () {
                    layerOut.removeChild(icon, true);
                })
                    .call(function () {
                    icon.setPosition(0, layerIn.childrenCount * 50);
                    layerIn.addChild(icon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBR2pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaU5DO1FBL01HLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJCLGNBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUE0TDFCLENBQUM7SUExTEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsaUJBQWlCO0lBQ2pCLDJCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFB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QUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRXhCO0lBQ0wsQ0FBQztJQTdNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQVpOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpTjVCO0lBQUQsZUFBQztDQWpORCxBQWlOQyxDQWpOcUMsRUFBRSxDQUFDLFNBQVMsR0FpTmpEO2tCQWpOb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtUHJlZmFiIGZyb20gXCIuLi9JdGVtUHJlZmFiXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVByZWZhYjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5ZXIyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyNDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBhcnJheUl0ZW0gPSBbXTtcblxuICAgIGFyckl0ZW0xID0gW107XG4gICAgYXJySXRlbTIgPSBbMiwgMywgM107XG4gICAgYXJySXRlbTMgPSBbMywgMiwgMl07XG4gICAgYXJySXRlbTQgPSBbMSwgMywgMV07XG5cbiAgICBpZHhDbGljazogbnVtYmVyID0gLTE7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgYnVpbGRNYXAoKSB7XG4gICAgICAgIHRoaXMuYXJyYXlJdGVtID0gW107XG4gICAgICAgIHRoaXMuYXJyYXlJdGVtLnB1c2godGhpcy5hcnJJdGVtMSwgdGhpcy5hcnJJdGVtMiwgdGhpcy5hcnJJdGVtMywgdGhpcy5hcnJJdGVtNClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVJdGVtKHRoaXMuYXJyYXlJdGVtW2ldLCB0aGlzLmxheWVyLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyMSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkhhbmxkZXJDbGlja0xheWVyMVwiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrSXRlbSgxLCB0aGlzLmFyckl0ZW0xLCB0aGlzLmxheWVyMSk7XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSGFubGRlckNsaWNrTGF5ZXIyXCIpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tJdGVtKDIsIHRoaXMuYXJySXRlbTIsIHRoaXMubGF5ZXIyKTtcbiAgICB9XG4gICAgb25IYW5sZGVyQ2xpY2tMYXllcjMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25IYW5sZGVyQ2xpY2tMYXllcjNcIik7XG4gICAgICAgIHRoaXMub25DbGlja0l0ZW0oMywgdGhpcy5hcnJJdGVtMywgdGhpcy5sYXllcjMpO1xuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyNCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkhhbmxkZXJDbGlja0xheWVyNFwiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrSXRlbSg0LCB0aGlzLmFyckl0ZW00LCB0aGlzLmxheWVyNCk7XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGlkSXRlbSwgYXJySXRlbUNsaWNrLCBsYXllckl0ZW1DbGljaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIik7XG4gICAgICAgIGlmICh0aGlzLmlkeENsaWNrID09IC0xKSB7XG4gICAgICAgICAgICAvL2Nob24gZGllbSBiYXQgZGF1XG4gICAgICAgICAgICAvLyBhcnJJdGVtQ2xpY2sgY3VhIGl0ZW0gYmF5IGxlblxuICAgICAgICAgICAgaWYgKGxheWVySXRlbUNsaWNrLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBjaGluaCBubyA9PT4gYmF5IGJvbmcgbGVuIFwiLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbUNsaWNrLCBsYXllckl0ZW1DbGljaywgMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaWR4Q2xpY2sgPSBpZEl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlkeENsaWNrID09IC0xXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZHhDbGljayA9PSBpZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBjaG9uIGRpY2ggZGVuIGxhIGRpZW0gYmF0IGRhdVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgY2hpbmggbm8gbGFuIG51YSA9PT4gdGhhIGJvbmcgeHVvbmdcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtQ2xpY2ssIGxheWVySXRlbUNsaWNrLCAwLCBsYXllckl0ZW1DbGljaylcbiAgICAgICAgICAgICAgICB0aGlzLmlkeENsaWNrID0gLTE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNob24gZGljaCBkZW4gbGEgZGllbSBraGFjXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubW92ZUJhbGwodGhpcy5hcnJJdGVtMiwgdGhpcy5sYXllcjIsIDIsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJdGVtMiA9IHRoaXMub25IYW5sZGVyQ2xpY2tMYXllcih0aGlzLmFyckl0ZW0yLCBhcnJJdGVtQ2xpY2ssIHRoaXMubGF5ZXIyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gdGhpcy5hcnJJdGVtMjogXCIsIHRoaXMuYXJySXRlbTIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZHhDbGljayA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tb3ZlQmFsbCh0aGlzLmFyckl0ZW0zLCB0aGlzLmxheWVyMywgMiwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckl0ZW0zID0gdGhpcy5vbkhhbmxkZXJDbGlja0xheWVyKHRoaXMuYXJySXRlbTMsIGFyckl0ZW1DbGljaywgdGhpcy5sYXllcjMsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWNoIGRlbiB0aGlzLmFyckl0ZW0zOiBcIiwgdGhpcy5hcnJJdGVtMyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkeENsaWNrID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1vdmVCYWxsKHRoaXMuYXJySXRlbTEsIHRoaXMubGF5ZXIxLCAyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySXRlbTEgPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5hcnJJdGVtMSwgYXJySXRlbUNsaWNrLCB0aGlzLmxheWVyMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHRoaXMuYXJySXRlbTE6IFwiLCB0aGlzLmFyckl0ZW0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubW92ZUJhbGwodGhpcy5hcnJJdGVtNCwgdGhpcy5sYXllcjQsIDIsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJdGVtNCA9IHRoaXMub25IYW5sZGVyQ2xpY2tMYXllcih0aGlzLmFyckl0ZW00LCBhcnJJdGVtQ2xpY2ssIHRoaXMubGF5ZXI0LCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gdGhpcy5hcnJJdGVtNDogXCIsIHRoaXMuYXJySXRlbTQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlkeENsaWNrID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25IYW5sZGVyQ2xpY2tMYXllcihhcnJJdGVtID0gW10sIGFyckl0ZW1DbGljayA9IFtdLCBsYXllck91dCwgbGF5ZXJJbikge1xuICAgICAgICAvLyBhcnJJdGVtQ2xpY2sgY3VhIGRpY2ggZGVuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJySXRlbSBiYW4gZGF1IDogXCIsIGFyckl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW1DbGljayBiYW4gZGF1IDogXCIsIGFyckl0ZW1DbGljayk7XG5cbiAgICAgICAgLy8gbGF5IHBoYW4gdHUgY3VvaSBjdW5nXG4gICAgICAgIGxldCBhcnJNb3ZlID0gW2Fyckl0ZW1bYXJySXRlbS5sZW5ndGggLSAxXV07XG4gICAgICAgIC8vIGxheSBuaHVuZyBwaGFuIHR1IGdpb25nIHBoYW4gdHUgY3VvaVxuICAgICAgICBpZiAoYXJySXRlbS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAyOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJJdGVtW2ldID09IGFyck1vdmVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyTW92ZS5wdXNoKGFyckl0ZW1baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFyck1vdmUgOiBcIiwgYXJyTW92ZSk7XG4gICAgICAgIGxldCBhcnJJbmRleFJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAxOyBpID4gYXJySXRlbS5sZW5ndGggLSAxIC0gYXJyTW92ZS5sZW5ndGg7IGktLSkge1xuICAgICAgICAgICAgYXJySW5kZXhSZW1vdmUucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFycmF5IGluZGV4IHJlbW92ZT0tLT0tPS09LT09LT0tOiBcIiwgYXJySW5kZXhSZW1vdmUpO1xuICAgICAgICAvLyBjaGVjayBtYXggaXRlbVxuICAgICAgICBsZXQgbWF4SXRlbSA9IGFyckl0ZW1DbGljay5sZW5ndGggKyBhcnJNb3ZlLmxlbmd0aDtcbiAgICAgICAgaWYgKG1heEl0ZW0gPiA0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAwLCBsYXllckluKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXhJdGVtID09PiBraG9uZyBkaSBjaHV5ZW4gZHVvY1wiLCBhcnJJdGVtQ2xpY2ssIGFyckl0ZW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB4dSBseSBkaSBjaHV5ZW5cbiAgICAgICAgICAgIC8vIGNoZWNrIGN1bmcgbWF1IGNobyBkaSBjaHV5ZW5cbiAgICAgICAgICAgIGlmIChhcnJJdGVtQ2xpY2tbYXJySXRlbUNsaWNrLmxlbmd0aCAtIDFdID09IGFyck1vdmVbYXJyTW92ZS5sZW5ndGggLSAxXSB8fCBhcnJJdGVtQ2xpY2subGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcnJJdGVtQ2xpY2sucHVzaChhcnJNb3ZlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMiwgbGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXJySXRlbS5sZW5ndGggLSBhcnJNb3ZlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBhcnJJdGVtID0gYXJySXRlbS5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW4gZGF1IHNsaWNlIDogXCIsIGFyckl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gc2F1IGtoaSBkaSBjaHV5ZW46IFwiLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAwLCBsYXllckluKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW1cIiwgYXJySXRlbSwgXCJsYXllck91dFwiLCBsYXllck91dCwgXCJsYXllckluXCIsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2h1YSBkaSBjaHV5ZW4gZHVvY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCBpZHgsIGxheWVySW4pIHtcbiAgICAgICAgbGV0IGFyck1vdmUgPSBbYXJySXRlbVthcnJJdGVtLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJbmRleFJlbW92ZT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckluZGV4UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheWVyT3V0LmNoaWxkcmVuW2FyckluZGV4UmVtb3ZlW2ldXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhbmcgbGF5ZXJPdXQuY2hpbGRyZW4gLT0tPS09LT0tPS1cIiwgbGF5ZXJPdXQuY2hpbGRyZW4pXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW5nIGFyckluZGV4UmVtb3ZlIC09LT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlKVxuXG4gICAgICAgICAgICBsZXQgcG9zID0gbGF5ZXJJbi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxheWVySW4ucG9zaXRpb24pO1xuICAgICAgICAgICAgbGV0IHBvczEgPSBpY29uLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICBpZiAoaWR4ID09IDEpIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGxheWVyT3V0LnBvc2l0aW9uLnkgKyAzMDAgKyBpICogLTUwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGljb24pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogbGF5ZXJPdXQucG9zaXRpb24ueSArIGFyckluZGV4UmVtb3ZlW2ldICogNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbGF5ZXJJbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsYXllck91dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHBvczEueCB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGxheWVySW4uY2hpbGRyZW5Db3VudCAqIDUwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPdXQucmVtb3ZlQ2hpbGQoaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uc2V0UG9zaXRpb24oMCwgbGF5ZXJJbi5jaGlsZHJlbkNvdW50ICogNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJJbi5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUl0ZW0oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaXRlbS54ID0gMDtcbiAgICAgICAgICAgIGl0ZW0ueSA9IGkgKiA1MDtcbiAgICAgICAgICAgIGxheWVyLmFkZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
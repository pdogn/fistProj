"use strict";
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
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconPrefab = null;
        _this.item = null;
        _this.layer = null;
        _this.layer1 = null;
        _this.lbWin = null;
        _this.lbGameOver = null;
        _this.lbCount = null;
        _this.lb = null;
        _this.mapData = [];
        _this.arrayItem = [
            2, 0, 2, -1,
            2, 2, 0, -1,
            1, 0, 1, -1,
            3, 3, -3, -2,
            1, 1, -1, -1,
            3, 3, 0, -2,
        ];
        _this.layerOut = null;
        _this.indexArrayOut = -1;
        _this.level = 1;
        _this.gameOver = 0;
        _this.aarr = [];
        _this.clickCount = 0;
        _this.arrBack = [];
        _this.arrGameOver = [0];
        _this.count = 20;
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
        var _this = this;
        // if (this.mapData.length == 0) {
        for (var i = 0; i < this.arrayItem.length; i++) {
            if (this.arrayItem[i] >= 0) {
                this.aarr.push(this.arrayItem[i]);
            }
        }
        this.mapData = this.sliceArr(this.arrayItem, 4);
        // }
        console.log(this.mapData);
        var _loop_1 = function (i) {
            for (var j = 0; j < 4; j++) {
                if (this_1.mapData[i][j] < 0) {
                    this_1.mapData[i] = this_1.mapData[i].slice(0, j);
                }
            }
            var item = cc.instantiate(this_1.item);
            item.setParent(this_1.layer);
            if (i < 4) {
                item.setPosition(this_1.layer1.children[i].getPosition());
            }
            else {
                // item.y = -100;
                item.setPosition(this_1.layer1.children[i].getPosition());
            }
            console.log("-==-=positons=-==", item.y);
            item.active = true;
            item.name = ("item" + i);
            this_1.createIcon(this_1.mapData[i], item);
            var scriptItem = item.getComponent(Item_1.default);
            scriptItem.setUp(i, this_1.mapData[i]);
            item.on("Click_binh", function () {
                console.log("this.layer.children[scriptItem.idItem]", _this.layer.children[scriptItem.idItem]);
                _this.onClickItem(scriptItem.idItem, _this.layer.children[scriptItem.idItem]);
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.mapData.length; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.onClickItem = function (idItem, layerItemClick) {
        console.log("onClickItem=--=-=-=");
        if (this.indexArrayOut == -1) {
            //chon diem bat dau
            // arrItemClick cua item bay len
            console.log("onClickItem=--=-=-=", this.mapData);
            this.layerOut = layerItemClick;
            if (layerItemClick.childrenCount > 0) {
                console.log("click chinh no ==> bay bong len ", layerItemClick.childrenCount);
                this.moveBall(this.mapData[idItem], layerItemClick, 1, layerItemClick);
                this.indexArrayOut = idItem;
            }
        }
        else {
            if (this.indexArrayOut == idItem) {
                // chon dich den la diem bat dau
                console.log("click chinh no lan nua ==> tha bong xuong");
                this.moveBall(this.mapData[idItem], layerItemClick, 0, layerItemClick);
            }
            else {
                this.clickCount++;
                console.log("this.clickCount=-=-=-=-", this.clickCount);
                // chon dich den la diem khac
                console.log("onClickItem=--=-=-=", this.mapData);
                // console.log("dich den arrItemClick: ", this.mapData[idItem]);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.layerOut);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.indexArrayOut);
                this.mapData[this.indexArrayOut] = this.onHanlderClickLayer(this.mapData[this.indexArrayOut], this.mapData[idItem], this.layerOut, layerItemClick);
                console.log("==============");
                // console.log("quang0011", this.mapData);
                this.arrBack.push(JSON.parse(JSON.stringify(this.mapData)));
                console.log("quang001-arrBack", this.arrBack);
            }
            this.indexArrayOut = -1;
            this.layerOut = null;
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
                this.moveBall(arrItem, layerOut, 2, layerIn, arrItemClick);
                var index = arrItem.length - arrMove.length;
                arrItem = arrItem.slice(0, index);
                console.log("ban dau sau khi slice : ", arrItem);
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
    NewClass.prototype.moveBall = function (arrItem, layerOut, idx, layerIn, arrItemClick) {
        var _this = this;
        if (arrItemClick === void 0) { arrItemClick = []; }
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
        console.log("layout=-=-=-=-", layerOut);
        var aarr = [];
        for (var i = 0; i < arrItemClick.length; i++) {
            if (arrItemClick[0] == arrItemClick[i]) {
                aarr.push(arrItemClick[i]);
            }
        }
        if (aarr.length == 4) {
            this.gameOver++;
            this.arrGameOver.push(this.gameOver);
            console.log("quang99", this.arrGameOver);
        }
        var _loop_2 = function (i) {
            var icon = layerOut.children[arrIndexRemove[i]];
            console.log("quang layerOut.children -=-=-=-=-=-", layerOut.children);
            console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove, arrIndexRemove[i]);
            var p = new cc.Vec3(0, layerOut.height * layerOut.scaleY * 1.3 - i * 30);
            if (idx == 1) {
                // icon.stopAllActions()
                cc.tween(icon)
                    .to(0.2, { position: p })
                    .start();
            }
            else if (idx == 0) {
                cc.tween(icon)
                    .to(0.2, { y: arrIndexRemove[i] * 50 })
                    .start();
            }
            else if (idx == 2) {
                // icon.stopAllActions()
                layerIn.getComponent(cc.Button).interactable = false;
                layerOut.getComponent(cc.Button).interactable = false;
                var a = icon.parent.convertToWorldSpaceAR(icon.position);
                var b = layerIn.convertToNodeSpaceAR(a);
                icon.setParent(layerIn);
                icon.setPosition(b);
                cc.tween(icon)
                    .to(0.2, { y: p.y })
                    .to(0.2, { x: p.x })
                    .to(0.2, { y: (layerIn.childrenCount - 1) * 50 })
                    .call(function () {
                    layerOut.removeChild(icon, true);
                })
                    .call(function () {
                    if (aarr.length == 4) {
                        layerIn.getComponent(cc.Button).interactable = false;
                    }
                    else {
                        layerIn.getComponent(cc.Button).interactable = true;
                    }
                    layerOut.getComponent(cc.Button).interactable = true;
                    console.log("clickCount : ", _this.clickCount, _this.gameOver);
                    _this.lbCount.string = _this.count - _this.clickCount + "";
                    if (_this.clickCount >= _this.count && _this.gameOver !== _this.aarr.length / 4) {
                        _this.lbGameOver.active = true;
                    }
                    else {
                        if (_this.gameOver == _this.aarr.length / 4) {
                            if (_this.level < 7) {
                                _this.lbWin.active = true;
                            }
                            else {
                                _this.lb.node.active = true;
                            }
                        }
                    }
                })
                    .start();
            }
        };
        for (var i = 0; i < arrIndexRemove.length; i++) {
            _loop_2(i);
        }
    };
    NewClass.prototype.createIcon = function (arr, layer) {
        if (arr === void 0) { arr = []; }
        for (var i = 0; i < arr.length; i++) {
            var pos = layer.position;
            var icon = cc.instantiate(this.iconPrefab);
            console.log("=-=-==", arr[i]);
            icon.getComponent(ItemPrefab_1.default).setIndex(arr[i]);
            icon.setParent(layer);
            icon.x = 0;
            icon.y = i * 50;
            console.log("==-=-=-pos.y", pos.y + i * 50);
        }
    };
    NewClass.prototype.sliceArr = function (arr, count) {
        var array = [];
        for (var j = 0; j < arr.length; j += count) {
            var array1 = arr.slice(j, j + count);
            array.push(array1);
        }
        return array;
    };
    NewClass.prototype.resetGame = function () {
        while (this.layer.childrenCount > 0) {
            this.layer.removeAllChildren();
        }
        while (this.lbWin.active) {
            this.lbWin.active = false;
        }
        while (this.gameOver > 0) {
            this.gameOver = 0;
        }
        while (this.aarr.length > 0) {
            this.aarr = [];
        }
        while (this.clickCount > 0) {
            this.clickCount = 0;
        }
        this.count = 20;
        this.lbCount.string = this.count + "";
        this.lb.node.active = false;
        this.lbGameOver.active = false;
        this.lbWin.active = false;
        console.log("mapData", this.mapData);
        this.buildMap();
    };
    NewClass.prototype.netxGame = function () {
        this.level++;
        if (this.level == 2) {
            this.arrayItem = [
                1, 3, 2, 3,
                3, 2, 0, -1,
                1, 0, 3, 2,
                3, 0, 3, -2,
                1, 3, 1, -1,
                3, 2, 0, -2,
                -1, -1, -1, -1
            ];
        }
        else if (this.level == 3) {
            this.arrayItem = [
                0, 0, 1, 2,
                1, 0, 3, 0,
                2, 1, 0, 1,
                0, 3, 2, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                2, 3, 1, -1,
                -1, -1, -1, -1
            ];
        }
        else if (this.level == 4) {
            this.arrayItem = [
                2, 0, 2, -1,
                1, 1, 3, -1,
                1, 0, 2, 1,
                0, 3, -3, -2,
                3, 0, 1, -1,
                3, 1, 0, -2,
                0, 1, 0, -1,
                2, 0, 1, -1
            ];
        }
        else if (this.level == 5) {
            this.arrayItem = [
                1, 2, 0, -1,
                3, 2, 1, -1,
                1, 0, 2, 1,
                0, 3, -3, -2,
                3, 0, 1, -1,
                1, 1, 0, -2,
                0, 1, 0, -1,
                2, 0, 3, -1
            ];
        }
        else if (this.level == 6) {
            this.arrayItem = [
                0, 1, 1, -1,
                2, 0, 3, -1,
                1, 2, 2, 1,
                0, 3, -3, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                0, 3, 0, -1,
                1, 0, 2, -1
            ];
        }
        else if (this.level == 7) {
            this.arrayItem = [
                2, 2, 0, 1,
                1, 1, 3, -1,
                1, 0, 3, 1,
                0, 2, -3, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                0, 3, 0, -1,
                2, 0, -1, -1
            ];
        }
        console.log("level", this.level);
        this.resetGame();
    };
    NewClass.prototype.onClickBack = function () {
        if (this.arrBack.length < 2) {
            return;
        }
        if (this.arrGameOver.length < 2) {
            return;
        }
        this.mapData = this.arrBack[this.arrBack.length - 2];
        this.arrBack = this.arrBack.slice(0, this.arrBack.length - 1);
        this.gameOver = this.arrGameOver[this.arrGameOver.length - 2];
        this.arrGameOver = this.arrGameOver.slice(0, this.arrGameOver.length - 1);
        console.log("quang002-arrBack", this.arrBack);
        console.log("quang002-arrBack", this.arrGameOver);
        console.log("quang002-arrBack", this.gameOver);
        this.layer.removeAllChildren();
        this.buildMap();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "item", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbWin", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "lbGameOver", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCount", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lb", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
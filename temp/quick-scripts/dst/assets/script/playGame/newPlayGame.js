
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdZQztRQXRZRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsUUFBRSxHQUFhLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGVBQVMsR0FBYTtZQUNsQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2QsQ0FBQztRQUVGLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVEsR0FBVyxDQUFD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QzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXJZRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ0M7SUF2QkgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdZNUI7SUFBRCxlQUFDO0NBeFlELEFBd1lDLENBeFlxQyxFQUFFLENBQUMsU0FBUyxHQXdZakQ7a0JBeFlvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1QcmVmYWIgZnJvbSBcIi4uL0l0ZW1QcmVmYWJcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY29uUHJlZmFiOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaXRlbTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyMTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYldpbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkdhbWVPdmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvdW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGI6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIG1hcERhdGE6IG51bWJlcltdW10gPSBbXTtcbiAgICBhcnJheUl0ZW06IG51bWJlcltdID0gW1xuICAgICAgICAyLCAwLCAyLCAtMSxcbiAgICAgICAgMiwgMiwgMCwgLTEsXG4gICAgICAgIDEsIDAsIDEsIC0xLFxuICAgICAgICAzLCAzLCAtMywgLTIsXG4gICAgICAgIDEsIDEsIC0xLCAtMSxcbiAgICAgICAgMywgMywgMCwgLTIsXG4gICAgXTtcblxuICAgIGxheWVyT3V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpbmRleEFycmF5T3V0OiBudW1iZXIgPSAtMTtcbiAgICBsZXZlbDogbnVtYmVyID0gMTtcbiAgICBnYW1lT3ZlcjogbnVtYmVyID0gMDtcbiAgICBhYXJyOiBudW1iZXJbXSA9IFtdXG4gICAgY2xpY2tDb3VudDogbnVtYmVyID0gMDtcbiAgICBhcnJCYWNrOiBhbnlbXSA9IFtdO1xuICAgIGFyckdhbWVPdmVyOiBhbnlbXSA9IFswXTtcbiAgICBjb3VudDogbnVtYmVyID0gMjA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYnVpbGRNYXAoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbiAgICBidWlsZE1hcCgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMubWFwRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJheUl0ZW1baV0gPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWFyci5wdXNoKHRoaXMuYXJyYXlJdGVtW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhID0gdGhpcy5zbGljZUFycih0aGlzLmFycmF5SXRlbSwgNCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXBEYXRhKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwRGF0YVtpXVtqXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW2ldID0gdGhpcy5tYXBEYXRhW2ldLnNsaWNlKDAsIGopXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pO1xuICAgICAgICAgICAgaXRlbS5zZXRQYXJlbnQodGhpcy5sYXllcik7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHRoaXMubGF5ZXIxLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpdGVtLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24odGhpcy5sYXllcjEuY2hpbGRyZW5baV0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi09PS09cG9zaXRvbnM9LT09XCIsIGl0ZW0ueSlcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9IChcIml0ZW1cIiArIGkpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUljb24odGhpcy5tYXBEYXRhW2ldLCBpdGVtKTtcbiAgICAgICAgICAgIGxldCBzY3JpcHRJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoSXRlbSk7XG4gICAgICAgICAgICBzY3JpcHRJdGVtLnNldFVwKGksIHRoaXMubWFwRGF0YVtpXSk7XG4gICAgICAgICAgICBpdGVtLm9uKFwiQ2xpY2tfYmluaFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmxheWVyLmNoaWxkcmVuW3NjcmlwdEl0ZW0uaWRJdGVtXVwiLCB0aGlzLmxheWVyLmNoaWxkcmVuW3NjcmlwdEl0ZW0uaWRJdGVtXSlcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tJdGVtKHNjcmlwdEl0ZW0uaWRJdGVtLCB0aGlzLmxheWVyLmNoaWxkcmVuW3NjcmlwdEl0ZW0uaWRJdGVtXSlcbiAgICAgICAgICAgIH0sIHRoaXMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGlja0l0ZW0oaWRJdGVtLCBsYXllckl0ZW1DbGljaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIik7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5kZXhBcnJheU91dCA9PSAtMSkge1xuICAgICAgICAgICAgLy9jaG9uIGRpZW0gYmF0IGRhdVxuICAgICAgICAgICAgLy8gYXJySXRlbUNsaWNrIGN1YSBpdGVtIGJheSBsZW5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25DbGlja0l0ZW09LS09LT0tPVwiLCB0aGlzLm1hcERhdGEpO1xuICAgICAgICAgICAgdGhpcy5sYXllck91dCA9IGxheWVySXRlbUNsaWNrO1xuICAgICAgICAgICAgaWYgKGxheWVySXRlbUNsaWNrLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBjaGluaCBubyA9PT4gYmF5IGJvbmcgbGVuIFwiLCBsYXllckl0ZW1DbGljay5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKHRoaXMubWFwRGF0YVtpZEl0ZW1dLCBsYXllckl0ZW1DbGljaywgMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheU91dCA9IGlkSXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4QXJyYXlPdXQgPT0gaWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGJhdCBkYXVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNoaW5oIG5vIGxhbiBudWEgPT0+IHRoYSBib25nIHh1b25nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwodGhpcy5tYXBEYXRhW2lkSXRlbV0sIGxheWVySXRlbUNsaWNrLCAwLCBsYXllckl0ZW1DbGljayk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmNsaWNrQ291bnQ9LT0tPS09LVwiLCB0aGlzLmNsaWNrQ291bnQpXG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGtoYWNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIiwgdGhpcy5tYXBEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpY2ggZGVuIGFyckl0ZW1DbGljazogXCIsIHRoaXMubWFwRGF0YVtpZEl0ZW1dKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj0tPS09LT0tcXVhbmcwMD0tPS09PT0tOiBcIiwgdGhpcy5sYXllck91dCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI9LT0tPS09LXF1YW5nMDA9LT0tPT09LTogXCIsIHRoaXMuaW5kZXhBcnJheU91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0gPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0sIHRoaXMubWFwRGF0YVtpZEl0ZW1dLCB0aGlzLmxheWVyT3V0LCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW5nMDAxMVwiLCB0aGlzLm1hcERhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyQmFjay5wdXNoKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5tYXBEYXRhKSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZzAwMS1hcnJCYWNrXCIsIHRoaXMuYXJyQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlPdXQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJPdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIoYXJySXRlbSA9IFtdLCBhcnJJdGVtQ2xpY2sgPSBbXSwgbGF5ZXJPdXQsIGxheWVySW4pIHtcbiAgICAgICAgLy8gYXJySXRlbUNsaWNrIGN1YSBkaWNoIGRlblxuICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW0gYmFuIGRhdSA6IFwiLCBhcnJJdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtQ2xpY2sgYmFuIGRhdSA6IFwiLCBhcnJJdGVtQ2xpY2spO1xuXG4gICAgICAgIC8vIGxheSBwaGFuIHR1IGN1b2kgY3VuZ1xuICAgICAgICBsZXQgYXJyTW92ZSA9IFthcnJJdGVtW2Fyckl0ZW0ubGVuZ3RoIC0gMV1dO1xuICAgICAgICAvLyBsYXkgbmh1bmcgcGhhbiB0dSBnaW9uZyBwaGFuIHR1IGN1b2lcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJNb3ZlIDogXCIsIGFyck1vdmUpO1xuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcnJheSBpbmRleCByZW1vdmU9LS09LT0tPS09PS09LTogXCIsIGFyckluZGV4UmVtb3ZlKTtcbiAgICAgICAgLy8gY2hlY2sgbWF4IGl0ZW1cbiAgICAgICAgbGV0IG1heEl0ZW0gPSBhcnJJdGVtQ2xpY2subGVuZ3RoICsgYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgIGlmIChtYXhJdGVtID4gNCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMCwgbGF5ZXJJbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW0gPT0+IGtob25nIGRpIGNodXllbiBkdW9jXCIsIGFyckl0ZW1DbGljaywgYXJySXRlbSlcbiAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8geHUgbHkgZGkgY2h1eWVuXG4gICAgICAgICAgICAvLyBjaGVjayBjdW5nIG1hdSBjaG8gZGkgY2h1eWVuXG4gICAgICAgICAgICBpZiAoYXJySXRlbUNsaWNrW2Fyckl0ZW1DbGljay5sZW5ndGggLSAxXSA9PSBhcnJNb3ZlW2Fyck1vdmUubGVuZ3RoIC0gMV0gfHwgYXJySXRlbUNsaWNrLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJySXRlbUNsaWNrLnB1c2goYXJyTW92ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQsIDIsIGxheWVySW4sIGFyckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYXJySXRlbS5sZW5ndGggLSBhcnJNb3ZlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBhcnJJdGVtID0gYXJySXRlbS5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW4gZGF1IHNhdSBraGkgc2xpY2UgOiBcIiwgYXJySXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWNoIGRlbiBzYXUga2hpIGRpIGNodXllbjogXCIsIGFyckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQsIDAsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXJySXRlbVwiLCBhcnJJdGVtLCBcImxheWVyT3V0XCIsIGxheWVyT3V0LCBcImxheWVySW5cIiwgbGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaHVhIGRpIGNodXllbiBkdW9jXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgbW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQ6IGNjLk5vZGUsIGlkeCwgbGF5ZXJJbiwgYXJySXRlbUNsaWNrOiBhbnkgPSBbXSkge1xuICAgICAgICBsZXQgYXJyTW92ZSA9IFthcnJJdGVtW2Fyckl0ZW0ubGVuZ3RoIC0gMV1dO1xuICAgICAgICBpZiAoYXJySXRlbS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAyOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJJdGVtW2ldID09IGFyck1vdmVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyTW92ZS5wdXNoKGFyckl0ZW1baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcnJJbmRleFJlbW92ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gYXJySXRlbS5sZW5ndGggLSAxOyBpID4gYXJySXRlbS5sZW5ndGggLSAxIC0gYXJyTW92ZS5sZW5ndGg7IGktLSkge1xuICAgICAgICAgICAgYXJySW5kZXhSZW1vdmUucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImFyckluZGV4UmVtb3ZlPS09LT0tPS1cIiwgYXJySW5kZXhSZW1vdmUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGF5b3V0PS09LT0tPS1cIiwgbGF5ZXJPdXQpXG4gICAgICAgIGxldCBhYXJyID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJJdGVtQ2xpY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJJdGVtQ2xpY2tbMF0gPT0gYXJySXRlbUNsaWNrW2ldKSB7XG4gICAgICAgICAgICAgICAgYWFyci5wdXNoKGFyckl0ZW1DbGlja1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWFyci5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcisrO1xuICAgICAgICAgICAgdGhpcy5hcnJHYW1lT3Zlci5wdXNoKHRoaXMuZ2FtZU92ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZzk5XCIsIHRoaXMuYXJyR2FtZU92ZXIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJJbmRleFJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBsYXllck91dC5jaGlsZHJlblthcnJJbmRleFJlbW92ZVtpXV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1YW5nIGxheWVyT3V0LmNoaWxkcmVuIC09LT0tPS09LT0tXCIsIGxheWVyT3V0LmNoaWxkcmVuKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWFuZyBhcnJJbmRleFJlbW92ZSAtPS09LT0tPS09LVwiLCBhcnJJbmRleFJlbW92ZSwgYXJySW5kZXhSZW1vdmVbaV0pXG5cbiAgICAgICAgICAgIGxldCBwID0gbmV3IGNjLlZlYzMoMCwgbGF5ZXJPdXQuaGVpZ2h0ICogbGF5ZXJPdXQuc2NhbGVZICogMS4zIC0gaSAqIDMwKVxuICAgICAgICAgICAgaWYgKGlkeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBwb3NpdGlvbjogcCB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGFyckluZGV4UmVtb3ZlW2ldICogNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICAgICAgbGF5ZXJJbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsYXllck91dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IGljb24ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpY29uLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IGxheWVySW4uY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQb3NpdGlvbihiKTtcblxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGljb24pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogcC55IH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeDogcC54IH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogKGxheWVySW4uY2hpbGRyZW5Db3VudCAtIDEpICogNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPdXQucmVtb3ZlQ2hpbGQoaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhYXJyLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJJbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJJbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPdXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tDb3VudCA6IFwiLCB0aGlzLmNsaWNrQ291bnQsIHRoaXMuZ2FtZU92ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkNvdW50LnN0cmluZyA9IHRoaXMuY291bnQgLSB0aGlzLmNsaWNrQ291bnQgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tDb3VudCA+PSB0aGlzLmNvdW50ICYmIHRoaXMuZ2FtZU92ZXIgIT09IHRoaXMuYWFyci5sZW5ndGggLyA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkdhbWVPdmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVPdmVyID09IHRoaXMuYWFyci5sZW5ndGggLyA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldmVsIDwgNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYldpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUljb24oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gbGF5ZXIucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblByZWZhYik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj0tPS09PVwiLCBhcnJbaV0pXG4gICAgICAgICAgICBpY29uLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXIpO1xuICAgICAgICAgICAgaWNvbi54ID0gMDtcbiAgICAgICAgICAgIGljb24ueSA9IGkgKiA1MDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0tPS09LXBvcy55XCIsIHBvcy55ICsgaSAqIDUwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNsaWNlQXJyKGFycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGFycmF5OiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaiArPSBjb3VudCkge1xuICAgICAgICAgICAgbGV0IGFycmF5MSA9IGFyci5zbGljZShqLCBqICsgY291bnQpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGFycmF5MSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMubGF5ZXIuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5sYldpbi5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubGJXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMuZ2FtZU92ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5hYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWFyciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLmNsaWNrQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnQgPSAyMDtcbiAgICAgICAgdGhpcy5sYkNvdW50LnN0cmluZyA9IHRoaXMuY291bnQgKyBcIlwiO1xuICAgICAgICB0aGlzLmxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJHYW1lT3Zlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYXBEYXRhXCIsIHRoaXMubWFwRGF0YSk7XG5cbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cbiAgICBuZXR4R2FtZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5SXRlbSA9IFtcbiAgICAgICAgICAgICAgICAxLCAzLCAyLCAzLFxuICAgICAgICAgICAgICAgIDMsIDIsIDAsIC0xLFxuICAgICAgICAgICAgICAgIDEsIDAsIDMsIDIsXG4gICAgICAgICAgICAgICAgMywgMCwgMywgLTIsXG4gICAgICAgICAgICAgICAgMSwgMywgMSwgLTEsXG4gICAgICAgICAgICAgICAgMywgMiwgMCwgLTIsXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSwgLTFdXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5SXRlbSA9IFtcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAyLFxuICAgICAgICAgICAgICAgIDEsIDAsIDMsIDAsXG4gICAgICAgICAgICAgICAgMiwgMSwgMCwgMSxcbiAgICAgICAgICAgICAgICAwLCAzLCAyLCAtMixcbiAgICAgICAgICAgICAgICAxLCAwLCAxLCAtMSxcbiAgICAgICAgICAgICAgICAzLCAxLCAwLCAtMixcbiAgICAgICAgICAgICAgICAyLCAzLCAxLCAtMSxcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLCAtMV1cblxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV2ZWwgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5hcnJheUl0ZW0gPSBbXG4gICAgICAgICAgICAgICAgMiwgMCwgMiwgLTEsXG4gICAgICAgICAgICAgICAgMSwgMSwgMywgLTEsXG4gICAgICAgICAgICAgICAgMSwgMCwgMiwgMSxcbiAgICAgICAgICAgICAgICAwLCAzLCAtMywgLTIsXG4gICAgICAgICAgICAgICAgMywgMCwgMSwgLTEsXG4gICAgICAgICAgICAgICAgMywgMSwgMCwgLTIsXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgLTEsXG4gICAgICAgICAgICAgICAgMiwgMCwgMSwgLTFdXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5SXRlbSA9IFtcbiAgICAgICAgICAgICAgICAxLCAyLCAwLCAtMSxcbiAgICAgICAgICAgICAgICAzLCAyLCAxLCAtMSxcbiAgICAgICAgICAgICAgICAxLCAwLCAyLCAxLFxuICAgICAgICAgICAgICAgIDAsIDMsIC0zLCAtMixcbiAgICAgICAgICAgICAgICAzLCAwLCAxLCAtMSxcbiAgICAgICAgICAgICAgICAxLCAxLCAwLCAtMixcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAtMSxcbiAgICAgICAgICAgICAgICAyLCAwLCAzLCAtMV1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxldmVsID09IDYpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlJdGVtID0gW1xuICAgICAgICAgICAgICAgIDAsIDEsIDEsIC0xLFxuICAgICAgICAgICAgICAgIDIsIDAsIDMsIC0xLFxuICAgICAgICAgICAgICAgIDEsIDIsIDIsIDEsXG4gICAgICAgICAgICAgICAgMCwgMywgLTMsIC0yLFxuICAgICAgICAgICAgICAgIDEsIDAsIDEsIC0xLFxuICAgICAgICAgICAgICAgIDMsIDEsIDAsIC0yLFxuICAgICAgICAgICAgICAgIDAsIDMsIDAsIC0xLFxuICAgICAgICAgICAgICAgIDEsIDAsIDIsIC0xXVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV2ZWwgPT0gNykge1xuICAgICAgICAgICAgdGhpcy5hcnJheUl0ZW0gPSBbXG4gICAgICAgICAgICAgICAgMiwgMiwgMCwgMSxcbiAgICAgICAgICAgICAgICAxLCAxLCAzLCAtMSxcbiAgICAgICAgICAgICAgICAxLCAwLCAzLCAxLFxuICAgICAgICAgICAgICAgIDAsIDIsIC0zLCAtMixcbiAgICAgICAgICAgICAgICAxLCAwLCAxLCAtMSxcbiAgICAgICAgICAgICAgICAzLCAxLCAwLCAtMixcbiAgICAgICAgICAgICAgICAwLCAzLCAwLCAtMSxcbiAgICAgICAgICAgICAgICAyLCAwLCAtMSwgLTFdXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFwiLCB0aGlzLmxldmVsKTtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG4gICAgb25DbGlja0JhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmFyckJhY2subGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFyckdhbWVPdmVyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcERhdGEgPSB0aGlzLmFyckJhY2tbdGhpcy5hcnJCYWNrLmxlbmd0aCAtIDJdO1xuICAgICAgICB0aGlzLmFyckJhY2sgPSB0aGlzLmFyckJhY2suc2xpY2UoMCwgdGhpcy5hcnJCYWNrLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5hcnJHYW1lT3Zlclt0aGlzLmFyckdhbWVPdmVyLmxlbmd0aCAtIDJdO1xuICAgICAgICB0aGlzLmFyckdhbWVPdmVyID0gdGhpcy5hcnJHYW1lT3Zlci5zbGljZSgwLCB0aGlzLmFyckdhbWVPdmVyLmxlbmd0aCAtIDEpXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVhbmcwMDItYXJyQmFja1wiLCB0aGlzLmFyckJhY2spO1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1YW5nMDAyLWFyckJhY2tcIiwgdGhpcy5hcnJHYW1lT3Zlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicXVhbmcwMDItYXJyQmFja1wiLCB0aGlzLmdhbWVPdmVyKTtcbiAgICAgICAgdGhpcy5sYXllci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmJ1aWxkTWFwKCk7XG4gICAgfVxufVxuIl19

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
        _this.mapData = [];
        _this.arrayItem = [
            2, 2, -1, -1,
            2, 2, -1, -1,
            1, 1, -3, -1,
            3, 3, -3, -2,
            1, 1, -1, -1,
            3, 3, -3, -2,
        ];
        _this.layerOut = null;
        _this.indexArrayOut = -1;
        _this.level = 1;
        _this.gameOver = 0;
        _this.aarr = [];
        _this.clickCount = 0;
        _this.arrBack = [];
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
        for (var i = 0; i < this.arrayItem.length; i++) {
            if (this.arrayItem[i] >= 0) {
                this.aarr.push(this.arrayItem[i]);
            }
        }
        this.mapData = this.sliceArr(this.arrayItem, 4);
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
                this.clickCount++;
            }
        }
        else {
            this.clickCount++;
            if (this.indexArrayOut == idItem) {
                // chon dich den la diem bat dau
                console.log("click chinh no lan nua ==> tha bong xuong");
                this.moveBall(this.mapData[idItem], layerItemClick, 0, layerItemClick);
            }
            else {
                // chon dich den la diem khac
                console.log("onClickItem=--=-=-=", this.mapData);
                // console.log("dich den arrItemClick: ", this.mapData[idItem]);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.layerOut);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.indexArrayOut);
                this.mapData[this.indexArrayOut] = this.onHanlderClickLayer(this.mapData[this.indexArrayOut], this.mapData[idItem], this.layerOut, layerItemClick);
            }
            this.indexArrayOut = -1;
            this.layerOut = null;
        }
        if (this.clickCount > 8) {
            this.lbGameOver.active = true;
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
            console.log("this.gameOverthis.gameOverthis.gameOverthis.gameOver: ", this.gameOver, this.aarr.length / 4);
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
                    if (_this.gameOver == _this.aarr.length / 4) {
                        _this.lbWin.active = true;
                    }
                })
                    .start();
            }
            else if (idx == 3) {
                layerIn.getComponent(cc.Button).interactable = false;
                layerOut.getComponent(cc.Button).interactable = false;
                var a = icon.parent.convertToWorldSpaceAR(icon.position);
                var b = layerIn.convertToNodeSpaceAR(a);
                icon.setParent(layerIn);
                icon.setPosition(b);
                cc.tween(icon)
                    .to(0.2, { y: p.y })
                    .to(0.2, { x: p.x })
                    .to(0.2, { y: (layerOut.childrenCount - 1) * 50 })
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
                    if (_this.gameOver == _this.aarr.length / 4) {
                        _this.lbWin.active = true;
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
        this.lbGameOver.active = false;
        this.lbWin.active = false;
        this.buildMap();
    };
    NewClass.prototype.netxGame = function () {
        this.level++;
        if (this.level == 2) {
            this.arrayItem = [0, 0, -1, -1, 0, 0, -1, -1];
        }
        else if (this.level == 3) {
            this.arrayItem = [0, 0, -1, -1, 0, 0, -1, -1, -2, -2, -2, -2];
        }
        else if (this.level == 4) {
            this.arrayItem = [0, 0, -1, -1, 0, 0, -1, -1, -2, -2, -2, -2, -2, -2, -2, -2];
        }
        console.log("level", this.level);
        this.resetGame();
    };
    NewClass.prototype.onClickBack = function () {
        this.moveBall;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1VQztRQWpVRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBZSxFQUFFLENBQUM7UUFDekIsZUFBUyxHQUFhO1lBQ2xCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmLENBQUM7UUFFRixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBYSxFQUFFLENBQUE7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RTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDaEY7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBaFVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBakJWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtVTVCO0lBQUQsZUFBQztDQW5VRCxBQW1VQyxDQW5VcUMsRUFBRSxDQUFDLFNBQVMsR0FtVWpEO2tCQW5Vb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtUHJlZmFiIGZyb20gXCIuLi9JdGVtUHJlZmFiXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvblByZWZhYjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJXaW46IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJHYW1lT3ZlcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBtYXBEYXRhOiBudW1iZXJbXVtdID0gW107XG4gICAgYXJyYXlJdGVtOiBudW1iZXJbXSA9IFtcbiAgICAgICAgMiwgMiwgLTEsIC0xLFxuICAgICAgICAyLCAyLCAtMSwgLTEsXG4gICAgICAgIDEsIDEsIC0zLCAtMSxcbiAgICAgICAgMywgMywgLTMsIC0yLFxuICAgICAgICAxLCAxLCAtMSwgLTEsXG4gICAgICAgIDMsIDMsIC0zLCAtMixcbiAgICBdO1xuXG4gICAgbGF5ZXJPdXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIGluZGV4QXJyYXlPdXQ6IG51bWJlciA9IC0xO1xuICAgIGxldmVsOiBudW1iZXIgPSAxO1xuICAgIGdhbWVPdmVyOiBudW1iZXIgPSAwO1xuICAgIGFhcnI6IG51bWJlcltdID0gW11cbiAgICBjbGlja0NvdW50OiBudW1iZXIgPSAwO1xuICAgIGFyckJhY2s6IG51bWJlcltdID0gW11cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuICAgIGJ1aWxkTWFwKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJheUl0ZW1baV0gPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWFyci5wdXNoKHRoaXMuYXJyYXlJdGVtW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBEYXRhID0gdGhpcy5zbGljZUFycih0aGlzLmFycmF5SXRlbSwgNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFwRGF0YSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXBEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcERhdGFbaV1bal0gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwRGF0YVtpXSA9IHRoaXMubWFwRGF0YVtpXS5zbGljZSgwLCBqKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0UGFyZW50KHRoaXMubGF5ZXIpO1xuICAgICAgICAgICAgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbih0aGlzLmxheWVyMS5jaGlsZHJlbltpXS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXRlbS55ID0gLTEwMDtcbiAgICAgICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHRoaXMubGF5ZXIxLmNoaWxkcmVuW2ldLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItPT0tPXBvc2l0b25zPS09PVwiLCBpdGVtLnkpXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtLm5hbWUgPSAoXCJpdGVtXCIgKyBpKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJY29uKHRoaXMubWFwRGF0YVtpXSwgaXRlbSk7XG4gICAgICAgICAgICBsZXQgc2NyaXB0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KEl0ZW0pO1xuICAgICAgICAgICAgc2NyaXB0SXRlbS5zZXRVcChpLCB0aGlzLm1hcERhdGFbaV0pO1xuICAgICAgICAgICAgaXRlbS5vbihcIkNsaWNrX2JpbmhcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV1cIiwgdGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV0pXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrSXRlbShzY3JpcHRJdGVtLmlkSXRlbSwgdGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV0pXG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGlkSXRlbSwgbGF5ZXJJdGVtQ2xpY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNsaWNrSXRlbT0tLT0tPS09XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmluZGV4QXJyYXlPdXQgPT0gLTEpIHtcbiAgICAgICAgICAgIC8vY2hvbiBkaWVtIGJhdCBkYXVcbiAgICAgICAgICAgIC8vIGFyckl0ZW1DbGljayBjdWEgaXRlbSBiYXkgbGVuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIiwgdGhpcy5tYXBEYXRhKTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJPdXQgPSBsYXllckl0ZW1DbGljaztcbiAgICAgICAgICAgIGlmIChsYXllckl0ZW1DbGljay5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgY2hpbmggbm8gPT0+IGJheSBib25nIGxlbiBcIiwgbGF5ZXJJdGVtQ2xpY2suY2hpbGRyZW5Db3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbCh0aGlzLm1hcERhdGFbaWRJdGVtXSwgbGF5ZXJJdGVtQ2xpY2ssIDEsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlPdXQgPSBpZEl0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4QXJyYXlPdXQgPT0gaWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGJhdCBkYXVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNoaW5oIG5vIGxhbiBudWEgPT0+IHRoYSBib25nIHh1b25nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwodGhpcy5tYXBEYXRhW2lkSXRlbV0sIGxheWVySXRlbUNsaWNrLCAwLCBsYXllckl0ZW1DbGljayk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGtoYWNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tJdGVtPS0tPS09LT1cIiwgdGhpcy5tYXBEYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpY2ggZGVuIGFyckl0ZW1DbGljazogXCIsIHRoaXMubWFwRGF0YVtpZEl0ZW1dKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj0tPS09LT0tcXVhbmcwMD0tPS09PT0tOiBcIiwgdGhpcy5sYXllck91dCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCI9LT0tPS09LXF1YW5nMDA9LT0tPT09LTogXCIsIHRoaXMuaW5kZXhBcnJheU91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0gPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0sIHRoaXMubWFwRGF0YVtpZEl0ZW1dLCB0aGlzLmxheWVyT3V0LCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlPdXQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJPdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPiA4KSB7XG4gICAgICAgICAgICB0aGlzLmxiR2FtZU92ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyKGFyckl0ZW0gPSBbXSwgYXJySXRlbUNsaWNrID0gW10sIGxheWVyT3V0LCBsYXllckluKSB7XG4gICAgICAgIC8vIGFyckl0ZW1DbGljayBjdWEgZGljaCBkZW5cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtIGJhbiBkYXUgOiBcIiwgYXJySXRlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJySXRlbUNsaWNrIGJhbiBkYXUgOiBcIiwgYXJySXRlbUNsaWNrKTtcblxuICAgICAgICAvLyBsYXkgcGhhbiB0dSBjdW9pIGN1bmdcbiAgICAgICAgbGV0IGFyck1vdmUgPSBbYXJySXRlbVthcnJJdGVtLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgLy8gbGF5IG5odW5nIHBoYW4gdHUgZ2lvbmcgcGhhbiB0dSBjdW9pXG4gICAgICAgIGlmIChhcnJJdGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDI7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyckl0ZW1baV0gPT0gYXJyTW92ZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJNb3ZlLnB1c2goYXJySXRlbVtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyTW92ZSA6IFwiLCBhcnJNb3ZlKTtcbiAgICAgICAgbGV0IGFyckluZGV4UmVtb3ZlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDE7IGkgPiBhcnJJdGVtLmxlbmd0aCAtIDEgLSBhcnJNb3ZlLmxlbmd0aDsgaS0tKSB7XG4gICAgICAgICAgICBhcnJJbmRleFJlbW92ZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXJyYXkgaW5kZXggcmVtb3ZlPS0tPS09LT0tPT0tPS06IFwiLCBhcnJJbmRleFJlbW92ZSk7XG4gICAgICAgIC8vIGNoZWNrIG1heCBpdGVtXG4gICAgICAgIGxldCBtYXhJdGVtID0gYXJySXRlbUNsaWNrLmxlbmd0aCArIGFyck1vdmUubGVuZ3RoO1xuICAgICAgICBpZiAobWF4SXRlbSA+IDQpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQsIDAsIGxheWVySW4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXhJdGVtID09PiBraG9uZyBkaSBjaHV5ZW4gZHVvY1wiLCBhcnJJdGVtQ2xpY2ssIGFyckl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHh1IGx5IGRpIGNodXllblxuICAgICAgICAgICAgLy8gY2hlY2sgY3VuZyBtYXUgY2hvIGRpIGNodXllblxuICAgICAgICAgICAgaWYgKGFyckl0ZW1DbGlja1thcnJJdGVtQ2xpY2subGVuZ3RoIC0gMV0gPT0gYXJyTW92ZVthcnJNb3ZlLmxlbmd0aCAtIDFdIHx8IGFyckl0ZW1DbGljay5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJNb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyckl0ZW1DbGljay5wdXNoKGFyck1vdmVbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAyLCBsYXllckluLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFyckl0ZW0ubGVuZ3RoIC0gYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJySXRlbSA9IGFyckl0ZW0uc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuIGRhdSBzYXUga2hpIHNsaWNlIDogXCIsIGFyckl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gc2F1IGtoaSBkaSBjaHV5ZW46IFwiLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAwLCBsYXllckluKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW1cIiwgYXJySXRlbSwgXCJsYXllck91dFwiLCBsYXllck91dCwgXCJsYXllckluXCIsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2h1YSBkaSBjaHV5ZW4gZHVvY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0OiBjYy5Ob2RlLCBpZHgsIGxheWVySW4sIGFyckl0ZW1DbGljazogYW55ID0gW10pIHtcbiAgICAgICAgbGV0IGFyck1vdmUgPSBbYXJySXRlbVthcnJJdGVtLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJbmRleFJlbW92ZT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImxheW91dD0tPS09LT0tXCIsIGxheWVyT3V0KVxuICAgICAgICBsZXQgYWFyciA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJySXRlbUNsaWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJySXRlbUNsaWNrWzBdID09IGFyckl0ZW1DbGlja1tpXSkge1xuICAgICAgICAgICAgICAgIGFhcnIucHVzaChhcnJJdGVtQ2xpY2tbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFhcnIubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5nYW1lT3ZlcnRoaXMuZ2FtZU92ZXJ0aGlzLmdhbWVPdmVydGhpcy5nYW1lT3ZlcjogXCIsIHRoaXMuZ2FtZU92ZXIsIHRoaXMuYWFyci5sZW5ndGggLyA0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckluZGV4UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheWVyT3V0LmNoaWxkcmVuW2FyckluZGV4UmVtb3ZlW2ldXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVhbmcgbGF5ZXJPdXQuY2hpbGRyZW4gLT0tPS09LT0tPS1cIiwgbGF5ZXJPdXQuY2hpbGRyZW4pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1YW5nIGFyckluZGV4UmVtb3ZlIC09LT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlLCBhcnJJbmRleFJlbW92ZVtpXSlcblxuICAgICAgICAgICAgbGV0IHAgPSBuZXcgY2MuVmVjMygwLCBsYXllck91dC5oZWlnaHQgKiBsYXllck91dC5zY2FsZVkgKiAxLjMgLSBpICogMzApXG4gICAgICAgICAgICBpZiAoaWR4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBpY29uLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiBwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGljb24pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogYXJySW5kZXhSZW1vdmVbaV0gKiA1MCB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBpY29uLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxheWVyT3V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBhID0gaWNvbi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGljb24ucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGxldCBiID0gbGF5ZXJJbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihhKTtcbiAgICAgICAgICAgICAgICBpY29uLnNldFBhcmVudChsYXllckluKTtcbiAgICAgICAgICAgICAgICBpY29uLnNldFBvc2l0aW9uKGIpO1xuXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiBwLnkgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiBwLnggfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiAobGF5ZXJJbi5jaGlsZHJlbkNvdW50IC0gMSkgKiA1MCB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck91dC5yZW1vdmVDaGlsZChpY29uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFhcnIubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck91dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIgPT0gdGhpcy5hYXJyLmxlbmd0aCAvIDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMykge1xuICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGF5ZXJPdXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBpY29uLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoaWNvbi5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSBsYXllckluLmNvbnZlcnRUb05vZGVTcGFjZUFSKGEpO1xuICAgICAgICAgICAgICAgIGljb24uc2V0UGFyZW50KGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGljb24uc2V0UG9zaXRpb24oYik7XG5cbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IHAueSB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHAueCB9KVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IChsYXllck91dC5jaGlsZHJlbkNvdW50IC0gMSkgKiA1MCB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck91dC5yZW1vdmVDaGlsZChpY29uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFhcnIubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllck91dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXIgPT0gdGhpcy5hYXJyLmxlbmd0aCAvIDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUljb24oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gbGF5ZXIucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblByZWZhYik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj0tPS09PVwiLCBhcnJbaV0pXG4gICAgICAgICAgICBpY29uLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXIpO1xuICAgICAgICAgICAgaWNvbi54ID0gMDtcbiAgICAgICAgICAgIGljb24ueSA9IGkgKiA1MDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0tPS09LXBvcy55XCIsIHBvcy55ICsgaSAqIDUwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHNsaWNlQXJyKGFycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGFycmF5OiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaiArPSBjb3VudCkge1xuICAgICAgICAgICAgbGV0IGFycmF5MSA9IGFyci5zbGljZShqLCBqICsgY291bnQpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGFycmF5MSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMubGF5ZXIuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5sYldpbi5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubGJXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMuZ2FtZU92ZXIgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5hYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWFyciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLmNsaWNrQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJHYW1lT3Zlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cbiAgICBuZXR4R2FtZSgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5SXRlbSA9IFswLCAwLCAtMSwgLTEsIDAsIDAsIC0xLCAtMV1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxldmVsID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlJdGVtID0gWzAsIDAsIC0xLCAtMSwgMCwgMCwgLTEsIC0xLCAtMiwgLTIsIC0yLCAtMl1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxldmVsID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyYXlJdGVtID0gWzAsIDAsIC0xLCAtMSwgMCwgMCwgLTEsIC0xLCAtMiwgLTIsIC0yLCAtMiwgLTIsIC0yLCAtMiwgLTJdXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbFwiLCB0aGlzLmxldmVsKTtcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgICB9XG4gICAgb25DbGlja0JhY2soKSB7XG4gICAgICAgIHRoaXMubW92ZUJhbGxcbiAgICB9XG59XG4iXX0=

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
        _this.mapData = [];
        _this.arrayItem = [
            3, 2, 2, -1,
            1, 1, 3, -1,
            3, 2, 1, -1,
            2, 1, 3, -1
        ];
        _this.layerOut = null;
        _this.indexArrayOut = -1;
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
        this.mapData = this.sliceArr(this.arrayItem, 4);
        console.log(this.mapData);
        var _loop_1 = function (i) {
            for (var j = 0; j < 4; j++) {
                if (this_1.mapData[i][j] < 0) {
                    this_1.mapData[i] = this_1.mapData[i].slice(0, j);
                }
            }
            item = cc.instantiate(this_1.item);
            item.setParent(this_1.layer);
            item.setPosition(-150 + i * 150, 0);
            item.active = true;
            item.name = ("item" + i);
            this_1.createIcon(this_1.mapData[i], item);
            var scriptItem = item.getComponent(Item_1.default);
            scriptItem.setUp(i, this_1.mapData[i]);
            console.log("quangngu", this_1.mapData[i], this_1.mapData, i);
            item.on("Click_binh", function () {
                console.log("this.layer.children[scriptItem.idItem]", _this.layer.children[scriptItem.idItem]);
                _this.onClickItem(scriptItem.idItem, _this.layer.children[scriptItem.idItem]);
            }, this_1);
        };
        var this_1 = this, item;
        for (var i = 0; i < this.mapData.length; i++) {
            _loop_1(i);
        }
    };
    NewClass.prototype.onClickItem = function (idItem, layerItemClick) {
        console.log("onClickItem=--=-=-=");
        if (this.indexArrayOut == -1) {
            //chon diem bat dau
            // arrItemClick cua item bay len
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
                // chon dich den la diem khac
                console.log("dich den arrItemClick: ", this.mapData[idItem]);
                console.log("=-=-=-=-quang00=-=-===-: ", this.layerOut);
                console.log("=-=-=-=-quang00=-=-===-: ", this.indexArrayOut);
                this.mapData[this.indexArrayOut] = this.onHanlderClickLayer(this.mapData[this.indexArrayOut], this.mapData[idItem], this.layerOut, layerItemClick);
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
                this.moveBall(arrItem, layerOut, 2, layerIn);
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
        console.log("layout=-=-=-=-", layerOut);
        var _loop_2 = function (i) {
            var icon = layerOut.children[arrIndexRemove[i]];
            console.log("quang layerOut.children -=-=-=-=-=-", layerOut.children);
            console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove, arrIndexRemove[i]);
            // let pos = layerIn.parent.convertToWorldSpaceAR(layerIn.position);
            // let pos1 = icon.convertToNodeSpaceAR(pos);
            if (idx == 1) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + 300 + i * -30 })
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
                cc.tween(icon)
                    .to(0.2, { x: 0 })
                    .to(0.2, { y: layerIn.position.y + (layerIn.childrenCount - 1) * 50 })
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
            icon.y = pos.y + i * 50;
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
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "iconPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "item", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "layer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBQ3ZDLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQThNQztRQTVNRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixlQUFTLEdBQWE7WUFDbEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7O0lBOEwvQixDQUFDO0lBNUxHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUNELGlCQUFpQjtJQUNqQiwyQkFBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FB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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLEdBQWEsRUFBRSxLQUFhO1FBQ2pDLElBQUksS0FBSyxHQUFlLEVBQUUsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFO1lBQ3hDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQTtZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQTFNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQU5MLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4TTVCO0lBQUQsZUFBQztDQTlNRCxBQThNQyxDQTlNcUMsRUFBRSxDQUFDLFNBQVMsR0E4TWpEO2tCQTlNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtUHJlZmFiIGZyb20gXCIuLi9JdGVtUHJlZmFiXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaWNvblByZWZhYjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG1hcERhdGE6IG51bWJlcltdW10gPSBbXTtcbiAgICBhcnJheUl0ZW06IG51bWJlcltdID0gW1xuICAgICAgICAzLCAyLCAyLCAtMSxcbiAgICAgICAgMSwgMSwgMywgLTEsXG4gICAgICAgIDMsIDIsIDEsIC0xLFxuICAgICAgICAyLCAxLCAzLCAtMV07XG5cbiAgICBsYXllck91dDogY2MuTm9kZSA9IG51bGw7XG4gICAgaW5kZXhBcnJheU91dDogbnVtYmVyID0gLTE7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5idWlsZE1hcCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxuICAgIGJ1aWxkTWFwKCkge1xuICAgICAgICB0aGlzLm1hcERhdGEgPSB0aGlzLnNsaWNlQXJyKHRoaXMuYXJyYXlJdGVtLCA0KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXBEYXRhKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFwRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBEYXRhW2ldW2pdIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcERhdGFbaV0gPSB0aGlzLm1hcERhdGFbaV0uc2xpY2UoMCwgailcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XG4gICAgICAgICAgICBpdGVtLnNldFBhcmVudCh0aGlzLmxheWVyKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24oLTE1MCArIGkgKiAxNTAsIDApO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaXRlbS5uYW1lID0gKFwiaXRlbVwiICsgaSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSWNvbih0aGlzLm1hcERhdGFbaV0sIGl0ZW0pO1xuICAgICAgICAgICAgbGV0IHNjcmlwdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChJdGVtKTtcbiAgICAgICAgICAgIHNjcmlwdEl0ZW0uc2V0VXAoaSwgdGhpcy5tYXBEYXRhW2ldKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVhbmduZ3VcIiwgdGhpcy5tYXBEYXRhW2ldLCB0aGlzLm1hcERhdGEsIGkpO1xuICAgICAgICAgICAgaXRlbS5vbihcIkNsaWNrX2JpbmhcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV1cIiwgdGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV0pXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrSXRlbShzY3JpcHRJdGVtLmlkSXRlbSwgdGhpcy5sYXllci5jaGlsZHJlbltzY3JpcHRJdGVtLmlkSXRlbV0pXG4gICAgICAgICAgICB9LCB0aGlzKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGlkSXRlbSwgbGF5ZXJJdGVtQ2xpY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNsaWNrSXRlbT0tLT0tPS09XCIpO1xuICAgICAgICBpZiAodGhpcy5pbmRleEFycmF5T3V0ID09IC0xKSB7XG4gICAgICAgICAgICAvL2Nob24gZGllbSBiYXQgZGF1XG4gICAgICAgICAgICAvLyBhcnJJdGVtQ2xpY2sgY3VhIGl0ZW0gYmF5IGxlblxuICAgICAgICAgICAgdGhpcy5sYXllck91dCA9IGxheWVySXRlbUNsaWNrO1xuICAgICAgICAgICAgaWYgKGxheWVySXRlbUNsaWNrLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBjaGluaCBubyA9PT4gYmF5IGJvbmcgbGVuIFwiLCBsYXllckl0ZW1DbGljay5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKHRoaXMubWFwRGF0YVtpZEl0ZW1dLCBsYXllckl0ZW1DbGljaywgMSwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhBcnJheU91dCA9IGlkSXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4QXJyYXlPdXQgPT0gaWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGJhdCBkYXVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNoaW5oIG5vIGxhbiBudWEgPT0+IHRoYSBib25nIHh1b25nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwodGhpcy5tYXBEYXRhW2lkSXRlbV0sIGxheWVySXRlbUNsaWNrLCAwLCBsYXllckl0ZW1DbGljayk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2hvbiBkaWNoIGRlbiBsYSBkaWVtIGtoYWNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIGFyckl0ZW1DbGljazogXCIsIHRoaXMubWFwRGF0YVtpZEl0ZW1dKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj0tPS09LT0tcXVhbmcwMD0tPS09PT0tOiBcIiwgdGhpcy5sYXllck91dCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9LT0tPS09LXF1YW5nMDA9LT0tPT09LTogXCIsIHRoaXMuaW5kZXhBcnJheU91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0gPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5tYXBEYXRhW3RoaXMuaW5kZXhBcnJheU91dF0sIHRoaXMubWFwRGF0YVtpZEl0ZW1dLCB0aGlzLmxheWVyT3V0LCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4QXJyYXlPdXQgPSAtMTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXJPdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIoYXJySXRlbSA9IFtdLCBhcnJJdGVtQ2xpY2sgPSBbXSwgbGF5ZXJPdXQsIGxheWVySW4pIHtcbiAgICAgICAgLy8gYXJySXRlbUNsaWNrIGN1YSBkaWNoIGRlblxuICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW0gYmFuIGRhdSA6IFwiLCBhcnJJdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtQ2xpY2sgYmFuIGRhdSA6IFwiLCBhcnJJdGVtQ2xpY2spO1xuXG4gICAgICAgIC8vIGxheSBwaGFuIHR1IGN1b2kgY3VuZ1xuICAgICAgICBsZXQgYXJyTW92ZSA9IFthcnJJdGVtW2Fyckl0ZW0ubGVuZ3RoIC0gMV1dO1xuICAgICAgICAvLyBsYXkgbmh1bmcgcGhhbiB0dSBnaW9uZyBwaGFuIHR1IGN1b2lcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJNb3ZlIDogXCIsIGFyck1vdmUpO1xuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcnJheSBpbmRleCByZW1vdmU9LS09LT0tPS09PS09LTogXCIsIGFyckluZGV4UmVtb3ZlKTtcbiAgICAgICAgLy8gY2hlY2sgbWF4IGl0ZW1cbiAgICAgICAgbGV0IG1heEl0ZW0gPSBhcnJJdGVtQ2xpY2subGVuZ3RoICsgYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgIGlmIChtYXhJdGVtID4gNCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMCwgbGF5ZXJJbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1heEl0ZW0gPT0+IGtob25nIGRpIGNodXllbiBkdW9jXCIsIGFyckl0ZW1DbGljaywgYXJySXRlbSlcbiAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8geHUgbHkgZGkgY2h1eWVuXG4gICAgICAgICAgICAvLyBjaGVjayBjdW5nIG1hdSBjaG8gZGkgY2h1eWVuXG4gICAgICAgICAgICBpZiAoYXJySXRlbUNsaWNrW2Fyckl0ZW1DbGljay5sZW5ndGggLSAxXSA9PSBhcnJNb3ZlW2Fyck1vdmUubGVuZ3RoIC0gMV0gfHwgYXJySXRlbUNsaWNrLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJySXRlbUNsaWNrLnB1c2goYXJyTW92ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQsIDIsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFyckl0ZW0ubGVuZ3RoIC0gYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJySXRlbSA9IGFyckl0ZW0uc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuIGRhdSBzYXUga2hpIHNsaWNlIDogXCIsIGFyckl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gc2F1IGtoaSBkaSBjaHV5ZW46IFwiLCBhcnJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCAwLCBsYXllckluKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW1cIiwgYXJySXRlbSwgXCJsYXllck91dFwiLCBsYXllck91dCwgXCJsYXllckluXCIsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2h1YSBkaSBjaHV5ZW4gZHVvY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG1vdmVCYWxsKGFyckl0ZW0sIGxheWVyT3V0LCBpZHgsIGxheWVySW4pIHtcbiAgICAgICAgbGV0IGFyck1vdmUgPSBbYXJySXRlbVthcnJJdGVtLmxlbmd0aCAtIDFdXTtcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJbmRleFJlbW92ZT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImxheW91dD0tPS09LT0tXCIsIGxheWVyT3V0KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckluZGV4UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheWVyT3V0LmNoaWxkcmVuW2FyckluZGV4UmVtb3ZlW2ldXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVhbmcgbGF5ZXJPdXQuY2hpbGRyZW4gLT0tPS09LT0tPS1cIiwgbGF5ZXJPdXQuY2hpbGRyZW4pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1YW5nIGFyckluZGV4UmVtb3ZlIC09LT0tPS09LT0tXCIsIGFyckluZGV4UmVtb3ZlLCBhcnJJbmRleFJlbW92ZVtpXSlcblxuICAgICAgICAgICAgLy8gbGV0IHBvcyA9IGxheWVySW4ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihsYXllckluLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIC8vIGxldCBwb3MxID0gaWNvbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICAgICAgaWYgKGlkeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiBsYXllck91dC5wb3NpdGlvbi55ICsgMzAwICsgaSAqIC0zMCB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGxheWVyT3V0LnBvc2l0aW9uLnkgKyBhcnJJbmRleFJlbW92ZVtpXSAqIDUwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMikge1xuICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGF5ZXJPdXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgbGV0IGEgPSBsYXllck91dC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGxheWVyT3V0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgYiA9IGljb24uY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICAgICAgICAgICAgaWNvbi5zZXRQb3NpdGlvbihiLngsIGxheWVyT3V0LnBvc2l0aW9uLnkgKyAzMDApXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogbGF5ZXJJbi5wb3NpdGlvbi55ICsgKGxheWVySW4uY2hpbGRyZW5Db3VudCAtIDEpICogNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJPdXQucmVtb3ZlQ2hpbGQoaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGljb24uc2V0UG9zaXRpb24oMCwgbGF5ZXJJbi5jaGlsZHJlbkNvdW50ICogNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5ZXJJbi5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3V0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUljb24oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gbGF5ZXIucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaWNvblByZWZhYik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj0tPS09PVwiLCBhcnJbaV0pXG4gICAgICAgICAgICBpY29uLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaWNvbi5zZXRQYXJlbnQobGF5ZXIpO1xuICAgICAgICAgICAgaWNvbi54ID0gMDtcbiAgICAgICAgICAgIGljb24ueSA9IHBvcy55ICsgaSAqIDUwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNsaWNlQXJyKGFycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGFycmF5OiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaiArPSBjb3VudCkge1xuICAgICAgICAgICAgbGV0IGFycmF5MSA9IGFyci5zbGljZShqLCBqICsgY291bnQpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGFycmF5MSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG59XG4iXX0=

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
        _this.arrItem1 = [2, 1, 1];
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
            console.log("click chinh no ==> bay bong len ", arrItemClick);
            this.moveBall(arrItemClick, layerItemClick, 1, layerItemClick);
            this.idxClick = idItem;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvbmV3UGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXVDO0FBR2pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOE1DO1FBNU1HLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsY0FBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7O0lBeUwxQixDQUFDO0lBdkxHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELGlCQUFpQjtJQUNqQiwyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9FLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFDRCx1Q0FBb0IsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELHVDQUFvQixHQUFwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsdUNBQW9CLEdBQXBCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCx1Q0FBb0IsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELDhCQUFXLEdBQVgsVUFBWSxNQUFNLEVBQUUsWUFBWSxFQUFFLGNBQWM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQixtQkFBbUI7WUFDbkIsZ0NBQWdDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sRUFBRTtnQkFDekIsZ0NBQWdDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUE7Z0JBRTlELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsNkJBQTZCO2dCQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUNwQixrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUMzQixrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUMzQixrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUMzQixrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRDtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7SUFDTCxDQUFDO0lBQ0Qsc0NBQW1CLEdBQW5CLFVBQW9CLE9BQVksRUFBRSxZQUFpQixFQUFFLFFBQVEsRUFBRSxPQUFPO1FBQWxELHdCQUFBLEVBQUEsWUFBWTtRQUFFLDZCQUFBLEVBQUEsaUJBQWlCO1FBQy9DLDRCQUE0QjtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFckQsd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1Qyx1Q0FBdUM7UUFDdkMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDSCxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxxRUFBcUU7UUFDckUsaUJBQWlCO1FBQ2pCLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLE9BQU8sT0FBTyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDekU7YUFBTTtZQUNILGtCQUFrQjtZQUNsQiwrQkFBK0I7WUFDL0IsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pDO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUMxRCxPQUFPLE9BQU8sQ0FBQzthQUNsQjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FDSjtJQUVMLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTztRQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDSCxNQUFNO2lCQUNUO2FBQ0o7U0FDSjtRQUVELElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFBO2dDQUM1QyxDQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCx3RUFBd0U7WUFDeEUsa0VBQWtFO1lBRWxFLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7cUJBQ25ELEtBQUssRUFBRSxDQUFDO2FBQ2hCO2lCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDakIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQzVELEtBQUssRUFBRSxDQUFDO2FBQ2hCO2lCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckQsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ3RCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLGFBQWEsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDYixRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQztvQkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN4RCxDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7YUFDaEI7O1FBN0JMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBckMsQ0FBQztTQThCVDtJQUNMLENBQUM7SUFDRCw2QkFBVSxHQUFWLFVBQVcsR0FBUSxFQUFFLEtBQUs7UUFBZixvQkFBQSxFQUFBLFFBQVE7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUV4QjtJQUNMLENBQUM7SUExTUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFaTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOE01QjtJQUFELGVBQUM7Q0E5TUQsQUE4TUMsQ0E5TXFDLEVBQUUsQ0FBQyxTQUFTLEdBOE1qRDtrQkE5TW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRlbVByZWZhYiBmcm9tIFwiLi4vSXRlbVByZWZhYlwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1QcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheWVyMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5ZXIzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXllcjQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgYXJyYXlJdGVtID0gW107XG5cbiAgICBhcnJJdGVtMSA9IFsyLCAxLCAxXTtcbiAgICBhcnJJdGVtMiA9IFsyLCAzLCAzXTtcbiAgICBhcnJJdGVtMyA9IFszLCAyLCAyXTtcbiAgICBhcnJJdGVtNCA9IFsxLCAzLCAxXTtcblxuICAgIGlkeENsaWNrOiBudW1iZXIgPSAtMTtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmJ1aWxkTWFwKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbiAgICBidWlsZE1hcCgpIHtcbiAgICAgICAgdGhpcy5hcnJheUl0ZW0gPSBbXTtcbiAgICAgICAgdGhpcy5hcnJheUl0ZW0ucHVzaCh0aGlzLmFyckl0ZW0xLCB0aGlzLmFyckl0ZW0yLCB0aGlzLmFyckl0ZW0zLCB0aGlzLmFyckl0ZW00KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0odGhpcy5hcnJheUl0ZW1baV0sIHRoaXMubGF5ZXIuY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIxKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSGFubGRlckNsaWNrTGF5ZXIxXCIpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tJdGVtKDEsIHRoaXMuYXJySXRlbTEsIHRoaXMubGF5ZXIxKTtcbiAgICB9XG4gICAgb25IYW5sZGVyQ2xpY2tMYXllcjIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25IYW5sZGVyQ2xpY2tMYXllcjJcIik7XG4gICAgICAgIHRoaXMub25DbGlja0l0ZW0oMiwgdGhpcy5hcnJJdGVtMiwgdGhpcy5sYXllcjIpO1xuICAgIH1cbiAgICBvbkhhbmxkZXJDbGlja0xheWVyMygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkhhbmxkZXJDbGlja0xheWVyM1wiKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrSXRlbSgzLCB0aGlzLmFyckl0ZW0zLCB0aGlzLmxheWVyMyk7XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXI0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSGFubGRlckNsaWNrTGF5ZXI0XCIpO1xuICAgICAgICB0aGlzLm9uQ2xpY2tJdGVtKDQsIHRoaXMuYXJySXRlbTQsIHRoaXMubGF5ZXI0KTtcbiAgICB9XG4gICAgb25DbGlja0l0ZW0oaWRJdGVtLCBhcnJJdGVtQ2xpY2ssIGxheWVySXRlbUNsaWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DbGlja0l0ZW09LS09LT0tPVwiKTtcbiAgICAgICAgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gLTEpIHtcbiAgICAgICAgICAgIC8vY2hvbiBkaWVtIGJhdCBkYXVcbiAgICAgICAgICAgIC8vIGFyckl0ZW1DbGljayBjdWEgaXRlbSBiYXkgbGVuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNoaW5oIG5vID09PiBiYXkgYm9uZyBsZW4gXCIsIGFyckl0ZW1DbGljayk7XG4gICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW1DbGljaywgbGF5ZXJJdGVtQ2xpY2ssIDEsIGxheWVySXRlbUNsaWNrKTtcblxuICAgICAgICAgICAgdGhpcy5pZHhDbGljayA9IGlkSXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkeENsaWNrID09IGlkSXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIGNob24gZGljaCBkZW4gbGEgZGllbSBiYXQgZGF1XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBjaGluaCBubyBsYW4gbnVhID09PiB0aGEgYm9uZyB4dW9uZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsKGFyckl0ZW1DbGljaywgbGF5ZXJJdGVtQ2xpY2ssIDAsIGxheWVySXRlbUNsaWNrKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5pZHhDbGljayA9IC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjaG9uIGRpY2ggZGVuIGxhIGRpZW0ga2hhY1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkeENsaWNrID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1vdmVCYWxsKHRoaXMuYXJySXRlbTIsIHRoaXMubGF5ZXIyLCAyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySXRlbTIgPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5hcnJJdGVtMiwgYXJySXRlbUNsaWNrLCB0aGlzLmxheWVyMiwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHRoaXMuYXJySXRlbTI6IFwiLCB0aGlzLmFyckl0ZW0yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWR4Q2xpY2sgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMubW92ZUJhbGwodGhpcy5hcnJJdGVtMywgdGhpcy5sYXllcjMsIDIsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJJdGVtMyA9IHRoaXMub25IYW5sZGVyQ2xpY2tMYXllcih0aGlzLmFyckl0ZW0zLCBhcnJJdGVtQ2xpY2ssIHRoaXMubGF5ZXIzLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGljaCBkZW4gdGhpcy5hcnJJdGVtMzogXCIsIHRoaXMuYXJySXRlbTMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZHhDbGljayA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5tb3ZlQmFsbCh0aGlzLmFyckl0ZW0xLCB0aGlzLmxheWVyMSwgMiwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckl0ZW0xID0gdGhpcy5vbkhhbmxkZXJDbGlja0xheWVyKHRoaXMuYXJySXRlbTEsIGFyckl0ZW1DbGljaywgdGhpcy5sYXllcjEsIGxheWVySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaWNoIGRlbiB0aGlzLmFyckl0ZW0xOiBcIiwgdGhpcy5hcnJJdGVtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkeENsaWNrID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLm1vdmVCYWxsKHRoaXMuYXJySXRlbTQsIHRoaXMubGF5ZXI0LCAyLCBsYXllckl0ZW1DbGljayk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJySXRlbTQgPSB0aGlzLm9uSGFubGRlckNsaWNrTGF5ZXIodGhpcy5hcnJJdGVtNCwgYXJySXRlbUNsaWNrLCB0aGlzLmxheWVyNCwgbGF5ZXJJdGVtQ2xpY2spO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHRoaXMuYXJySXRlbTQ6IFwiLCB0aGlzLmFyckl0ZW00KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pZHhDbGljayA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uSGFubGRlckNsaWNrTGF5ZXIoYXJySXRlbSA9IFtdLCBhcnJJdGVtQ2xpY2sgPSBbXSwgbGF5ZXJPdXQsIGxheWVySW4pIHtcbiAgICAgICAgLy8gYXJySXRlbUNsaWNrIGN1YSBkaWNoIGRlblxuICAgICAgICBjb25zb2xlLmxvZyhcImFyckl0ZW0gYmFuIGRhdSA6IFwiLCBhcnJJdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtQ2xpY2sgYmFuIGRhdSA6IFwiLCBhcnJJdGVtQ2xpY2spO1xuXG4gICAgICAgIC8vIGxheSBwaGFuIHR1IGN1b2kgY3VuZ1xuICAgICAgICBsZXQgYXJyTW92ZSA9IFthcnJJdGVtW2Fyckl0ZW0ubGVuZ3RoIC0gMV1dO1xuICAgICAgICAvLyBsYXkgbmh1bmcgcGhhbiB0dSBnaW9uZyBwaGFuIHR1IGN1b2lcbiAgICAgICAgaWYgKGFyckl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMjsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJySXRlbVtpXSA9PSBhcnJNb3ZlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyck1vdmUucHVzaChhcnJJdGVtW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJNb3ZlIDogXCIsIGFyck1vdmUpO1xuICAgICAgICBsZXQgYXJySW5kZXhSZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyckl0ZW0ubGVuZ3RoIC0gMTsgaSA+IGFyckl0ZW0ubGVuZ3RoIC0gMSAtIGFyck1vdmUubGVuZ3RoOyBpLS0pIHtcbiAgICAgICAgICAgIGFyckluZGV4UmVtb3ZlLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcnJheSBpbmRleCByZW1vdmU9LS09LT0tPS09PS09LTogXCIsIGFyckluZGV4UmVtb3ZlKTtcbiAgICAgICAgLy8gY2hlY2sgbWF4IGl0ZW1cbiAgICAgICAgbGV0IG1heEl0ZW0gPSBhcnJJdGVtQ2xpY2subGVuZ3RoICsgYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgIGlmIChtYXhJdGVtID4gNCkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMCwgbGF5ZXJJbik7XG4gICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF4SXRlbSA9PT4ga2hvbmcgZGkgY2h1eWVuIGR1b2NcIiwgYXJySXRlbUNsaWNrLCBhcnJJdGVtKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8geHUgbHkgZGkgY2h1eWVuXG4gICAgICAgICAgICAvLyBjaGVjayBjdW5nIG1hdSBjaG8gZGkgY2h1eWVuXG4gICAgICAgICAgICBpZiAoYXJySXRlbUNsaWNrW2Fyckl0ZW1DbGljay5sZW5ndGggLSAxXSA9PSBhcnJNb3ZlW2Fyck1vdmUubGVuZ3RoIC0gMV0gfHwgYXJySXRlbUNsaWNrLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJySXRlbUNsaWNrLnB1c2goYXJyTW92ZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGwoYXJySXRlbSwgbGF5ZXJPdXQsIDIsIGxheWVySW4pO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFyckl0ZW0ubGVuZ3RoIC0gYXJyTW92ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJySXRlbSA9IGFyckl0ZW0uc2xpY2UoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFuIGRhdSBzbGljZSA6IFwiLCBhcnJJdGVtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpY2ggZGVuIHNhdSBraGkgZGkgY2h1eWVuOiBcIiwgYXJySXRlbUNsaWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgMCwgbGF5ZXJJbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcnJJdGVtXCIsIGFyckl0ZW0sIFwibGF5ZXJPdXRcIiwgbGF5ZXJPdXQsIFwibGF5ZXJJblwiLCBsYXllckluKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNodWEgZGkgY2h1eWVuIGR1b2NcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyckl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBtb3ZlQmFsbChhcnJJdGVtLCBsYXllck91dCwgaWR4LCBsYXllckluKSB7XG4gICAgICAgIGxldCBhcnJNb3ZlID0gW2Fyckl0ZW1bYXJySXRlbS5sZW5ndGggLSAxXV07XG4gICAgICAgIGlmIChhcnJJdGVtLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDI7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyckl0ZW1baV0gPT0gYXJyTW92ZVswXSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJNb3ZlLnB1c2goYXJySXRlbVtpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFyckluZGV4UmVtb3ZlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJJdGVtLmxlbmd0aCAtIDE7IGkgPiBhcnJJdGVtLmxlbmd0aCAtIDEgLSBhcnJNb3ZlLmxlbmd0aDsgaS0tKSB7XG4gICAgICAgICAgICBhcnJJbmRleFJlbW92ZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJySW5kZXhSZW1vdmU9LT0tPS09LVwiLCBhcnJJbmRleFJlbW92ZSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJJbmRleFJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGljb24gPSBsYXllck91dC5jaGlsZHJlblthcnJJbmRleFJlbW92ZVtpXV07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW5nIGxheWVyT3V0LmNoaWxkcmVuIC09LT0tPS09LT0tXCIsIGxheWVyT3V0LmNoaWxkcmVuKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWFuZyBhcnJJbmRleFJlbW92ZSAtPS09LT0tPS09LVwiLCBhcnJJbmRleFJlbW92ZSlcblxuICAgICAgICAgICAgbGV0IHBvcyA9IGxheWVySW4ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihsYXllckluLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGxldCBwb3MxID0gaWNvbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuICAgICAgICAgICAgaWYgKGlkeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiBsYXllck91dC5wb3NpdGlvbi55ICsgMzAwICsgaSAqIC01MCB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpY29uKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IGxheWVyT3V0LnBvc2l0aW9uLnkgKyBhcnJJbmRleFJlbW92ZVtpXSAqIDUwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT0gMikge1xuICAgICAgICAgICAgICAgIGxheWVySW4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oaWNvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB4OiBwb3MxLnggfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiBsYXllckluLmNoaWxkcmVuQ291bnQgKiA1MCB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4xKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyT3V0LnJlbW92ZUNoaWxkKGljb24sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLnNldFBvc2l0aW9uKDAsIGxheWVySW4uY2hpbGRyZW5Db3VudCAqIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVySW4uYWRkQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllckluLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNyZWF0ZUl0ZW0oYXJyID0gW10sIGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChJdGVtUHJlZmFiKS5zZXRJbmRleChhcnJbaV0pO1xuICAgICAgICAgICAgaXRlbS54ID0gMDtcbiAgICAgICAgICAgIGl0ZW0ueSA9IGkgKiA1MDtcbiAgICAgICAgICAgIGxheWVyLmFkZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
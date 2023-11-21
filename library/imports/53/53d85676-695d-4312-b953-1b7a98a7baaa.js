"use strict";
cc._RF.push(module, '53d85Z2aV1DErlTG3qYp7qq', 'PlayGame');
// script/playGame/PlayGame.ts

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
var Ball_1 = require("./Ball");
var Item_1 = require("./Item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.item = null;
        _this.ball = null;
        _this.spriteIcon = [];
        _this.arrMap = [
            2, 3, 2, 2,
            -1, -1, -2, -3,
            -1, -1, -2, -2
        ];
        _this.mapData = [];
        _this.listItem = [];
        _this.listBall = [];
        _this.itemSelect = null;
        return _this;
    }
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onLoad = function () {
        return;
        for (var i = 0; i < this.arrMap.length; i++) {
            if (this.arrMap[i] < 0)
                this.arrMap[i] = null;
        }
        this.mapData = this.sliceArr(this.arrMap, 4);
        for (var i = 0; i < this.mapData.length; i++) {
            var item = cc.instantiate(this.item);
            item.setParent(this.content);
            item.setPosition(-150 + i * 150, 0);
            item.active = true;
            var scriptItem = item.getComponent(Item_1.default);
            scriptItem.setUp(i, this.mapData[i]);
            item.on("Click_binh", this.onClickItem, this);
            this.creatBall(scriptItem);
            this.listItem.push(scriptItem);
        }
    };
    NewClass.prototype.onClickItem = function (item) {
        var listChild = this.listBall[item.idItem];
        var fistChild = listChild[0];
        var pos = item.node.getPosition();
        //check bam vao binh chua
        if (this.itemSelect !== null) {
            if (this.itemSelect.idItem == item.idItem) {
                console.log(" xuong");
                // loai bo binh l=select // ha bong xuong
                this.selectColorBall(item.arrColor, listChild, pos, 0);
                this.itemSelect = null;
            }
            else {
                // kiem tra binh thu 2 co cho trong hay khong
                // kiem tra co phu hop mau di chuyen hay k
                console.log(" len sang", this.itemSelect.idItem);
                this.selectColorBall(this.itemSelect.arrColor, this.listBall[this.itemSelect.idItem], pos, 0, true);
                console.log("this.itemSelect.arrColor", this.itemSelect.arrColor.reverse());
                console.log("this.listBall[this.itemSelect.idItem]", this.listBall[this.itemSelect.idItem]);
                console.log("item.arrColor reverse", item.arrColor.reverse());
                console.log("listChild", listChild);
                if (true) {
                    // di chuyen binh
                }
                else {
                    // loai bo binh l=select // ha bong xuong
                    this.itemSelect = null;
                }
            }
        }
        else {
            console.log("Len");
            console.log("Len", listChild);
            this.itemSelect = item;
            // cho bong trong binh bay len
            this.selectColorBall(item.arrColor, listChild, pos, 1);
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
    NewClass.prototype.creatBall = function (item) {
        var arrColor = item.arrColor;
        console.log("arrColor=---==", arrColor);
        var listChild = [];
        for (var i = arrColor.length - 1, j = 0; i >= 0; i--, j++) {
            var color = arrColor[i];
            // if (color < 0) continue;
            var ball = cc.instantiate(this.ball);
            ball.setParent(this.content);
            var child = item.node.children[j];
            ball.getComponent(cc.Sprite).spriteFrame = this.spriteIcon[color];
            var pos = child.parent.convertToWorldSpaceAR(child.position);
            var pos1 = this.content.convertToNodeSpaceAR(pos);
            ball.setPosition(pos1);
            ball.active = true;
            var scriptBall = ball.getComponent(Ball_1.default);
            scriptBall.setUp(color);
            listChild.push(scriptBall);
        }
        item.listNode = listChild;
        this.listBall[item.idItem] = listChild;
    };
    NewClass.prototype.onClickIconBall = function (arr, id) {
        // let i = 0;
        // let position = this.item;
        // if (arr[i + 3] == null) {
        //     i = i + 4;
        // } else if (arr[i + 2] == null) {
        //     i = i + 3;
        // } else if (arr[i + 1] == null) {
        //     i = i + 2;
        // } else if (arr[i] == null) {
        //     i = i + 1;
        // }
        // console.log("=--=iddddddddd", position)
        // cc.tween(arr[i])
        //     .to(0.2, { y: position.y + 200 })
        //     .start()
    };
    NewClass.prototype.selectColorBall = function (arr, list, pos, index, move) {
        if (arr === void 0) { arr = []; }
        if (list === void 0) { list = []; }
        if (move === void 0) { move = false; }
        if (arr[0] == arr[1] && arr[1] !== arr[2] && arr[1] !== null && arr[2] !== null) {
            console.log("selectColorBall 1");
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 2, pos, false);
                }
                else {
                    this.moveBallDown(list, 2, pos);
                }
            }
            else {
                this.moveBallUp(list, 2, pos, true);
            }
        }
        else if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] !== arr[3]) {
            console.log("selectColorBall 2");
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 3, pos);
                }
                else {
                    this.moveBallDown(list, 3, pos);
                }
            }
            else {
                this.moveBallUp(list, 3, pos, true);
            }
        }
        else if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]) {
            console.log("selectColorBall 3");
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 4, pos);
                }
                else {
                    this.moveBallDown(list, 4, pos);
                }
            }
            else {
                this.moveBallUp(list, 3, pos, true);
            }
        }
        else {
            console.log("selectColorBall 4");
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 1, pos);
                }
                else {
                    this.moveBallDown(list, 1, pos);
                }
            }
            else {
                this.moveBallUp(list, 1, pos, true);
            }
        }
    };
    NewClass.prototype.moveBallUp = function (list, i, pos, move) {
        if (list === void 0) { list = []; }
        if (move === void 0) { move = false; }
        for (var j = 0; j < i; j++) {
            if (move == false) {
                cc.tween(list[j].node)
                    .to(0.2, { y: (pos.y + 300) - 50 * j })
                    .start();
            }
            else {
                console.log("position", pos);
                cc.tween(list[j].node)
                    .to(0.2, { x: pos.x + 50 })
                    .to(0.2, { y: 90 - 60 * j })
                    .start();
            }
        }
    };
    NewClass.prototype.moveBallDown = function (list, i, pos) {
        if (list === void 0) { list = []; }
        for (var j = 0; j < i; j++) {
            cc.tween(list[j].node)
                .to(0.2, { y: 90 - 60 * j })
                .start();
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "content", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "item", void 0);
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "ball", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], NewClass.prototype, "spriteIcon", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
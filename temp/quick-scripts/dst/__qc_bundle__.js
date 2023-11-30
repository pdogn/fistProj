
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/ItemPrefab');
require('./assets/script/playGame/Ball');
require('./assets/script/playGame/Item');
require('./assets/script/playGame/PlayGame');
require('./assets/script/playGame/newPlayGame');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ItemPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf3d5WKFfdFt7J9J7OhFA5w', 'ItemPrefab');
// script/ItemPrefab.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var ItemPrefab = /** @class */ (function (_super) {
    __extends(ItemPrefab, _super);
    function ItemPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrIcon = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ItemPrefab.prototype.start = function () {
    };
    ItemPrefab.prototype.setIndex = function (idx) {
        for (var i = 0; i < this.arrIcon.length; i++) {
            if (i == idx)
                this.arrIcon[idx].active = true;
            else
                this.arrIcon[i].active = false;
        }
    };
    __decorate([
        property([cc.Node])
    ], ItemPrefab.prototype, "arrIcon", void 0);
    ItemPrefab = __decorate([
        ccclass
    ], ItemPrefab);
    return ItemPrefab;
}(cc.Component));
exports.default = ItemPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvSXRlbVByZWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXVCQztRQXBCRyxhQUFPLEdBQWMsRUFBRSxDQUFDOztRQW1CeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFoQkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxHQUFHO1FBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzsrQ0FDSTtJQUhQLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1QjlCO0lBQUQsaUJBQUM7Q0F2QkQsQUF1QkMsQ0F2QnVDLEVBQUUsQ0FBQyxTQUFTLEdBdUJuRDtrQkF2Qm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1QcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBhcnJJY29uOiBjYy5Ob2RlW10gPSBbXTtcblxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRJbmRleChpZHgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyckljb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGlkeCkgdGhpcy5hcnJJY29uW2lkeF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgdGhpcy5hcnJJY29uW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playGame/PlayGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvUGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlPQztRQTlORyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBSXhCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFFbEMsWUFBTSxHQUFHO1lBQ0wsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUFDLENBQUM7UUFFcEIsYUFBTyxHQUFlLEVBQUUsQ0FBQTtRQUV4QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsZ0JBQVUsR0FBUyxJQUFJLENBQUM7O0lBd001QixDQUFDO0lBdE1HLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFMUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUM7WUFDekMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUVqQztJQUNMLENBQUM7SUFDRCw4QkFBVyxHQUFYLFVBQVksSUFBVTtRQUVsQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQyx5QkFBeUI7UUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBRXJCLHlDQUF5QztnQkFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILDZDQUE2QztnQkFDN0MsMENBQTBDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUVoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNwRyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7Z0JBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7Z0JBQzNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQTtnQkFFbkMsSUFBSSxJQUFJLEVBQUU7b0JBQ04saUJBQWlCO2lCQUNwQjtxQkFBTTtvQkFDSCx5Q0FBeUM7b0JBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjthQUNKO1NBRUo7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFFN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3pEO0lBR0wsQ0FBQztJQUNELDJCQUFRLEdBQVIsVUFBUyxHQUFhLEVBQUUsS0FBYTtRQUNqQyxJQUFJLEtBQUssR0FBZSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUN4QyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUE7WUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNyQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsSUFBVTtRQUVoQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QiwyQkFBMkI7WUFDM0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUM7WUFDekMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBRTlCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLEdBQUcsRUFBRSxFQUFFO1FBQ25CLGFBQWE7UUFDYiw0QkFBNEI7UUFFNUIsNEJBQTRCO1FBQzVCLGlCQUFpQjtRQUNqQixtQ0FBbUM7UUFDbkMsaUJBQWlCO1FBQ2pCLG1DQUFtQztRQUNuQyxpQkFBaUI7UUFDakIsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixJQUFJO1FBQ0osMENBQTBDO1FBRTFDLG1CQUFtQjtRQUNuQix3Q0FBd0M7UUFDeEMsZUFBZTtJQUVuQixDQUFDO0lBQ0Qsa0NBQWUsR0FBZixVQUFnQixHQUFRLEVBQUUsSUFBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBWTtRQUE3QyxvQkFBQSxFQUFBLFFBQVE7UUFBRSxxQkFBQSxFQUFBLFNBQVM7UUFBYyxxQkFBQSxFQUFBLFlBQVk7UUFDekQsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoQyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7aUJBQ3ZDO3FCQUFNO29CQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDbEM7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3RDO1NBQ0o7YUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoQyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDaEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2lCQUNsQzthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDdEM7U0FDSjthQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ2hDLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDZixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2lCQUNoQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7aUJBQ2xDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTthQUN0QztTQUNKO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFFaEMsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUNmLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7aUJBQ2hDO3FCQUFNO29CQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDbEM7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsNkJBQVUsR0FBVixVQUFXLElBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQVk7UUFBL0IscUJBQUEsRUFBQSxTQUFTO1FBQVUscUJBQUEsRUFBQSxZQUFZO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztxQkFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO3FCQUN0QyxLQUFLLEVBQUUsQ0FBQzthQUNoQjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3FCQUNqQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztxQkFDM0IsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBWSxHQUFaLFVBQWEsSUFBUyxFQUFFLENBQUMsRUFBRSxHQUFHO1FBQWpCLHFCQUFBLEVBQUEsU0FBUztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUMzQixLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUE1TkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQ087SUFiakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlPNUI7SUFBRCxlQUFDO0NBak9ELEFBaU9DLENBak9xQyxFQUFFLENBQUMsU0FBUyxHQWlPakQ7a0JBak9vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiYWxsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByaXRlSWNvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgYXJyTWFwID0gW1xuICAgICAgICAyLCAzLCAyLCAyLFxuICAgICAgICAtMSwgLTEsIC0yLCAtMyxcbiAgICAgICAgLTEsIC0xLCAtMiwgLTJdO1xuXG4gICAgbWFwRGF0YTogbnVtYmVyW11bXSA9IFtdXG5cbiAgICBsaXN0SXRlbTogSXRlbVtdID0gW107XG4gICAgbGlzdEJhbGw6IEJhbGxbXVtdID0gW107XG5cbiAgICBpdGVtU2VsZWN0OiBJdGVtID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWFwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJNYXBbaV0gPCAwKSB0aGlzLmFyck1hcFtpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXBEYXRhID0gdGhpcy5zbGljZUFycih0aGlzLmFyck1hcCwgNCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXBEYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0UGFyZW50KHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKC0xNTAgKyBpICogMTUwLCAwKTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgbGV0IHNjcmlwdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChJdGVtKTtcbiAgICAgICAgICAgIHNjcmlwdEl0ZW0uc2V0VXAoaSwgdGhpcy5tYXBEYXRhW2ldKTtcblxuICAgICAgICAgICAgaXRlbS5vbihcIkNsaWNrX2JpbmhcIiwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcylcblxuICAgICAgICAgICAgdGhpcy5jcmVhdEJhbGwoc2NyaXB0SXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2goc2NyaXB0SXRlbSlcblxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGl0ZW06IEl0ZW0pIHtcblxuICAgICAgICBsZXQgbGlzdENoaWxkID0gdGhpcy5saXN0QmFsbFtpdGVtLmlkSXRlbV1cbiAgICAgICAgbGV0IGZpc3RDaGlsZCA9IGxpc3RDaGlsZFswXTtcbiAgICAgICAgbGV0IHBvcyA9IGl0ZW0ubm9kZS5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIC8vY2hlY2sgYmFtIHZhbyBiaW5oIGNodWFcbiAgICAgICAgaWYgKHRoaXMuaXRlbVNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVNlbGVjdC5pZEl0ZW0gPT0gaXRlbS5pZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiB4dW9uZ1wiKVxuXG4gICAgICAgICAgICAgICAgLy8gbG9haSBibyBiaW5oIGw9c2VsZWN0IC8vIGhhIGJvbmcgeHVvbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdENvbG9yQmFsbChpdGVtLmFyckNvbG9yLCBsaXN0Q2hpbGQsIHBvcywgMClcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3QgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBraWVtIHRyYSBiaW5oIHRodSAyIGNvIGNobyB0cm9uZyBoYXkga2hvbmdcbiAgICAgICAgICAgICAgICAvLyBraWVtIHRyYSBjbyBwaHUgaG9wIG1hdSBkaSBjaHV5ZW4gaGF5IGtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBsZW4gc2FuZ1wiLCB0aGlzLml0ZW1TZWxlY3QuaWRJdGVtKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDb2xvckJhbGwodGhpcy5pdGVtU2VsZWN0LmFyckNvbG9yLCB0aGlzLmxpc3RCYWxsW3RoaXMuaXRlbVNlbGVjdC5pZEl0ZW1dLCBwb3MsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pdGVtU2VsZWN0LmFyckNvbG9yXCIsIHRoaXMuaXRlbVNlbGVjdC5hcnJDb2xvci5yZXZlcnNlKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmxpc3RCYWxsW3RoaXMuaXRlbVNlbGVjdC5pZEl0ZW1dXCIsIHRoaXMubGlzdEJhbGxbdGhpcy5pdGVtU2VsZWN0LmlkSXRlbV0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtLmFyckNvbG9yIHJldmVyc2VcIiwgaXRlbS5hcnJDb2xvci5yZXZlcnNlKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0Q2hpbGRcIiwgbGlzdENoaWxkKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGkgY2h1eWVuIGJpbmhcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FpIGJvIGJpbmggbD1zZWxlY3QgLy8gaGEgYm9uZyB4dW9uZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZW5cIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVuXCIsIGxpc3RDaGlsZClcblxuICAgICAgICAgICAgdGhpcy5pdGVtU2VsZWN0ID0gaXRlbTtcbiAgICAgICAgICAgIC8vIGNobyBib25nIHRyb25nIGJpbmggYmF5IGxlblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RDb2xvckJhbGwoaXRlbS5hcnJDb2xvciwgbGlzdENoaWxkLCBwb3MsIDEpXG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHNsaWNlQXJyKGFycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGFycmF5OiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaiArPSBjb3VudCkge1xuICAgICAgICAgICAgbGV0IGFycmF5MSA9IGFyci5zbGljZShqLCBqICsgY291bnQpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGFycmF5MSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGNyZWF0QmFsbChpdGVtOiBJdGVtKSB7XG5cbiAgICAgICAgbGV0IGFyckNvbG9yID0gaXRlbS5hcnJDb2xvcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJDb2xvcj0tLS09PVwiLCBhcnJDb2xvcik7XG4gICAgICAgIGxldCBsaXN0Q2hpbGQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gYXJyQ29sb3IubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGFyckNvbG9yW2ldO1xuICAgICAgICAgICAgLy8gaWYgKGNvbG9yIDwgMCkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgYmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XG4gICAgICAgICAgICBiYWxsLnNldFBhcmVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gaXRlbS5ub2RlLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlSWNvbltjb2xvcl07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGxldCBwb3MxID0gdGhpcy5jb250ZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG5cbiAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24ocG9zMSk7XG4gICAgICAgICAgICBiYWxsLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGxldCBzY3JpcHRCYWxsID0gYmFsbC5nZXRDb21wb25lbnQoQmFsbCk7XG4gICAgICAgICAgICBzY3JpcHRCYWxsLnNldFVwKGNvbG9yKTtcbiAgICAgICAgICAgIGxpc3RDaGlsZC5wdXNoKHNjcmlwdEJhbGwpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmxpc3ROb2RlID0gbGlzdENoaWxkO1xuICAgICAgICB0aGlzLmxpc3RCYWxsW2l0ZW0uaWRJdGVtXSA9IGxpc3RDaGlsZDtcbiAgICB9XG4gICAgb25DbGlja0ljb25CYWxsKGFyciwgaWQpIHtcbiAgICAgICAgLy8gbGV0IGkgPSAwO1xuICAgICAgICAvLyBsZXQgcG9zaXRpb24gPSB0aGlzLml0ZW07XG5cbiAgICAgICAgLy8gaWYgKGFycltpICsgM10gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyA0O1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpICsgMl0gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyAzO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpICsgMV0gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyAyO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpXSA9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICBpID0gaSArIDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9LS09aWRkZGRkZGRkZFwiLCBwb3NpdGlvbilcblxuICAgICAgICAvLyBjYy50d2VlbihhcnJbaV0pXG4gICAgICAgIC8vICAgICAudG8oMC4yLCB7IHk6IHBvc2l0aW9uLnkgKyAyMDAgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXG5cbiAgICB9XG4gICAgc2VsZWN0Q29sb3JCYWxsKGFyciA9IFtdLCBsaXN0ID0gW10sIHBvcywgaW5kZXgsIG1vdmUgPSBmYWxzZSkge1xuICAgICAgICBpZiAoYXJyWzBdID09IGFyclsxXSAmJiBhcnJbMV0gIT09IGFyclsyXSAmJiBhcnJbMV0gIT09IG51bGwgJiYgYXJyWzJdICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCAxXCIpXG4gICAgICAgICAgICBpZiAobW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAyLCBwb3MsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxEb3duKGxpc3QsIDIsIHBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAyLCBwb3MsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyWzBdID09IGFyclsxXSAmJiBhcnJbMV0gPT0gYXJyWzJdICYmIGFyclsyXSAhPT0gYXJyWzNdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCAyXCIpXG4gICAgICAgICAgICBpZiAobW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAzLCBwb3MpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbERvd24obGlzdCwgMywgcG9zKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbFVwKGxpc3QsIDMsIHBvcywgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhcnJbMF0gPT0gYXJyWzFdICYmIGFyclsxXSA9PSBhcnJbMl0gJiYgYXJyWzJdID09IGFyclszXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RDb2xvckJhbGwgM1wiKVxuICAgICAgICAgICAgaWYgKG1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsVXAobGlzdCwgNCwgcG9zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxEb3duKGxpc3QsIDQsIHBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAzLCBwb3MsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCA0XCIpXG5cbiAgICAgICAgICAgIGlmIChtb3ZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbFVwKGxpc3QsIDEsIHBvcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsRG93bihsaXN0LCAxLCBwb3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsVXAobGlzdCwgMSwgcG9zLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVCYWxsVXAobGlzdCA9IFtdLCBpLCBwb3MsIG1vdmUgPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgaWYgKG1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihsaXN0W2pdLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogKHBvcy55ICsgMzAwKSAtIDUwICogaiB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvblwiLCBwb3MpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obGlzdFtqXS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHBvcy54ICsgNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiA5MCAtIDYwICogaiB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlQmFsbERvd24obGlzdCA9IFtdLCBpLCBwb3MpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxpc3Rbal0ubm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IDkwIC0gNjAgKiBqIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/playGame/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c9f2XjLmxHG4QiouC7Z6Up', 'Ball');
// script/playGame/Ball.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Ball.prototype.start = function () {
    };
    Ball.prototype.setUp = function (index) {
    };
    __decorate([
        property(cc.Label)
    ], Ball.prototype, "label", void 0);
    __decorate([
        property
    ], Ball.prototype, "text", void 0);
    Ball = __decorate([
        ccclass
    ], Ball);
    return Ball;
}(cc.Component));
exports.default = Ball;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvQmFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW1CQztRQWhCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBWXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELG9CQUFLLEdBQUwsVUFBTSxLQUFLO0lBQ1gsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUNBQ0k7SUFHdkI7UUFEQyxRQUFRO3NDQUNjO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1CeEI7SUFBRCxXQUFDO0NBbkJELEFBbUJDLENBbkJpQyxFQUFFLENBQUMsU0FBUyxHQW1CN0M7a0JBbkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzZXRVcChpbmRleCkge1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
        console.log("qwer", this.node.getComponent(cc.Button).interactable);
        this.node.emit("Click_binh", this);
        console.log("qwer", this.node.getComponent(cc.Button).interactable);
        console.log("qwer", this.idItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXdDQztRQXJDRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFJbkIsY0FBUSxHQUFjLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQThCbkMsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Qkcsd0JBQXdCO0lBRXhCLHFCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxRQUFrQjtRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUU3QixDQUFDO0lBQ0Qsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwwQkFBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRW5FLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXBDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFISixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBd0N4QjtJQUFELFdBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q2lDLEVBQUUsQ0FBQyxTQUFTLEdBd0M3QztrQkF4Q29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb246IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaWRJdGVtOiBudW1iZXIgPSAwO1xuXG4gICAgYXJyQ29sb3I6IG51bWJlcltdO1xuXG4gICAgbGlzdE5vZGU6IGNjLk5vZGVbXSA9IG5ldyBBcnJheSg0KTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9XG4gICAgc2V0VXAoaW5kZXgsIGFyckNvbG9yOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuaWRJdGVtID0gaW5kZXg7XG4gICAgICAgIHRoaXMuYXJyQ29sb3IgPSBhcnJDb2xvcjtcblxuICAgIH1cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBvbkNsaWNrSXRlbSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJxd2VyXCIsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUpXG5cbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJDbGlja19iaW5oXCIsIHRoaXMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXdlclwiLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicXdlclwiLCB0aGlzLmlkSXRlbSlcblxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmxpc3ROb2RlID0gbmV3IEFycmF5KDQpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

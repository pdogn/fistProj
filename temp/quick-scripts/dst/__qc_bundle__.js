
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvcGxheUdhbWUvUGxheUdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlPQztRQTlORyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBSXhCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixnQkFBVSxHQUFxQixFQUFFLENBQUM7UUFFbEMsWUFBTSxHQUFHO1lBQ0wsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUFDLENBQUM7UUFFcEIsYUFBTyxHQUFlLEVBQUUsQ0FBQTtRQUV4QixjQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsZ0JBQVUsR0FBUyxJQUFJLENBQUM7O0lBd001QixDQUFDO0lBdE1HLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QseUJBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJ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QUFDO3FCQUNqQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7cUJBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztxQkFDM0IsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBWSxHQUFaLFVBQWEsSUFBUyxFQUFFLENBQUMsRUFBRSxHQUFHO1FBQWpCLHFCQUFBLEVBQUEsU0FBUztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUMzQixLQUFLLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUE1TkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUl4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQ087SUFiakIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlPNUI7SUFBRCxlQUFDO0NBak9ELEFBaU9DLENBak9xQyxFQUFFLENBQUMsU0FBUyxHQWlPakQ7a0JBak9vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBiYWxsOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByaXRlSWNvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgYXJyTWFwID0gW1xuICAgICAgICAyLCAzLCAyLCAyLFxuICAgICAgICAtMSwgLTEsIC0yLCAtMyxcbiAgICAgICAgLTEsIC0xLCAtMiwgLTJdO1xuXG4gICAgbWFwRGF0YTogbnVtYmVyW11bXSA9IFtdXG5cbiAgICBsaXN0SXRlbTogSXRlbVtdID0gW107XG4gICAgbGlzdEJhbGw6IEJhbGxbXVtdID0gW107XG5cbiAgICBpdGVtU2VsZWN0OiBJdGVtID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyTWFwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcnJNYXBbaV0gPCAwKSB0aGlzLmFyck1hcFtpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXBEYXRhID0gdGhpcy5zbGljZUFycih0aGlzLmFyck1hcCwgNCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXBEYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcbiAgICAgICAgICAgIGl0ZW0uc2V0UGFyZW50KHRoaXMuY29udGVudCk7XG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKC0xNTAgKyBpICogMTUwLCAwKTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgbGV0IHNjcmlwdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChJdGVtKTtcbiAgICAgICAgICAgIHNjcmlwdEl0ZW0uc2V0VXAoaSwgdGhpcy5tYXBEYXRhW2ldKTtcblxuICAgICAgICAgICAgaXRlbS5vbihcIkNsaWNrX2JpbmhcIiwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcylcblxuICAgICAgICAgICAgdGhpcy5jcmVhdEJhbGwoc2NyaXB0SXRlbSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLnB1c2goc2NyaXB0SXRlbSlcblxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tJdGVtKGl0ZW06IEl0ZW0pIHtcblxuICAgICAgICBsZXQgbGlzdENoaWxkID0gdGhpcy5saXN0QmFsbFtpdGVtLmlkSXRlbV1cbiAgICAgICAgbGV0IGZpc3RDaGlsZCA9IGxpc3RDaGlsZFswXTtcbiAgICAgICAgbGV0IHBvcyA9IGl0ZW0ubm9kZS5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIC8vY2hlY2sgYmFtIHZhbyBiaW5oIGNodWFcbiAgICAgICAgaWYgKHRoaXMuaXRlbVNlbGVjdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVNlbGVjdC5pZEl0ZW0gPT0gaXRlbS5pZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiB4dW9uZ1wiKVxuXG4gICAgICAgICAgICAgICAgLy8gbG9haSBibyBiaW5oIGw9c2VsZWN0IC8vIGhhIGJvbmcgeHVvbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdENvbG9yQmFsbChpdGVtLmFyckNvbG9yLCBsaXN0Q2hpbGQsIHBvcywgMClcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3QgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBraWVtIHRyYSBiaW5oIHRodSAyIGNvIGNobyB0cm9uZyBoYXkga2hvbmdcbiAgICAgICAgICAgICAgICAvLyBraWVtIHRyYSBjbyBwaHUgaG9wIG1hdSBkaSBjaHV5ZW4gaGF5IGtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBsZW4gc2FuZ1wiLCB0aGlzLml0ZW1TZWxlY3QuaWRJdGVtKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDb2xvckJhbGwodGhpcy5pdGVtU2VsZWN0LmFyckNvbG9yLCB0aGlzLmxpc3RCYWxsW3RoaXMuaXRlbVNlbGVjdC5pZEl0ZW1dLCBwb3MsIDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pdGVtU2VsZWN0LmFyckNvbG9yXCIsIHRoaXMuaXRlbVNlbGVjdC5hcnJDb2xvci5yZXZlcnNlKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmxpc3RCYWxsW3RoaXMuaXRlbVNlbGVjdC5pZEl0ZW1dXCIsIHRoaXMubGlzdEJhbGxbdGhpcy5pdGVtU2VsZWN0LmlkSXRlbV0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtLmFyckNvbG9yIHJldmVyc2VcIiwgaXRlbS5hcnJDb2xvci5yZXZlcnNlKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0Q2hpbGRcIiwgbGlzdENoaWxkKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGkgY2h1eWVuIGJpbmhcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2FpIGJvIGJpbmggbD1zZWxlY3QgLy8gaGEgYm9uZyB4dW9uZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZW5cIilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVuXCIsIGxpc3RDaGlsZClcblxuICAgICAgICAgICAgdGhpcy5pdGVtU2VsZWN0ID0gaXRlbTtcbiAgICAgICAgICAgIC8vIGNobyBib25nIHRyb25nIGJpbmggYmF5IGxlblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RDb2xvckJhbGwoaXRlbS5hcnJDb2xvciwgbGlzdENoaWxkLCBwb3MsIDEpXG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIHNsaWNlQXJyKGFycjogbnVtYmVyW10sIGNvdW50OiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IGFycmF5OiBudW1iZXJbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaiArPSBjb3VudCkge1xuICAgICAgICAgICAgbGV0IGFycmF5MSA9IGFyci5zbGljZShqLCBqICsgY291bnQpXG4gICAgICAgICAgICBhcnJheS5wdXNoKGFycmF5MSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGNyZWF0QmFsbChpdGVtOiBJdGVtKSB7XG5cbiAgICAgICAgbGV0IGFyckNvbG9yID0gaXRlbS5hcnJDb2xvcjtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcnJDb2xvcj0tLS09PVwiLCBhcnJDb2xvcik7XG4gICAgICAgIGxldCBsaXN0Q2hpbGQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gYXJyQ29sb3IubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tLCBqKyspIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGFyckNvbG9yW2ldO1xuICAgICAgICAgICAgLy8gaWYgKGNvbG9yIDwgMCkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgYmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XG4gICAgICAgICAgICBiYWxsLnNldFBhcmVudCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gaXRlbS5ub2RlLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlSWNvbltjb2xvcl07XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSBjaGlsZC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNoaWxkLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGxldCBwb3MxID0gdGhpcy5jb250ZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG5cbiAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24ocG9zMSk7XG4gICAgICAgICAgICBiYWxsLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGxldCBzY3JpcHRCYWxsID0gYmFsbC5nZXRDb21wb25lbnQoQmFsbCk7XG4gICAgICAgICAgICBzY3JpcHRCYWxsLnNldFVwKGNvbG9yKTtcbiAgICAgICAgICAgIGxpc3RDaGlsZC5wdXNoKHNjcmlwdEJhbGwpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmxpc3ROb2RlID0gbGlzdENoaWxkO1xuICAgICAgICB0aGlzLmxpc3RCYWxsW2l0ZW0uaWRJdGVtXSA9IGxpc3RDaGlsZDtcbiAgICB9XG4gICAgb25DbGlja0ljb25CYWxsKGFyciwgaWQpIHtcbiAgICAgICAgLy8gbGV0IGkgPSAwO1xuICAgICAgICAvLyBsZXQgcG9zaXRpb24gPSB0aGlzLml0ZW07XG5cbiAgICAgICAgLy8gaWYgKGFycltpICsgM10gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyA0O1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpICsgMl0gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyAzO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpICsgMV0gPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaSA9IGkgKyAyO1xuICAgICAgICAvLyB9IGVsc2UgaWYgKGFycltpXSA9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICBpID0gaSArIDE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9LS09aWRkZGRkZGRkZFwiLCBwb3NpdGlvbilcblxuICAgICAgICAvLyBjYy50d2VlbihhcnJbaV0pXG4gICAgICAgIC8vICAgICAudG8oMC4yLCB7IHk6IHBvc2l0aW9uLnkgKyAyMDAgfSlcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXG5cbiAgICB9XG4gICAgc2VsZWN0Q29sb3JCYWxsKGFyciA9IFtdLCBsaXN0ID0gW10sIHBvcywgaW5kZXgsIG1vdmUgPSBmYWxzZSkge1xuICAgICAgICBpZiAoYXJyWzBdID09IGFyclsxXSAmJiBhcnJbMV0gIT09IGFyclsyXSAmJiBhcnJbMV0gIT09IG51bGwgJiYgYXJyWzJdICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCAxXCIpXG4gICAgICAgICAgICBpZiAobW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAyLCBwb3MsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxEb3duKGxpc3QsIDIsIHBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAyLCBwb3MsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyWzBdID09IGFyclsxXSAmJiBhcnJbMV0gPT0gYXJyWzJdICYmIGFyclsyXSAhPT0gYXJyWzNdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCAyXCIpXG4gICAgICAgICAgICBpZiAobW92ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAzLCBwb3MpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbERvd24obGlzdCwgMywgcG9zKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbFVwKGxpc3QsIDMsIHBvcywgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhcnJbMF0gPT0gYXJyWzFdICYmIGFyclsxXSA9PSBhcnJbMl0gJiYgYXJyWzJdID09IGFyclszXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RDb2xvckJhbGwgM1wiKVxuICAgICAgICAgICAgaWYgKG1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsVXAobGlzdCwgNCwgcG9zKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxEb3duKGxpc3QsIDQsIHBvcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZUJhbGxVcChsaXN0LCAzLCBwb3MsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbG9yQmFsbCA0XCIpXG5cbiAgICAgICAgICAgIGlmIChtb3ZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQmFsbFVwKGxpc3QsIDEsIHBvcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsRG93bihsaXN0LCAxLCBwb3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVCYWxsVXAobGlzdCwgMSwgcG9zLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVCYWxsVXAobGlzdCA9IFtdLCBpLCBwb3MsIG1vdmUgPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICAgICAgaWYgKG1vdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihsaXN0W2pdLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgeTogKHBvcy55ICsgMzAwKSAtIDUwICogaiB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3NpdGlvblwiLCBwb3MpXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obGlzdFtqXS5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHBvcy54ICsgNTAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyB5OiA5MCAtIDYwICogaiB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlQmFsbERvd24obGlzdCA9IFtdLCBpLCBwb3MpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGxpc3Rbal0ubm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHk6IDkwIC0gNjAgKiBqIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

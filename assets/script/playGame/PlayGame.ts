
import Ball from "./Ball";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    content: cc.Node = null;


    @property(cc.Prefab)
    item: cc.Prefab = null;

    @property(cc.Prefab)
    ball: cc.Prefab = null;

    @property([cc.SpriteFrame])
    spriteIcon: cc.SpriteFrame[] = [];

    arrMap = [
        2, 3, 2, 2,
        -1, -1, -2, -3,
        -1, -1, -2, -2];

    mapData: number[][] = []

    listItem: Item[] = [];
    listBall: Ball[][] = [];

    itemSelect: Item = null;

    start() {

    }
    onLoad() {
        return;
        for (let i = 0; i < this.arrMap.length; i++) {
            if (this.arrMap[i] < 0) this.arrMap[i] = null;
        }
        this.mapData = this.sliceArr(this.arrMap, 4);
        for (let i = 0; i < this.mapData.length; i++) {

            var item = cc.instantiate(this.item);
            item.setParent(this.content);
            item.setPosition(-150 + i * 150, 0);
            item.active = true;

            let scriptItem = item.getComponent(Item);
            scriptItem.setUp(i, this.mapData[i]);

            item.on("Click_binh", this.onClickItem, this)

            this.creatBall(scriptItem);
            this.listItem.push(scriptItem)

        }
    }
    onClickItem(item: Item) {

        let listChild = this.listBall[item.idItem]
        let fistChild = listChild[0];
        let pos = item.node.getPosition();

        //check bam vao binh chua
        if (this.itemSelect !== null) {
            if (this.itemSelect.idItem == item.idItem) {
                console.log(" xuong")

                // loai bo binh l=select // ha bong xuong
                this.selectColorBall(item.arrColor, listChild, pos, 0)
                this.itemSelect = null;
            } else {
                // kiem tra binh thu 2 co cho trong hay khong
                // kiem tra co phu hop mau di chuyen hay k
                console.log(" len sang", this.itemSelect.idItem)

                this.selectColorBall(this.itemSelect.arrColor, this.listBall[this.itemSelect.idItem], pos, 0, true);
                console.log("this.itemSelect.arrColor", this.itemSelect.arrColor.reverse())
                console.log("this.listBall[this.itemSelect.idItem]", this.listBall[this.itemSelect.idItem])
                console.log("item.arrColor reverse", item.arrColor.reverse())
                console.log("listChild", listChild)

                if (true) {
                    // di chuyen binh
                } else {
                    // loai bo binh l=select // ha bong xuong
                    this.itemSelect = null;
                }
            }

        } else {
            console.log("Len")
            console.log("Len", listChild)

            this.itemSelect = item;
            // cho bong trong binh bay len
            this.selectColorBall(item.arrColor, listChild, pos, 1)
        }


    }
    sliceArr(arr: number[], count: number): number[][] {
        let array: number[][] = [];
        for (let j = 0; j < arr.length; j += count) {
            let array1 = arr.slice(j, j + count)
            array.push(array1)
        }
        return array;
    }
    creatBall(item: Item) {

        let arrColor = item.arrColor;
        console.log("arrColor=---==", arrColor);
        let listChild = [];

        for (let i = arrColor.length - 1, j = 0; i >= 0; i--, j++) {
            var color = arrColor[i];
            // if (color < 0) continue;
            var ball = cc.instantiate(this.ball);
            ball.setParent(this.content);
            let child = item.node.children[j];
            ball.getComponent(cc.Sprite).spriteFrame = this.spriteIcon[color];

            let pos = child.parent.convertToWorldSpaceAR(child.position);
            let pos1 = this.content.convertToNodeSpaceAR(pos);

            ball.setPosition(pos1);
            ball.active = true;

            let scriptBall = ball.getComponent(Ball);
            scriptBall.setUp(color);
            listChild.push(scriptBall);

        }

        item.listNode = listChild;
        this.listBall[item.idItem] = listChild;
    }
    onClickIconBall(arr, id) {
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

    }
    selectColorBall(arr = [], list = [], pos, index, move = false) {
        if (arr[0] == arr[1] && arr[1] !== arr[2] && arr[1] !== null && arr[2] !== null) {
            console.log("selectColorBall 1")
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 2, pos, false)
                } else {
                    this.moveBallDown(list, 2, pos)
                }
            } else {
                this.moveBallUp(list, 2, pos, true)
            }
        } else if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] !== arr[3]) {
            console.log("selectColorBall 2")
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 3, pos)
                } else {
                    this.moveBallDown(list, 3, pos)
                }
            } else {
                this.moveBallUp(list, 3, pos, true)
            }
        } else if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] == arr[3]) {
            console.log("selectColorBall 3")
            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 4, pos)
                } else {
                    this.moveBallDown(list, 4, pos)
                }
            } else {
                this.moveBallUp(list, 3, pos, true)
            }
        } else {
            console.log("selectColorBall 4")

            if (move == false) {
                if (index == 1) {
                    this.moveBallUp(list, 1, pos)
                } else {
                    this.moveBallDown(list, 1, pos)
                }
            } else {
                this.moveBallUp(list, 1, pos, true)
            }
        }
    }
    moveBallUp(list = [], i, pos, move = false) {
        for (let j = 0; j < i; j++) {
            if (move == false) {
                cc.tween(list[j].node)
                    .to(0.2, { y: (pos.y + 300) - 50 * j })
                    .start();
            } else {
                console.log("position", pos)
                cc.tween(list[j].node)
                    .to(0.2, { x: pos.x + 50 })
                    .to(0.2, { y: 90 - 60 * j })
                    .start();
            }
        }
    }
    moveBallDown(list = [], i, pos) {
        for (let j = 0; j < i; j++) {
            cc.tween(list[j].node)
                .to(0.2, { y: 90 - 60 * j })
                .start();
        }
    }

}


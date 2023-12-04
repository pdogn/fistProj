import ItemPrefab from "../ItemPrefab";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    iconPrefab: cc.Node = null;

    @property(cc.Prefab)
    item: cc.Prefab = null;

    @property(cc.Node)
    layer: cc.Node = null;

    @property(cc.Node)
    layer1: cc.Node = null;

    @property(cc.Node)
    lbWin: cc.Node = null;

    @property(cc.Node)
    lbGameOver: cc.Node = null;

    @property(cc.Label)
    lbCount: cc.Label = null;

    @property(cc.Label)
    lb: cc.Label = null;

    mapData: number[][] = [];
    arrayItem: number[] = [
        2, 0, 2, -1,
        2, 2, 0, -1,
        1, 0, 1, -1,
        3, 3, -3, -2,
        1, 1, -1, -1,
        3, 3, 0, -2,
    ];

    layerOut: cc.Node = null;
    indexArrayOut: number = -1;
    level: number = 1;
    gameOver: number = 0;
    aarr: number[] = []
    clickCount: number = 0;
    arrBack: any[] = [];
    arrGameOver: any[] = [0];
    count: number = 20;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.buildMap();
    }

    start() {
    }
    // update (dt) {}
    buildMap() {
        // if (this.mapData.length == 0) {
        for (let i = 0; i < this.arrayItem.length; i++) {
            if (this.arrayItem[i] >= 0) {
                this.aarr.push(this.arrayItem[i])
            }
        }

        this.mapData = this.sliceArr(this.arrayItem, 4);
        // }
        console.log(this.mapData);
        for (let i = 0; i < this.mapData.length; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.mapData[i][j] < 0) {
                    this.mapData[i] = this.mapData[i].slice(0, j)
                }
            }
            let item = cc.instantiate(this.item);
            item.setParent(this.layer);
            if (i < 4) {
                item.setPosition(this.layer1.children[i].getPosition());
            } else {
                // item.y = -100;
                item.setPosition(this.layer1.children[i].getPosition());
            }
            console.log("-==-=positons=-==", item.y)
            item.active = true;
            item.name = ("item" + i)
            this.createIcon(this.mapData[i], item);
            let scriptItem = item.getComponent(Item);
            scriptItem.setUp(i, this.mapData[i]);
            item.on("Click_binh", () => {
                console.log("this.layer.children[scriptItem.idItem]", this.layer.children[scriptItem.idItem])
                this.onClickItem(scriptItem.idItem, this.layer.children[scriptItem.idItem])
            }, this)
        }
    }
    onClickItem(idItem, layerItemClick) {
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
        } else {
            if (this.indexArrayOut == idItem) {
                // chon dich den la diem bat dau
                console.log("click chinh no lan nua ==> tha bong xuong");
                this.moveBall(this.mapData[idItem], layerItemClick, 0, layerItemClick);

            } else {
                this.clickCount++;
                console.log("this.clickCount=-=-=-=-", this.clickCount)
                // chon dich den la diem khac
                console.log("onClickItem=--=-=-=", this.mapData);
                // console.log("dich den arrItemClick: ", this.mapData[idItem]);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.layerOut);
                // console.log("=-=-=-=-quang00=-=-===-: ", this.indexArrayOut);
                this.mapData[this.indexArrayOut] = this.onHanlderClickLayer(this.mapData[this.indexArrayOut], this.mapData[idItem], this.layerOut, layerItemClick);
                console.log("==============");
                // console.log("quang0011", this.mapData);
                this.arrBack.push(JSON.parse(JSON.stringify(this.mapData)))
                console.log("quang001-arrBack", this.arrBack);
            }
            this.indexArrayOut = -1;
            this.layerOut = null;
        }
    }
    onHanlderClickLayer(arrItem = [], arrItemClick = [], layerOut, layerIn) {
        // arrItemClick cua dich den
        console.log("arrItem ban dau : ", arrItem);
        console.log("arrItemClick ban dau : ", arrItemClick);

        // lay phan tu cuoi cung
        let arrMove = [arrItem[arrItem.length - 1]];
        // lay nhung phan tu giong phan tu cuoi
        if (arrItem.length > 1) {
            for (let i = arrItem.length - 2; i > -1; i--) {
                if (arrItem[i] == arrMove[0]) {
                    arrMove.push(arrItem[i]);
                } else {
                    break;
                }
            }
        }
        console.log("arrMove : ", arrMove);
        let arrIndexRemove = [];
        for (let i = arrItem.length - 1; i > arrItem.length - 1 - arrMove.length; i--) {
            arrIndexRemove.push(i);
        }
        // console.log("array index remove=--=-=-=-==-=-: ", arrIndexRemove);
        // check max item
        let maxItem = arrItemClick.length + arrMove.length;
        if (maxItem > 4) {
            this.moveBall(arrItem, layerOut, 0, layerIn);
            console.log("maxItem ==> khong di chuyen duoc", arrItemClick, arrItem)
            return arrItem;
        } else {
            // xu ly di chuyen
            // check cung mau cho di chuyen
            if (arrItemClick[arrItemClick.length - 1] == arrMove[arrMove.length - 1] || arrItemClick.length < 1) {
                for (let i = 0; i < arrMove.length; i++) {
                    arrItemClick.push(arrMove[i]);
                }
                this.moveBall(arrItem, layerOut, 2, layerIn, arrItemClick);
                let index = arrItem.length - arrMove.length;
                arrItem = arrItem.slice(0, index);
                console.log("ban dau sau khi slice : ", arrItem);
                console.log("dich den sau khi di chuyen: ", arrItemClick);
                return arrItem;
            } else {
                this.moveBall(arrItem, layerOut, 0, layerIn);
                console.log("arrItem", arrItem, "layerOut", layerOut, "layerIn", layerIn);
                console.log("chua di chuyen duoc");
                return arrItem;
            }
        }

    }
    moveBall(arrItem, layerOut: cc.Node, idx, layerIn, arrItemClick: any = []) {
        let arrMove = [arrItem[arrItem.length - 1]];
        if (arrItem.length > 1) {
            for (let i = arrItem.length - 2; i > -1; i--) {
                if (arrItem[i] == arrMove[0]) {
                    arrMove.push(arrItem[i]);
                } else {
                    break;
                }
            }
        }

        let arrIndexRemove = [];
        for (let i = arrItem.length - 1; i > arrItem.length - 1 - arrMove.length; i--) {
            arrIndexRemove.push(i);
        }
        console.log("arrIndexRemove=-=-=-=-", arrIndexRemove)
        console.log("layout=-=-=-=-", layerOut)
        let aarr = []
        for (let i = 0; i < arrItemClick.length; i++) {
            if (arrItemClick[0] == arrItemClick[i]) {
                aarr.push(arrItemClick[i])
            }
        }
        if (aarr.length == 4) {
            this.gameOver++;
            this.arrGameOver.push(this.gameOver);
            console.log("quang99", this.arrGameOver);

        }
        for (let i = 0; i < arrIndexRemove.length; i++) {
            let icon = layerOut.children[arrIndexRemove[i]];
            console.log("quang layerOut.children -=-=-=-=-=-", layerOut.children)
            console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove, arrIndexRemove[i])

            let p = new cc.Vec3(0, layerOut.height * layerOut.scaleY * 1.3 - i * 30)
            if (idx == 1) {
                // icon.stopAllActions()
                cc.tween(icon)
                    .to(0.2, { position: p })
                    .start();
            } else if (idx == 0) {
                cc.tween(icon)
                    .to(0.2, { y: arrIndexRemove[i] * 50 })
                    .start();
            } else if (idx == 2) {
                // icon.stopAllActions()
                layerIn.getComponent(cc.Button).interactable = false;
                layerOut.getComponent(cc.Button).interactable = false;
                let a = icon.parent.convertToWorldSpaceAR(icon.position);
                let b = layerIn.convertToNodeSpaceAR(a);
                icon.setParent(layerIn);
                icon.setPosition(b);

                cc.tween(icon)
                    .to(0.2, { y: p.y })
                    .to(0.2, { x: p.x })
                    .to(0.2, { y: (layerIn.childrenCount - 1) * 50 })
                    .call(() => {
                        layerOut.removeChild(icon, true);
                    })
                    .call(() => {
                        if (aarr.length == 4) {
                            layerIn.getComponent(cc.Button).interactable = false;
                        } else {
                            layerIn.getComponent(cc.Button).interactable = true;
                        }
                        layerOut.getComponent(cc.Button).interactable = true;
                        console.log("clickCount : ", this.clickCount, this.gameOver);
                        this.lbCount.string = this.count - this.clickCount + "";
                        if (this.clickCount >= this.count && this.gameOver !== this.aarr.length / 4) {
                            this.lbGameOver.active = true;
                        } else {
                            if (this.gameOver == this.aarr.length / 4) {
                                if (this.level < 7) {
                                    this.lbWin.active = true;
                                } else {
                                    this.lb.node.active = true;
                                }
                            }
                        }
                    })
                    .start();
            }
        }
    }
    createIcon(arr = [], layer) {
        for (let i = 0; i < arr.length; i++) {
            let pos = layer.position;
            let icon = cc.instantiate(this.iconPrefab);
            console.log("=-=-==", arr[i])
            icon.getComponent(ItemPrefab).setIndex(arr[i]);
            icon.setParent(layer);
            icon.x = 0;
            icon.y = i * 50;
            console.log("==-=-=-pos.y", pos.y + i * 50)
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
    resetGame() {
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
    }
    netxGame() {
        this.level++;
        if (this.level == 2) {
            this.arrayItem = [
                1, 3, 2, 3,
                3, 2, 0, -1,
                1, 0, 3, 2,
                3, 0, 3, -2,
                1, 3, 1, -1,
                3, 2, 0, -2,
                -1, -1, -1, -1]
        } else if (this.level == 3) {
            this.arrayItem = [
                0, 0, 1, 2,
                1, 0, 3, 0,
                2, 1, 0, 1,
                0, 3, 2, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                2, 3, 1, -1,
                -1, -1, -1, -1]

        } else if (this.level == 4) {
            this.arrayItem = [
                2, 0, 2, -1,
                1, 1, 3, -1,
                1, 0, 2, 1,
                0, 3, -3, -2,
                3, 0, 1, -1,
                3, 1, 0, -2,
                0, 1, 0, -1,
                2, 0, 1, -1]
        } else if (this.level == 5) {
            this.arrayItem = [
                1, 2, 0, -1,
                3, 2, 1, -1,
                1, 0, 2, 1,
                0, 3, -3, -2,
                3, 0, 1, -1,
                1, 1, 0, -2,
                0, 1, 0, -1,
                2, 0, 3, -1]
        } else if (this.level == 6) {
            this.arrayItem = [
                0, 1, 1, -1,
                2, 0, 3, -1,
                1, 2, 2, 1,
                0, 3, -3, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                0, 3, 0, -1,
                1, 0, 2, -1]
        } else if (this.level == 7) {
            this.arrayItem = [
                2, 2, 0, 1,
                1, 1, 3, -1,
                1, 0, 3, 1,
                0, 2, -3, -2,
                1, 0, 1, -1,
                3, 1, 0, -2,
                0, 3, 0, -1,
                2, 0, -1, -1]
        }
        console.log("level", this.level);
        this.resetGame();
    }
    onClickBack() {
        if (this.arrBack.length < 2) {
            return;
        }
        if (this.arrGameOver.length < 2) {
            return;
        }
        this.mapData = this.arrBack[this.arrBack.length - 2];
        this.arrBack = this.arrBack.slice(0, this.arrBack.length - 1);
        this.gameOver = this.arrGameOver[this.arrGameOver.length - 2];
        this.arrGameOver = this.arrGameOver.slice(0, this.arrGameOver.length - 1)
        console.log("quang002-arrBack", this.arrBack);
        console.log("quang002-arrBack", this.arrGameOver);
        console.log("quang002-arrBack", this.gameOver);
        this.layer.removeAllChildren();
        this.buildMap();
    }
}

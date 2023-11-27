import ItemPrefab from "../ItemPrefab";
import Item from "./Item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Node)
    itemPrefab: cc.Node = null;
    @property(cc.Node)
    layer: cc.Node = null;
    @property(cc.Node)
    layer1: cc.Node = null;
    @property(cc.Node)
    layer2: cc.Node = null;
    @property(cc.Node)
    layer3: cc.Node = null;
    @property(cc.Node)
    layer4: cc.Node = null;

    arrayItem = [];

    arrItem1 = [3, 1, 1];
    arrItem2 = [3, 2, 2];
    arrItem3 = [2, 2, 3];
    arrItem4 = [1, 3, 1];

    idxClick: number = -1;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.buildMap();
    }

    start() {

    }
    // update (dt) {}
    buildMap() {
        this.arrayItem = [];
        this.arrayItem.push(this.arrItem1, this.arrItem2, this.arrItem3, this.arrItem4)
        for (let i = 0; i < this.arrayItem.length; i++) {
            this.createItem(this.arrayItem[i], this.layer.children[i]);
        }
    }
    onHanlderClickLayer1() {
        console.log("onHanlderClickLayer1");
        this.onClickItem(1, this.arrItem1, this.layer1);
    }
    onHanlderClickLayer2() {
        console.log("onHanlderClickLayer2");
        this.onClickItem(2, this.arrItem2, this.layer2);
    }
    onHanlderClickLayer3() {
        console.log("onHanlderClickLayer3");
        this.onClickItem(3, this.arrItem3, this.layer3);
    }
    onHanlderClickLayer4() {
        console.log("onHanlderClickLayer4");
        this.onClickItem(4, this.arrItem4, this.layer4);
    }
    onClickItem(idItem, arrItemClick, layerItemClick) {
        console.log("onClickItem=--=-=-=");
        if (this.idxClick == -1) {
            //chon diem bat dau
            // arrItemClick cua item bay len
            if (layerItemClick.childrenCount > 0) {
                console.log("click chinh no ==> bay bong len ", arrItemClick);
                this.moveBall(arrItemClick, layerItemClick, 1, layerItemClick);
                this.idxClick = idItem;
            }
            this.idxClick == -1
        } else {
            if (this.idxClick == idItem) {
                // chon dich den la diem bat dau
                console.log("click chinh no lan nua ==> tha bong xuong");
                this.moveBall(arrItemClick, layerItemClick, 0, layerItemClick)
                this.idxClick = -1;
            } else {
                // chon dich den la diem khac
                if (this.idxClick == 2) {
                    //   this.moveBall(this.arrItem2, this.layer2, 2, layerItemClick);
                    this.arrItem2 = this.onHanlderClickLayer(this.arrItem2, arrItemClick, this.layer2, layerItemClick);
                    console.log("dich den this.arrItem2: ", this.arrItem2);
                } else if (this.idxClick == 3) {
                    //   this.moveBall(this.arrItem3, this.layer3, 2, layerItemClick);
                    this.arrItem3 = this.onHanlderClickLayer(this.arrItem3, arrItemClick, this.layer3, layerItemClick);
                    console.log("dich den this.arrItem3: ", this.arrItem3);
                } else if (this.idxClick == 1) {
                    //   this.moveBall(this.arrItem1, this.layer1, 2, layerItemClick);
                    this.arrItem1 = this.onHanlderClickLayer(this.arrItem1, arrItemClick, this.layer1, layerItemClick);
                    console.log("dich den this.arrItem1: ", this.arrItem1);
                } else if (this.idxClick == 4) {
                    //   this.moveBall(this.arrItem4, this.layer4, 2, layerItemClick);
                    this.arrItem4 = this.onHanlderClickLayer(this.arrItem4, arrItemClick, this.layer4, layerItemClick);
                    console.log("dich den this.arrItem4: ", this.arrItem4);
                }
                this.idxClick = -1;
            }
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
                this.moveBall(arrItem, layerOut, 2, layerIn);
                let index = arrItem.length - arrMove.length;
                arrItem = arrItem.slice(0, index);
                console.log("ban dau slice : ", arrItem);
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
    moveBall(arrItem, layerOut, idx, layerIn) {
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
        for (let i = 0; i < arrIndexRemove.length; i++) {
            let icon = layerOut.children[arrIndexRemove[i]];
            // console.log("quang layerOut.children -=-=-=-=-=-", layerOut.children)
            console.log("quang arrIndexRemove -=-=-=-=-=-", arrIndexRemove, arrIndexRemove[i])

            // let pos = layerIn.parent.convertToWorldSpaceAR(layerIn.position);
            // let pos1 = icon.convertToNodeSpaceAR(pos);
            if (idx == 1) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + 300 + i * -30 })
                    .start();
            } else if (idx == 0) {
                cc.tween(icon)
                    .to(0.2, { y: layerOut.position.y + arrIndexRemove[i] * 50 })
                    .start();
            } else if (idx == 2) {
                layerIn.getComponent(cc.Button).interactable = false;
                layerOut.getComponent(cc.Button).interactable = false;
                icon.setParent(layerIn);
                let a = layerOut.parent.convertToWorldSpaceAR(layerOut.position);
                let b = icon.convertToNodeSpaceAR(a);
                icon.setPosition(b.x, layerOut.position.y + 300)
                cc.tween(icon)
                    .to(0.3, { x: 0 })
                    .to(0.3, { y: layerIn.position.y + (layerIn.childrenCount - 1) * 50 })
                    .call(() => {
                        layerOut.removeChild(icon, true);
                    })
                    .call(() => {
                        // icon.setPosition(0, layerIn.childrenCount * 50);
                        // layerIn.addChild(icon);
                        layerIn.getComponent(cc.Button).interactable = true;
                        layerOut.getComponent(cc.Button).interactable = true;
                    })
                    .start();
            }
        }
    }
    createItem(arr = [], layer) {
        for (let i = 0; i < arr.length; i++) {
            let item = cc.instantiate(this.itemPrefab);
            item.getComponent(ItemPrefab).setIndex(arr[i]);
            item.x = 0;
            item.y = i * 50;
            layer.addChild(item);

        }
    }

}

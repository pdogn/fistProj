import Ball from "./Ball";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Item extends cc.Component {

    @property(cc.Node)
    icon: cc.Node = null;

    idItem: number = 0;

    arrColor: number[];

    listNode: cc.Node[] = new Array(4);


    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    }
    setUp(index, arrColor: number[]) {
        this.reset();
        this.idItem = index;
        this.arrColor = arrColor;

    }
    start() {

    }
    onClickItem() {
        console.log("qwer", this.idItem)
        this.node.emit("Click_binh", this)
    }

    reset() {
        this.listNode = new Array(4);
    }
    // update (dt) {}
}

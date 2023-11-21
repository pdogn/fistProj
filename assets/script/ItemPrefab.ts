// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemPrefab extends cc.Component {

    @property([cc.Node])
    arrIcon: cc.Node[] = [];



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    setIndex(idx) {
        for (let i = 0; i < this.arrIcon.length; i++) {
            if (i == idx) this.arrIcon[idx].active = true;
            else this.arrIcon[i].active = false;
        }
    }

    // update (dt) {}
}

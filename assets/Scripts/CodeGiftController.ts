// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BoxController from "./BoxController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CodeGiftController extends cc.Component {

    @property(cc.Prefab)
    boxCodeGift: cc.Prefab = null;

    @property(cc.Prefab)
    boxCodeGift2: cc.Prefab = null;

    @property(cc.Node)
    parentBox: cc.Node = null;

    @property(cc.Label)
    extra2: cc.Label = null;
    playerExtra: number = 1;

    btnClickDoiNgay(){
        this.extra2.string =( "Tổng mã số nhận là:  " + this.playerExtra.toString );
        // this.label_ma1.string = "XÁC NHẬN ĐỔI  ĐIỂM VIETTEL++ LẤY 50 MÃ DỰ THƯỞNG" 
        console.log("MaDoiNgay")
    }

    onEnable() {
        this.parentBox.setContentSize(650, 140 * 10);
        for (var i = 0; i < 10; i++) {
            this.CreateBox(i);
        }
    }

    CreateBox(stt: number) {
        var box = cc.instantiate(this.boxCodeGift)//sinh ra node
        box.parent = this.parentBox;//xác định cha của node
        box.y = stt * -140 - 60;
        box.x = 0; 

        var sttReal = stt + 1;
        box.getComponent(BoxController).ChangeContent(sttReal,"VN01234567899999","20:15 02/04/2020");
    }
}

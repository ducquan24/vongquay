// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BoxController from "./BoxController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   @property(cc.Prefab)
   boxHistoryGift : cc.Prefab = null;
   
   @property(cc.Prefab)
   boxHistoryGift2 : cc.Prefab = null;

   @property(cc.Node)
   parentBox: cc.Node = null;

   onEnable(){
       this.parentBox.setContentSize(650,140*5);
       for (var i = 0 ;i < 5 ;i++ ) {      
        this.CreateBox(i);
       }
    }
    CreateBox(stt: number) {
        var box = cc.instantiate(this.boxHistoryGift) //sinh ra node
        box.parent = this.parentBox;//xác định cha của node
        box.y = stt * -140 - 60;
        box.x = 0;

        var sttReal = stt + 1;
        if (stt==1) 
        {
            box.getComponent(BoxController).ChangeContent(sttReal,"Voucher 30%","20:15 02/04/2020");
        }
        if (stt==2) {
            box.getComponent(BoxController).ChangeContent(sttReal,"20 sms gọi nội mạng miễn phí","20:15 02/04/2020");
        }if (stt==3) {
            box.getComponent(BoxController).ChangeContent(sttReal,"free data xem phim hằng ngày","20:15 02/04/2020");

        }if (stt==4) {
            box.getComponent(BoxController).ChangeContent(sttReal,"Voucher 50k","20:15 02/04/2020");

        }if (stt==5) {
            box.getComponent(BoxController).ChangeContent(sttReal,"Voucher 90%","20:15 02/04/2020");
        }
        else{
            console.log("abc")
        }



    }
   


}

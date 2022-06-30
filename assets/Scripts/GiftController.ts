// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Rotate from "./Rotate";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GìtController extends cc.Component {

    @property(cc.Node)
    popupMa: cc.Node = null;

    @property(cc.Label)
    label_ma1 : cc.Label;
    
    
    // @property(cc.Button)
    // btn_Ma1: cc.Button;
    // @property(cc.Button)
    // btn_Ma5: cc.Button;
    // @property(cc.Button)
    // btn_Ma10: cc.Button;
    // @property(cc.Button)
    // btn_Ma20: cc.Button;
    // @property(cc.Button)
    // btn_Ma30: cc.Button;
    // @property(cc.Button)
    // btn_Ma50: cc.Button;
    
    playerClick : number = 0;
    
    btnClick1(  playerClick ){
            this.playerClick = 1;
            this.btnClickGiaiThuong(this.playerClick);
        
            // this.label_ma1.string = "XÁC NHẬN ĐỔI 200 ĐIỂM VIETTEL++ LẤY 1 MÃ DỰ THƯỞNG"
            // console.log("Ma1")
        }
    btnClick5(playerClick){
            this.playerClick = 5;
            this.btnClickGiaiThuong(this.playerClick);

            // this.label_ma1.string = "XÁC NHẬN ĐỔI 1.000 ĐIỂM VIETTEL++ LẤY 5 MÃ DỰ THƯỞNG"
            // console.log("Ma5")
        }
    btnClick10(playerClick){
            this.playerClick = 10;
            this.btnClickGiaiThuong(this.playerClick);

            // this.label_ma1.string = "XÁC NHẬN ĐỔI 2.000 ĐIỂM VIETTEL++ LẤY 10 MÃ DỰ THƯỞNG"
            // console.log("Ma10")
        }
    btnClick20(playerClick){
            this.playerClick = 20;
            this.btnClickGiaiThuong(this.playerClick);

            // this.label_ma1.string = "XÁC NHẬN ĐỔI 4.000 ĐIỂM VIETTEL++ LẤY 20 MÃ DỰ THƯỞNG"
            // console.log("Ma10")
        }    
    btnClick30(playerClick){
            this.playerClick = 30;
            this.btnClickGiaiThuong(this.playerClick);

            // this.label_ma1.string = "XÁC NHẬN ĐỔI 6.000 ĐIỂM VIETTEL++ LẤY 30 MÃ DỰ THƯỞNG"
            // console.log("Ma10")
        }
    btnClick50(playerClick){
            this.playerClick = 50;
            this.btnClickGiaiThuong(this.playerClick);

            // this.label_ma1.string = "XÁC NHẬN ĐỔI 10.000 ĐIỂM VIETTEL++ LẤY 50 MÃ DỰ THƯỞNG"
            // console.log("Ma10")
        }   
 //c2
        @property(cc.Label)
        extra3: cc.Label = null;    
        // aaa(){
        //     var id :number = 1

        //     if(id ==1 ){
        //         this.playerExtra = 1;
        //         this.btnClickGiaiThuong();
        //     }
        //     if (id ==2) {
        //         this.playerExtra = 5;
        //         this.btnClickGiaiThuong();

        //     }if (id ==3) {
        //         this.playerExtra = 10;
        //         this.btnClickGiaiThuong();
        //     }if (id ==4) {
        //         this.playerExtra = 20;
        //         this.btnClickGiaiThuong();
        //     }if (id ==5) {
        //         this.playerExtra = 30;
        //         this.btnClickGiaiThuong();
        //     }if (id ==6) {
        //         this.playerExtra = 50;
        //         this.btnClickGiaiThuong();
        //     }
        // }   
        btnClickGiaiThuong(playerClick){
            this.extra3.string =( "XÁC NHẬN ĐỔI "+this.playerClick*200+" ĐIỂM VIETTEL++ LẤY " + this.playerClick.toString()+ " MÃ DỰ THƯỞNG")
            console.log("MaGiaiThuong")
        }

    
    openClick(){
        this.popupMa.active = true;
    }
    closeClick(){
        this.popupMa.active = false;
        this.btnYes1.active = false;
        this.btnYes2.active = false;


    }

    @property(cc.Label)
    extra: cc.Label = null;
    playerExtra: number = 1;

    btnNextClick(){
        this.playerExtra += 1;
        this.extra.string = (this.playerExtra.toString()) + "";
    }
    btnPreClick(){
        if(this.playerExtra > 1){
            this.playerExtra -= 1 ;
        this.extra.string = (this.playerExtra.toString()) + "";
        }
        else{
            console.log("Ban nhap sai")
        }  
    }

    @property(cc.Label)
    extra2: cc.Label = null;

    btnClickDoiNgay(){
        this.extra2.string =( "XÁC NHẬN ĐỔI "+this.playerExtra*200+" ĐIỂM VIETTEL++ LẤY " + this.playerExtra.toString()+ " MÃ DỰ THƯỞNG")
        // this.label_ma1.string = "XÁC NHẬN ĐỔI  ĐIỂM VIETTEL++ LẤY 50 MÃ DỰ THƯỞNG" 
        console.log("MaDoiNgay")
    } 
    @property(cc.Node)
    btnYes1: cc.Node = null;

    @property(cc.Node)
    btnYes2: cc.Node = null;

    
    
    btn_close(){
        this.btnYes2.active = false;
        console.log("btn_close")

    }

    
    btn_Yes(){
        var a = Math.floor(Math.random() * 2);
        if (a == 0) {
            this.btnYes2.active = true;
            console.log("btn_close1")
            Rotate.instance.addRotate(1);
        }
        else{
            this.btnYes1.active = true;
            console.log("btn_close2")
            
        }
        return ;
    }
  
}

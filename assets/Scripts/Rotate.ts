// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Rotate extends cc.Component {
    public static instance: Rotate; //Khai báo
    //Thêm node lượt quay
    @property(cc.Label)
    extra: cc.Label = null;
    //Popup 
    @property(cc.Node)
    popup1: cc.Node = null;
    @property(cc.Node)
    popup2: cc.Node = null;
    @property(cc.Node)
    popup3: cc.Node = null;
    @property(cc.Node)
    popup4: cc.Node = null;
    @property(cc.Node)
    popup5: cc.Node = null;
    @property(cc.Node)
    popupTheLe: cc.Node = null;
    @property(cc.Node)
    popupDoiLuotQuay: cc.Node = null;
    @property(cc.Node)
    popupTraCuu: cc.Node = null;
    @property(cc.Node)
    btn_Yes2: cc.Node = null;

    @property(cc.Label)
    label_pupop1: cc.Label = null;
    @property(cc.Label)
    label_pupop3: cc.Label = null;
    @property(cc.Label)
    label_pupop4: cc.Label = null;
    @property(cc.Label)
    label_pupop5: cc.Label = null;
    btn_yes2() {
        this.btn_Yes2.active = false;
    }

    onLoad() {
        Rotate.instance = this;
    }

    //Hàm thêm lượt quay
    playerRotate: number = 500;

    addRotate(plusTurn) {
        Rotate.instance.playerRotate += plusTurn;
        Rotate.instance.extra.string = (Rotate.instance.playerRotate.toString()) + " lượt quay";
    }
    endRotate() {
        this.popup2.active = true;
    }
    //Hàm đóng POPUP
    Close() {
        this.popup1.active = false;
        this.popup2.active = false;
        this.popup3.active = false;
        this.popup4.active = false;

        this.popup5.active = false;
        this.popupTheLe.active = false;
        this.popupDoiLuotQuay.active = false;
        this.popupTraCuu.active = false;
    }

    TheLe() {
        this.popupTheLe.active = true;
    }
    DoiLuotQuay() {
        this.popupDoiLuotQuay.active = true;
    }
    TraCuu() {
        this.popupTraCuu.active = true;
        console.log("TraCuu")
    }
    //Hàm đổi text
    onButtonClick(id) {
        // POPUP 3 -- ID = 0 -- ID = 10 -- ID = 2
        console.log('this.label_pupop3: ' + this.label_pupop3)
        if (id == 0) {
            this.label_pupop3.string = " Chúc mừng bạn đã nhận được 1 voucher30% phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick")
        }
        else if (id == 10) {
            this.label_pupop3.string = "Chúc mừng bạn đã nhận được 100 phút gọi free phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        else if (id == 2) {
            this.label_pupop3.string = "Chúc mừng bạn đã nhận được 1 voucher voso 30k phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        // POPUP 1 -- ID = 1 -- ID = 8 -- ID = 3
        else if (id == 1) {
            this.label_pupop1.string = "Chúc mừng bạn đã nhận được 1 điểm Viettel++ phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        else if (id == 8) {
            this.label_pupop1.string = "Chúc mừng bạn đã nhận được 1 voucher 50K phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        else if (id == 3) {
            this.label_pupop1.string = "Chúc mừng bạn đã nhận được 1 điểm Viettel++ phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        // POPUP 4 -- ID = 4 -- ID = 7 -- ID = 9
        else if (id == 4) {
            this.label_pupop4.string = "Chúc mừng bạn đã nhận được 1 Voucher 20k phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }

        else if (id == 7) {
            this.label_pupop4.string = "Chúc mừng bạn đã nhận được Data 4G free 2GB phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }

        else if (id == 9) {
            this.label_pupop4.string = "Chúc mừng bạn đã nhận được 1 điểm Viettel++ phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        // POPUP 5 -- ID = 5 -- ID = 6 -- ID = 11
        else if (id == 5) {
            this.label_pupop5.string = "Chúc mừng bạn đã nhận được free 1000 SMS  phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        else if (id == 6) {
            this.label_pupop5.string = "Chúc mừng bạn đã nhận được 1 Voucher30k phần thưởng sẽ được thêm vào giỏ quà"
            console.log("onclick2")
        }
        else if (id == 11) {
            this.label_pupop5.string = "Chúc bạn may mắn lần sau"
            console.log("onclick2")
        }
    }
    //Hàm tính toán vòng quay
    anpla = 0;
    deltaRotate(id, callback) {


        var delta = 360 / 12; //30
        var angle = 360 - (delta / 2)/*15*/ - (id * delta);

        var realAngle = this.node.rotation + this.anpla + angle + 360 * 5;

        cc.tween(this.node)
            .to(5, { rotation: realAngle }, { easing: 'quartInOut' })
            .call(
                callback  //Hàm gọi
            )
            .start();        
        this.anpla = 360 - angle;
    }
    Run(id,popup){
        console.log("Run")

        console.log("id: " + id);
                this.deltaRotate(id, function () {
                    setTimeout(() => {
                        this.popup.active = true;
                    }, 500);
                })
    }
    kiemtra: boolean = false;
    // khóa nút
    Retain() {
        console.log("kiemtra : " + this.kiemtra);
        if (this.kiemtra == false) {            
            console.log("Error123")
            this.kiemtra = true;
            console.log("true1" + this.kiemtra);
            this.Rotate();
        }
        else {
            console.log("Error")
        }
    }
    //Hàm Quay  
    Rotate() {
        if (Rotate.instance.playerRotate > 0) {
            Rotate.instance.addRotate(-1)
            var param = this
            var id: number = 0;
            var id = Math.floor(Math.random() * 12);
            //Lệnh Quay
            // POPUP 1
            if (id == 1 || id == 8 || id == 3) {
                this.Run(id,this.popup1);
                this.onButtonClick(id);
            }
            // POPUP 4
            else if (id == 4 || id == 7 || id == 9) {

                this.Run(id,this.popup4);
                this.onButtonClick(id);
            }
            // POPUP 3
            else if (id == 0 || id == 10 || id == 2) {

                this.Run(id,this.popup3);
                this.onButtonClick(id);
            }
            // POPUP 5
            else if (id == 5 || id == 6 || id == 11) {

                this.Run(id,this.popup5);
                this.onButtonClick(id);
            }
        }
        else {
            this.endRotate();
            console.log("Hết Lượt Quay ");
        }



    }


}




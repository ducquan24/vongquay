// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Rotate from "./Rotate";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
//Phần chạy hiệu ứng lên xuống
    // start(){
    //     cc.tween(this.node)
    //     .to(0.2, { scale: 1 }, { easing: "quandInOut" })
    //     .call(() => {
    //         // this.node.active = true;
    //     })
    //     .start()
    // }
    onEnable()//Bắt đầu khi chạy 
    {
        this.node.setScale(0,0);
        cc.tween(this.node)
        .to(0.2, { scale: 1 }, { easing: "quandInOut" })
        .call(() => {
            this.node.active = true;
        })
        .start()
    }

    Close() //chạy như start
    {
        cc.tween(this.node)
            .to(0.3, { scale: 0.1 }, { easing: "quandInOut" })
            .call(() => {
                this.node.active = false;
                Rotate.instance.kiemtra= false;
            })
            .start()
    }
}


// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BoxController extends cc.Component {

    @property(cc.Label)
    sttBox: cc.Label = null;

    @property(cc.Label)
    nameBox: cc.Label = null;

    @property(cc.Label)
    timeBox: cc.Label = null;

    ChangeContent(_stt, _name, _time)
    {
        this.sttBox.string = _stt;
        this.nameBox.string = _name;
        this.timeBox.string = _time;
    }
}

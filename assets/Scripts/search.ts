// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    historyContent : cc.Node = null;// gọi 1 nút để thêm vào phần lable

    @property(cc.Node)
    codeContent : cc.Node = null;//gọi 1 nút để thềm vào phần lable

    @property(cc.Button)
    btnCodeSubmit : cc.Button = null; //Btn cần đổi ảnh

    @property(cc.SpriteFrame)
    spriteTrue : cc.SpriteFrame = null;// Ảnh muốn đổi

    @property(cc.SpriteFrame)
    spriteFalse : cc.SpriteFrame = null;//Ảnh muốn đổi

    @property(cc.Button)
    btnHistorySubmit : cc.Button = null;//Btn cần đổi ảnh

   
    
    onEnable()
    {
        this.btnCode();
    }
//click đổi poppup
    ClickCodeContent()
        {
            this.historyContent.active = true;
            this.codeContent.active = false;
        }
    ClickHistoryContent()
        {
            this.historyContent.active = false;
            this.codeContent.active = true;
        }
//Click đổi màu button

    btnCode(){
        this.btnCodeSubmit.hoverSprite = this.spriteTrue;
        this.btnCodeSubmit.normalSprite = this.spriteTrue;
        this.btnCodeSubmit.pressedSprite = this.spriteTrue;
        this.btnCodeSubmit.disabledSprite = this.spriteTrue;

        this.btnHistorySubmit.hoverSprite = this.spriteFalse;
        this.btnHistorySubmit.normalSprite = this.spriteFalse;
        this.btnHistorySubmit.pressedSprite = this.spriteFalse;
        this.btnHistorySubmit.disabledSprite = this.spriteFalse;

        this.ClickCodeContent();
    }

    btnHistory(){
        this.btnHistorySubmit.hoverSprite = this.spriteTrue;
        this.btnHistorySubmit.normalSprite = this.spriteTrue;
        this.btnHistorySubmit.pressedSprite = this.spriteTrue;
        this.btnHistorySubmit.disabledSprite = this.spriteTrue;

        this.btnCodeSubmit.hoverSprite = this.spriteFalse;
        this.btnCodeSubmit.normalSprite = this.spriteFalse;
        this.btnCodeSubmit.pressedSprite = this.spriteFalse;
        this.btnCodeSubmit.disabledSprite = this.spriteFalse;

        this.ClickHistoryContent();
    }
}
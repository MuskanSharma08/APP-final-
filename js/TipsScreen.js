class TipsScreen {
    constructor() {
       this.tips = createImg('tips.png');
       this.back = createButton('BACK');
    }
    display() {
        this.tips.position(70, displayHeight / 2 - 370);
        this.tips.size(displayWidth- 170, displayHeight);
        this.back.show();
        this.back.position(100, 30);
        
        this.back.mousePressed(() => {
            c = 1
            homescreen = new HomeScreen()
            homescreen.display()
            this.tips.hide();
            this.back.hide();
            
        })
    }
}
class HomeScreen {
    constructor() {
        this.title = createElement('h1', 'HEALTH MATTERS');
        this.bmi = createButton('BMI');
        this.track = createButton('TRACK FOOD');
        this.tips = createButton('HEALTH TIPS');
    }
    display() {
        this.title.position(displayWidth / 2 - 170, 20);
        this.title.style('background-color', 'white')
        this.bmi.position(displayWidth / 2 - 270, 120);
        this.bmi.size(150, 70);
        this.bmi.style('background-color', 'yellow');
        this.bmi.style('font-size', '25px')
        this.bmi.style('border-radius', '100px')
        this.track.position(displayWidth / 2 + 100, 120);
        this.track.size(150, 70);
        this.track.style('background-color', 'yellow');
        this.track.style('font-size', '25px')
        this.track.style('border-radius', '100px');
        this.tips.position(displayWidth / 2 - 80, 220);
        this.tips.size(150, 70);
        this.tips.style('background-color', 'yellow');
        this.tips.style('font-size', '25px')
        this.tips.style('border-radius', '100px');

        this.bmi.mousePressed(() => {
            c = 3;
            this.title.hide();
            this.bmi.hide();
            this.track.hide();
            this.tips.hide();
            bmiscreen = new BmiScreen();
            bmiscreen.display();
        })
        this.track.mousePressed(() => {
            c = 2;
            this.title.hide();
            this.bmi.hide();
            this.track.hide();
            this.tips.hide();
            trackscreen = new TrackScreen();
            trackscreen.display();
        })
        this.tips.mousePressed(() => {
            this.title.hide();
            this.bmi.hide();
            this.track.hide();
            this.tips.hide();
            tipscreen = new TipsScreen();
            tipscreen.display();
        })
    }

}
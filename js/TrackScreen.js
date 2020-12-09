class TrackScreen{
    constructor() {
this.back = createButton('BACK');
this.submit = createButton('SUBMIT');;
this.submit.position(displayWidth/2 +200, displayHeight/2 -200);
this.submit.style('border-radius', '100px');

this.beans = createCheckbox('Beans', false);
this.cabbage = createCheckbox('Cabbage', false);
this.chappati = createCheckbox('Chappati', false);
this.chicken = createCheckbox('Chicken', false);
this.egg = createCheckbox('Egg', false);
this.dal = createCheckbox('Dal', false);
this.paneer = createCheckbox('Paneer', false);
this.rice = createCheckbox('Rice', false);

this.beansInfo = createElement('h1');
this.beansInfo.hide();
this.cabbageInfo = createElement('h1');
this.cabbageInfo.hide();
this.chappatiInfo = createElement('h1');
this.chappatiInfo.hide();
this.chickenInfo = createElement('h1');
this.chickenInfo.hide();
this.eggInfo = createElement('h1');
this.eggInfo.hide();
this.dalInfo = createElement('h1');
this.dalInfo.hide();
this.paneerInfo = createElement('h1');
this.paneerInfo.hide();
this.riceInfo = createElement('h1');
this.riceInfo.hide();

    }
    display() {
        this.beans.position(100, 100);
        this.cabbage.position(100, 200);
        this.chappati.position(100, 300);
        this.chicken.position(100, 400);
        this.egg.position(200, 100);
        this.dal.position(200, 200);
        this.paneer.position(200, 300);
        this.rice.position(200, 400);  
        this.back.show();
        this.back.position(100, 30);
        
        this.submit.mousePressed(() => {
            if (this.beans.checked()) {
                this.beansInfo.show();
                this.beansInfo.html('BEAN<br>Protein: 21g<br>Fat: 1.2g<br>Calories: 347<br> Fiber: 16g<br> Carbos: 63g');
                this.beansInfo.position(displayWidth / 2- 600, displayHeight / 2 - 300);
            }
            if (this.cabbage.checked()) {
                this.cabbageInfo.show();
                this.cabbageInfo.html('CABBAGE<br>Protein: 1.3g<br>Fat: 0.1g<br>Calories: 25<br> Fiber: 2.5g<br> Carbos: 6g');
                this.cabbageInfo.position(displayWidth / 2-300, displayHeight / 2 - 300);
            }
            if (this.chappati.checked()) {
                this.chappatiInfo.show();
                this.chappatiInfo.html('CHAPPATI<br>Protein: 3g<br>Fat: 0.4g<br>Calories: 70<br> Fiber: 0.4g<br> Carbos: 15g');
                this.chappatiInfo.position(displayWidth / 2- 30, displayHeight / 2-300);
            }
            if(this.chicken.checked()){
                this.chickenInfo.show();
                this.chickenInfo.html('CHICKEN<br>Protein: 27g<br>Fat: 14g<br>Calories: 239<br> Fiber: 0g<br> Carbos: 0g');
                this.chickenInfo.position(displayWidth/2+ 300, displayHeight/2-300);
            }
            if(this.egg.checked()){
                this.eggInfo.show();
                this.eggInfo.html('EGG<br>Protein: 13g<br>Fat: 11g<br>Calories: 155<br> Fiber: 0g<br> Carbos: 1.1g');
                this.eggInfo.position(displayWidth/2 - 600, displayHeight/2+50);
            }
            if(this.dal.checked()){
                this.dalInfo.show();
                this.dalInfo.html('DAL<br>Protein: 10g<br>Fat: 3g<br>Calories: 100<br> Fiber: 5g<br> Carbos: 26g');
                this.dalInfo.position(displayWidth/2-300, displayHeight/2+50);
            }
            if(this.paneer.checked()){
                this.paneerInfo.show();
                this.paneerInfo.html('PANEER<br>Protein: 19.1g<br>Fat: 26.9g<br>Calories: 242<br> Fiber: 0g<br> Carbos: 6.1g');
                this.paneerInfo.position(displayWidth/2-30, displayHeight/2+ 50);
            }
            if(this.rice.checked()){
                this.riceInfo.show();
                this.riceInfo.html('RICE<br>Protein: 2.7g<br>Fat: 0.3g<br>Calories: 130<br> Fiber: 0.4g<br> Carbos: 28g');
                this.riceInfo.position(displayWidth/2+ 300, displayHeight/2 +50);
            }
            this.beans.hide();
            this.cabbage.hide();
            this.chappati.hide();
            this.chicken.hide();
            this.egg.hide();
            this.dal.hide();
            this.paneer.hide();
            this.rice.hide();
            this.submit.hide();
        })
        this.back.mousePressed(() => {
            c = 1
            homescreen = new HomeScreen()
            homescreen.display()
            this.beans.hide();
            this.cabbage.hide();
            this.chappati.hide();
            this.chicken.hide();
            this.egg.hide();
            this.dal.hide();
            this.paneer.hide();
            this.rice.hide();
            this.submit.hide();
            this.back.hide();

            this.beansInfo.hide();
            this.cabbageInfo.hide();
            this.chappatiInfo.hide();
            this.chickenInfo.hide();
            this.eggInfo.hide();
            this.dalInfo.hide();
            this.paneerInfo.hide();
            this.riceInfo.hide();
            this.submit.hide();
            this.back.hide();
        })
    }
}
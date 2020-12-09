// class Form{
//     constructor(){
//     this.title = createElement('h1', 'HEALTH MATTERS');
//     this.bmi = createButton('BMI');
//     this.track = createButton('TRACK FOOD');
//     this.tips = createButton('HEALTH TIPS');
//     this.back = createButton('BACK');
//     this.back.hide();
//     this.weight = createInput('WEIGHT(kg)');
//     this.weight.hide();
//     this.height = createInput('HEIGHT(mtr)');
//     this.height.hide();
//     this.calculate = createButton('CALCULATE');
//     this.calculate.hide();
//     this.weightValue = null;
//     this.heightValue = null;
//     this.bmiValue = null;
//     }
// display(){
//     this.title.position(displayWidth/2- 170, 50);
//     this.bmi.position(displayWidth/2- 270, 150);
//     this.bmi.size(150, 70);
//     this.bmi.style('background-color','yellow');
//     this.bmi.style('font-size', '25px')
//     this.bmi.style('border-radius', '100px')
//     this.track.position(displayWidth/2 + 100, 150);
//     this.track.size(150, 70);
//     this.track.style('background-color','yellow');
//     this.track.style('font-size', '25px')
//     this.track.style('border-radius', '100px');
//     this.tips.position(displayWidth/2-80, 250);
//     this.tips.size(150, 70);
//     this.tips.style('background-color','yellow');
//     this.tips.style('font-size', '25px')
//     this.tips.style('border-radius', '100px');

//     this.weight.position(displayWidth/2- 270, 150);
//     this.weight.style('font-size', '26px')
//     this.height.position(displayWidth/2- 270, 250);
//     this.height.style('font-size', '26px');
//     this.calculate.position(displayWidth/2- 150, 350);
//     this.calculate.size(300, 70)
//     this.calculate.style('font-size', '26px')
//     this.calculate.style('border-top-right-radius', '50px');
//     this.calculate.style('border-bottom-left-radius', '50px');

//     this.bmi.mousePressed(()=>{
//         this.title.hide();
//         this.bmi.hide();
//         this.track.hide();
//         this.tips.hide();
//         this.weight.show();
//         this.height.show();
//         this.calculate.show();
//         })
//     this.calculate.mousePressed(()=>{
//         this.weightValue = int( this.weight.value());
//         this.heightValue = int (this.height.value());
//         this.bmiValue = this.weightValue/(this.heightValue*this.heightValue);
//         this.bmi.hide();
//         this.track.hide();
//         this.tips.hide();
//         this.weight.hide();
//         this.height.hide();
//         this.calculate.hide();
//         console.log(this.bmiValue);
//         screen = "bmi"
//         bmi=createElement("h1",this.bmiValue);
//         bmi.position(200,200)
//        this.back.show()
//        this.back.position(300,300)
//     })
//     this.back.mousePressed(()=>{
//         this.title.show();
//         this.bmi.show();
//         this.track.show();
//         this.tips.show();
//         this.weight.hide();
//         this.height.hide();
//         this.calculate.hide();
//         bmi.hide()
//         this.back.hide();
//         })
        
// }
// }
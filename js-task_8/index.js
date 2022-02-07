//Объект 1

let Bulb  = function() {
	this.name = 'NoName';
	this.power = 0;
	this.lifetime = 0;
    this.rippleFactor = 0;
    this.getPrice = function() {
            
        if (confirm('Рассчитать счет за электроэнергию за использование  ' + this.name + '?')) {
            this.pricePerVt = +prompt('Введите цену электроэнергии за кВ/ч');
            this.Time = +prompt('Введите время использования электроэнергии, ч');

            this.operation();

        } else {
            this.pricePerVt = 0;
            this.Time = 0;
        };
    };
 
    this.operation = function () {
        this.result = this.pricePerVt * this.Time * this.power; 
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.pricePerVt == 0 || this.Time == undefined) {
            console.log('Вы не включили лампочку');
        } else {
            console.log('Вам необходимо заплатить за   ' + this.name + ' '  + this.result);
        }
    };
}

let luminBulb = new Bulb();
let commonBulb = new Bulb();
let svetodiodBulb = new Bulb();

luminBulb.name = 'Liminisent lamp';
commonBulb.name = 'Common lamp';
svetodiodBulb.name = 'Svetodiod lamp';

luminBulb.lifetime= 6; //года
commonBulb.lifetime = 1;
svetodiodBulb.lifetime = 20;

luminBulb.rippleFactor= 50 + '%';
commonBulb.rippleFactor = 20 + '%';
svetodiodBulb.rippleFactor = 5 + '%';

luminBulb.power= 7; //Вт
commonBulb.power = 20;
svetodiodBulb.power= 3;

luminBulb.getPrice();
commonBulb.getPrice();
svetodiodBulb.getPrice();

console.log(luminBulb);
console.log(commonBulb);
console.log(svetodiodBulb);


//Объект 2. Калькулятор


// let Calc = function() {
//     this.get = function(){
//        this.a = +prompt('Введите число a');
//        this.b = +prompt('Введите число b');
//        this.oper = prompt('Введите операцию:+,-,*,/');

//        this.operation();
//     };

//     this.operation = function() {
//         switch(this.oper) {
//             case '+': 
//                 this.result = this.a + this.b;
//             break;
//             case '-': 
//                 this.result = this.a - this.b;
//             break;
//             case '*': 
//                 this.result = this.a * this.b;
//             break;
//             case '/': 
//                 this.result = this.a / this.b;
//             break;
//             default: this.result = 0;
//         }
//         this.show();
//     };

//     this.show = function () {
//         alert(this.a + '  ' + this.oper +  '  ' + this.b   + ' = '  + this.result);
//     };
// };

// let calc = new Calc();
// calc.get();





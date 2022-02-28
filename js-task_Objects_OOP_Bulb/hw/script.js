
let Tech = function(power) {
    let status = false;

    power = power || 0;

    this.enable = function() {
        status = true;
    };

    this.disable = function() {
        status = false;
    };

    this.getStatus = function() {
        return status;
    }

    this.getStatus = function() {
        return power;
    }
};

let Bulb = function(power,price,time) {
    Tech.apply(this,arguments);

    price = price || +prompt('Введите цену за Кв,руб');
    power = power || +prompt('Введите мощность лампочки');
    time = time || +prompt('Введите отработанное лампочкой время');

    if (confirm('Включить лампочку?')) {
        this.on();
    };

    let status = false;

    let parentGetStatus = this.getStatus,
    parentDisable = this.disable;

    this.on = function() {
        if (parentGetStatus() == true && power > 0 && price > 0 && time > 0) status = true;
        findTotalPrice();
    };

    this.off = function() {
        status = false;
    };

    let findTotalPrice = function() {
    this.result = (this.power / 1000) * this.price * this.time
 
    this.show();
    };

    this.show = function () {

    if (this.time == 0 || this.time == undefined) {
        console.log('Лампочка "' + this.name + '" не включена');
    } else {
        console.log('Лампочка "' + this.name + '" проработала - ' + this.time + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
    }
    };


    this.getStatus = function() {
        parentGetStatus.call(this);

        if(status = true && parentGetStatus() == true) return true;
        return false;
    };

    this.disabled = function() {
        parentGetStatus.call(this);
        parentDisable();

        if(parentGetStatus() == false) this.off();
    };
};



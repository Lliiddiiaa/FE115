
function delivery(){
    let filedName = null;
    let fieldPhone = null;
    let fieldEmail = null;
    let fieldDAteCurrent = null;
    let fieldDistA = null;
    let fieldDistB = null;
    let fieldDateDeparture = null;
    let fieldDateDelivery = null;

    function showForm() {
        let deliveryMethod = ['Самолет', 'Такси', 'Частный водитель', 'Пеший курьер'];
        let destinations = ['Минск', 'Брест', 'Могилев', 'Гомель','Гродно', 'Витебск' ];
    
        let form = document.createElement('form');
        form.setAttribute('class', 'main_form');
    
        let fio = document.createElement('input',);
        fio.setAttribute('type','text');
        fio.setAttribute('class','inputs');
        fio.setAttribute('placeholder', 'ФИО');
        fio.setAttribute('name','fio');
        fio.required = 'true';
    
        let phone = document.createElement('input');
        phone.setAttribute('type', 'tel');
        phone.setAttribute('class','inputs');
        phone.setAttribute('placeholder', 'Телефон');
        phone.setAttribute('name','phone');
        phone.required = 'true';
    
        let mail = document.createElement('input');
        mail.setAttribute('type', 'email');
        mail.setAttribute('class','inputs');
        mail.setAttribute('placeholder', 'Почтовый адрес ');
        mail.setAttribute('name','mail');
        mail.required = 'true';
    
        let typeDelivery = document.createElement('select');
        typeDelivery.setAttribute('class','inputs');
        typeDelivery.setAttribute('name','typeDelivery');
        typeDelivery.required = 'true';
    
        let typeDeliveryOptions = createSelects(deliveryMethod);
        typeDeliveryOptions.map(option => {
            typeDelivery.append(option)
        })
    
        let now = document.createElement('input');
        now.setAttribute('type','datetime');
        now.disabled = true;
        now.setAttribute('class', 'inputs');
        now.setAttribute('name','now');
        let nowDay = new Date();
        now.value = `${nowDay.getFullYear()} / ${nowDay.getMonth() + 1} / ${nowDay.getDate()} , ${nowDay.getHours()} : ${nowDay.getMinutes()}`;
    
        let departure = document.createElement('select');
        departure.setAttribute('class','inputs');
        departure.setAttribute('name','departure');
        departure.required = 'true';
    
        let destination  = document.createElement('select');
        destination.setAttribute('class','inputs');
        destination.setAttribute('name','destination');
        destination.required = 'true';
    
        let optionDestination = createSelects(destinations);
        let optionDeparture = createSelects(destinations)
        optionDeparture.map(option => {
            departure.append(option);
        }) 
    
        optionDestination.map(option => {
            destination.append(option);
        }) 
    
        let dateDeparture = document.createElement('input');
        dateDeparture.setAttribute('type','date');
        dateDeparture.setAttribute('class', 'inputs');
        dateDeparture.setAttribute('name','dateDeparture');
        dateDeparture.required = 'true';
    
        let dateDelivery = document.createElement('input');
        dateDelivery.setAttribute('type','date');
        dateDelivery.setAttribute('class', 'inputs');
        dateDelivery.setAttribute('name','dateDelivery');
        dateDelivery.required = 'true';
    
        let btn = document.createElement('button');
        btn.setAttribute('type','submit');
        btn.setAttribute('class', 'btn-submit');
        btn.innerText = 'Рассчитать стоимость';
        form.addEventListener('submit', (e) => {
            formHandler()
        })
    
        form.append(fio,phone,mail,typeDelivery,now,departure,destination,dateDeparture,dateDelivery,btn);
        document.body.append(form);
    }
    
    function createSelects(data) {
        return data.map(elem => {
            let option = document.createElement('option');
            option.setAttribute(value,elem);
            return option;
        })
    }
    
    function formHandler(e) {
        e.preventDefault();
    }

    showForm();
}

window.addEventListener('DOMContentLoaded',delivery);

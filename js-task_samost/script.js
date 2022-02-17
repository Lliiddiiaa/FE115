delivery();

function delivery() {

    function showForm() {
        let div1 = document.createElement('div');
        div1.classList.add('page');

        document.body.appendChild(div1);

        let form1 = document.createElement('input');
        form1.setAttribute('type','text');
        form1.setAttribute('placeholder','Введите Фио');
        form1.classList.add('forms');

        let form2 = document.createElement('input');
        form2.setAttribute('type','tel');
        form2.setAttribute('placeholder','Введите телефон');
        form2.classList.add('forms');

        let form3 = document.createElement('input');
        form3.setAttribute('type','email');
        form3.setAttribute('placeholder','Введите элетронную почту');
        form3.classList.add('forms');

        div1.appendChild(form1);
        div1.appendChild(form2);
        div1.appendChild(form3);

        // let now = new Date();
        let form4 = document.createElement('input');
        form4.setAttribute('type','date');
        form4.setAttribute('placeholder','Выберите дату отправления');
        // form4.value = now;
        form4.classList.add('forms');

        div1.appendChild(form4);

        let form5 = document.createElement('input');
        form5.setAttribute('type','date');
        form5.setAttribute('placeholder','Выберите дату доставки');
        // form5.value = now;
        form5.classList.add('forms');

        div1.appendChild(form5);

        let formDeparture = document.createElement('form');
        formDeparture.setAttribute('action','formdata');
        formDeparture.setAttribute('method','post');
        formDeparture.setAttribute('name','Departure');
        formDeparture.classList.add('forms');

        div1.appendChild(formDeparture);

        let p1 = document.createElement('p');

        formDeparture.appendChild(p1);

        let selectDeparture = document.createElement('select');
        selectDeparture.setAttribute('name','list1');

        p1.appendChild(selectDeparture);

        let option1 = document.createElement('option');
        option1.innerHTML = 'Выберите точку отправления';
        selectDeparture.appendChild(option1);

        let option2 = document.createElement('option');
        option2.innerHTML = 'Минск';
        selectDeparture.appendChild(option2);

        let option3 = document.createElement('option');
        option3.innerHTML = 'Брест';
        selectDeparture.appendChild(option3);

        let option4 = document.createElement('option');
        option4.innerHTML = 'Гомель';
        selectDeparture.appendChild(option4);

        let p2 = document.createElement('p');

        formDeparture.appendChild(p2);

        let submit1 = document.createElement('input');
        submit1.setAttribute('type','submit');
        submit1.setAttribute('value','Отправить');

        p2.appendChild(submit1);



        let formDestination = document.createElement('form');
        formDestination.setAttribute('action','formdata');
        formDestination.setAttribute('method','post');
        formDestination.setAttribute('name','Destination');
        formDestination.classList.add('forms');

        div1.appendChild(formDestination);

        let pD1 = document.createElement('p');

        formDestination.appendChild(pD1);

        let selectDestination = document.createElement('select');
        selectDestination.setAttribute('name','list2');

        pD1.appendChild(selectDestination);

        let optionD1 = document.createElement('option');
        optionD1.innerHTML = 'Выберите точку назначения';
        selectDestination.appendChild(optionD1);

        let optionD2 = document.createElement('option');
        optionD2.innerHTML = 'Минск';
        selectDestination.appendChild(optionD2);

        let optionD3 = document.createElement('option');
        optionD3.innerHTML = 'Брест';
        selectDestination.appendChild(optionD3);

        let optionD4 = document.createElement('option');
        optionD4.innerHTML = 'Гомель';
        selectDestination.appendChild(optionD4);

        let pD2 = document.createElement('p');

        formDestination.appendChild(pD2);

        let submitD1 = document.createElement('input');
        submitD1.setAttribute('type','submit');
        submitD1.setAttribute('value','Отправить');

        pD2.appendChild(submitD1);


        let formKindDelivery = document.createElement('form');
        formKindDelivery.setAttribute('action','formdata');
        formKindDelivery.setAttribute('method','post');
        formKindDelivery.setAttribute('name','Delivery');
        formKindDelivery.classList.add('forms');

        div1.appendChild(formKindDelivery);

        let pDel1 = document.createElement('p');

        formKindDelivery.appendChild(pDel1);

        let selectDelivery = document.createElement('select');
        selectDelivery.setAttribute('name','list3');

        pDel1.appendChild(selectDelivery);

        let optionDel1 = document.createElement('option');
        optionDel1.innerHTML = 'Выберите способ доставки';
        selectDelivery.appendChild(optionDel1);

        let optionDel2 = document.createElement('option');
        optionDel2.innerHTML = 'Самовывоз';
        selectDelivery.appendChild(optionDel2);

        let optionDel3 = document.createElement('option');
        optionDel3.innerHTML = 'Курьером';
        selectDelivery.appendChild(optionDel3);

        let optionDel4 = document.createElement('option');
        optionDel4.innerHTML = 'Почта Беларуси';
        selectDelivery.appendChild(optionDel4);

        let pDel2 = document.createElement('p');

        formKindDelivery.appendChild(pDel2);

        let submitDel1 = document.createElement('input');
        submitDel1.setAttribute('type','submit');
        submitDel1.setAttribute('value','Отправить');

        pDel2.appendChild(submitDel1);
    }

    showForm();
}
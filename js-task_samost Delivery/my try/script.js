delivery();

function delivery() {

    showForm();

    function showForm() {
        let div1 = document.createElement('div');
        div1.classList.add('page');

        document.body.appendChild(div1);

        let form1 = document.createElement('input');
        form1.setAttribute('type','text');
        form1.setAttribute('placeholder','Введите Фио');
        form1.setAttribute('id','fio');
        form1.classList.add('forms');


        let form2 = document.createElement('input');
        form2.setAttribute('type','tel');
        form2.setAttribute('placeholder','Введите телефон');
        form2.setAttribute('id','phone');
        form2.classList.add('forms');

        let form3 = document.createElement('input');
        form3.setAttribute('type','email');
        form3.setAttribute('placeholder','Введите элетронную почту');
        form3.setAttribute('id','email');
        form3.setAttribute('value',' ');
        form3.classList.add('forms');

        let formToday = document.createElement('input');
        formToday.setAttribute('type','date');
        formToday.setAttribute('name','Today');
        formToday.setAttribute('id','todayDate');
        formToday.setAttribute('readonly', '');

        formToday.setAttribute('value', Date());
        

        div1.appendChild(form1);
        div1.appendChild(form2);
        div1.appendChild(form3);
        div1.appendChild(formToday);
        
        //--------------------------------------форма даты отправления
        
        let wrapper_form4 = document.createElement('div');
        wrapper_form4.classList.add('wrapperDate');
        div1.appendChild(wrapper_form4);

        let pForm4 = document.createElement('p');
        pForm4.innerHTML = 'Выберите дату отправления';

        wrapper_form4.appendChild(pForm4);

        
        let form4 = document.createElement('input');
        form4.setAttribute('type','date');
        form4.setAttribute('id','dateDeparture');
        form4.classList.add('forms');

        wrapper_form4.appendChild(form4);

        //--------------------------------------конец форма даты отправления

        //--------------------------------------форма даты получения

        let wrapper_form5 = document.createElement('div');
        wrapper_form5.classList.add('wrapperDate');
        div1.appendChild(wrapper_form5);

        let pForm5 = document.createElement('p');
        pForm5.innerHTML = 'Выберите дату получения';

        wrapper_form5.appendChild(pForm5);
        
        let form5 = document.createElement('input');
        form5.setAttribute('type','date');
        form5.classList.add('forms');
        form5.setAttribute('id','dateDelivery');

        wrapper_form5.appendChild(form5);

        //-------------------------------------- конец форма даты получения

       //--------------------------------------форма точки отправления

        let formDeparture = document.createElement('form');
        formDeparture.setAttribute('action','formdata');
        formDeparture.setAttribute('method','post');
        formDeparture.setAttribute('name','Departure');
        formDeparture.setAttribute('id','city_1');
        formDeparture.classList.add('forms');
        // formDeparture.addEventListener('onchange',function changeSel(el) {
        //     let v, n;
        //     n=el.selectedIndex;
        //     v=el[n].text;
        //     document.getElementById("city_1").value=v;
        //     console.log(v);
        // });

        div1.appendChild(formDeparture);

        let p1 = document.createElement('p');

        formDeparture.appendChild(p1);

        let selectDeparture = document.createElement('select');
        selectDeparture.setAttribute('name','list1');
        selectDeparture.setAttribute('id','select1');
        p1.innerHTML = 'Выберите точку отправления  ';

        p1.appendChild(selectDeparture);

        let p2 = document.createElement('p');

        formDeparture.appendChild(p2);

        let list1 = document.getElementById('select1'),
        arr = ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилев'],
        item = document.createElement('option');

        for (var i = 0; i < arr.length; i++) {
            item.innerHTML = arr[i];
            item.setAttribute('value', arr[i]);
            list1.appendChild(item.cloneNode(true));
        }

        
        function findOption () {
            document.addEventListener('DOMContentLoaded', () => {
                    if (!!list1) {
                    list1.addEventListener("change", e => {
                    const DistA = e.target.value;
                    return DistA;
                    });
                    }
                }); 
        }
        
        

        //--------------------------------------конец формы точка отправления

        //--------------------------------------форма точки получения

        let formDestination = document.createElement('form');
        formDestination.setAttribute('action','formdata');
        formDestination.setAttribute('method','post');
        formDestination.setAttribute('name','Destination');
        formDeparture.setAttribute('id','city_2');
        formDestination.classList.add('forms');

        div1.appendChild(formDestination);

        let pD1 = document.createElement('p');
        pD1.innerHTML = 'Выберите точку получения ';

        formDestination.appendChild(pD1);

        let selectDestination = document.createElement('select');
        selectDestination.setAttribute('name','list2');
        selectDestination.setAttribute('id','select2');

        pD1.appendChild(selectDestination);


        let pD2 = document.createElement('p');

        formDestination.appendChild(pD2);

        let list2 = document.getElementById('select2'),
        arr2 = ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилев'],
        item2 = document.createElement('option');

        for (var i = 0; i < arr2.length; i++) {
            item2.innerHTML = arr2[i];
            item2.setAttribute('value', arr2[i]);
            list2.appendChild(item2.cloneNode(true));
        }

        //--------------------------------------конец формы точки получения


        //--------------------------------------форма выбора типа доставки 


        let formKindDelivery = document.createElement('form');
        formKindDelivery.setAttribute('action','formdata');
        formKindDelivery.setAttribute('method','post');
        formKindDelivery.setAttribute('name','Delivery');
        formKindDelivery.setAttribute('id','KindDelivery');
        formKindDelivery.classList.add('forms');

        div1.appendChild(formKindDelivery);

        let pDel1 = document.createElement('p');

        formKindDelivery.appendChild(pDel1);

        let selectDelivery = document.createElement('select');
        selectDelivery.setAttribute('name','select_3');
        selectDelivery.setAttribute('id','select3');

        pDel1.appendChild(selectDelivery);


        let pDel2 = document.createElement('p');

        formKindDelivery.appendChild(pDel2);

        let list3 = document.getElementById('select3'),
        deliveryMethods = ['самолет', 'водитель', 'такси', 'пеший курьер'],
        item3 = document.createElement('option');
        

        for (var i = 0; i < deliveryMethods.length; i++) {
            item3.innerHTML = deliveryMethods[i];
            item3.setAttribute('value', deliveryMethods[i]);
            list3.appendChild(item3.cloneNode(true));
        }

        //--------------------------------------конец способ доставки

        let buttonCalc = document.createElement('button');
        buttonCalc.classList.add('button');
        buttonCalc.innerHTML = 'Рассчитать стоимость';
        // buttonCalc.setAttribute('onclick','sendInfo()');

        div1.appendChild(buttonCalc);

        buttonCalc.addEventListener('click',function sendInfo() {

            let fieldName = document.getElementById('fio').value;
            console.log(fieldName);

            let fieldPhone = document.getElementById('phone').value;
            console.log(fieldPhone);

            let fieldEmail = document.getElementById('email').value;
            console.log(fieldEmail);

            let fieldDateDeparture = new Date(document.getElementById('dateDeparture').value);
            console.log(fieldDateDeparture);

            let fieldDateDelivery = new Date(document.getElementById('dateDelivery').value);
            console.log(fieldDateDelivery);

            let fieldDistA = findOption();
            console.log(fieldDistA);

            // let fieldDistB = document.getElementById('city_2').value;
            // console.log(fieldDistB);

            // let fieldKindDelivery = document.getElementById('KindDelivery').value;
            // console.log(fieldKindDelivery);

            calculation();

        } );
    }

    function calculation() {

        const distances = [
            {
                a: 'Минск',
                b: 'Брест',
                d: 328,
            },
            {
                a: 'Минск',
                b: 'Витебск',
                d: 222,
            },
            {
                a: 'Минск',
                b: 'Гомель',
                d: 282,
            },
            {
                a: 'Минск',
                b: 'Гродно',
                d: 276,
            },
            {
                a: 'Минск',
                b: 'Могилев',
                d: 181,
            },
            {
                a: 'Брест',
                b: 'Минск',
                d: 328,
            },
            {
                a: 'Брест',
                b: 'Витебск',
                d: 550,
            },
            {
                a: 'Брест',
                b: 'Гомель',
                d: 500,
            },
            {
                a: 'Брест',
                b: 'Гродно',
                d: 177,
            },
            {
                a: 'Брест',
                b: 'Могилев',
                d: 487,
            },
            {
                a: 'Витебск',
                b: 'Минск',
                d: 222,
            },
            {
                a: 'Витебск',
                b: 'Брест',
                d: 550,
            },
            {
                a: 'Витебск',
                b: 'Гомель',
                d: 311,
            },
            {
                a: 'Витебск',
                b: 'Гродно',
                d: 524,
            },
            {
                a: 'Витебск',
                b: 'Могилев',
                d: 143,
            },
            {
                a: 'Гомель',
                b: 'Брест',
                d: 500,
            },
            {
                a: 'Гомель',
                b: 'Витебск',
                d: 311,
            },
            {
                a: 'Гомель',
                b: 'Минск',
                d: 282,
            },
            {
                a: 'Гомель',
                b: 'Гродно',
                d: 500,
            },
            {
                a: 'Гомель',
                b: 'Могилев',
                d: 169,
            },
            {
                a: 'Гродно',
                b: 'Брест',
                d: 177,
            },
            {
                a: 'Гродно',
                b: 'Витебск',
                d: 620,
            },
            {
                a: 'Гродно',
                b: 'Гомель',
                d: 500,
            },
            {
                a: 'Гродно',
                b: 'Минск',
                d: 276,
            },
            {
                a: 'Гродно',
                b: 'Могилев',
                d: 483,
            },
            {
                a: 'Могилев',
                b: 'Брест',
                d: 487,
            },
            {
                a: 'Могилев',
                b: 'Витебск',
                d: 143,
            },
            {
                a: 'Могилев',
                b: 'Гомель',
                d: 169,
            },
            {
                a: 'Могилев',
                b: 'Гродно',
                d: 483,
            },
            {
                a: 'Могилев',
                b: 'Минск',
                d: 181,
            },
        ]

        const prices = [
            {
                method: 'самолет',
                price: 10,
            },
            {
                method: 'водитель',
                price: 15,
            },
            {
                method: 'такси',
                price: 30,
            },
            {
                method: 'пеший курьер',
                price: 40,
            },
        ]

        showCalculation();
    }

    function showCalculation() {

        let divShow = document.createElement('div');
        divShow.classList.add('showCalc');

        document.body.appendChild(divShow);

        let pShow = document.createElement('p');
        pShow.innerHTML = `Дата расчета  ;
        Способ доставки ;
        Путь доставки 
        Стоимость, BYN 
        Информация о заказчике: 
        ФИО: ${fieldName};
        Телефон: ${fieldPhone};
        Почта: ${fieldEmail} ;`

        divShow.appendChild(pShow);

    }
}
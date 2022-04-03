function Main() {

   //_____________________18.2_______________________________
    // let hash;
    let elem = document.createElement('div');   //18.3
    elem.classList.add('main_component');
    // elem.innerHTML = `
    //     <h1>Home</h1>
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolorem, sint eveniet assumenda facilis iusto laboriosam. Ipsum, omnis, esse doloribus illum sint incidunt accusamus corporis illo sed, dicta iusto nulla?</p>
    // `

    const routing = () => { //19.1
        let hash = location.hash.slice(1); 
        if(!hash) hash = 'home'; //20.4
        import (`./${hash}.js`)
        .then(module => {
            elem.innerHTML = ''; 
            elem.append(module.default);
        });
    }

    window.addEventListener('hashchange', routing);

    // window.addEventListener('hashchange', () => {
    //     let hash = location.hash.slice(1); //удаляем первый символ

    //     import (`./${hash}.js`)
    //     .then(module => {
    //         // console.log(module); //проверяем что получаем
    //         elem.innerHTML = ''; // 18.5 перед добавлением очищаем
    //         elem.append(module.default);//18.4 отображаются все и не удаляются
    //      })
    // })

    
    //_______________________________________________________

    window.addEventListener('load', e => { //20
        const a = document.querySelectorAll('a[href="\"]');
        // console.log(a);
        a.forEach( a => {
            a.addEventListener('click', e => {
                e.preventDefault(); //отменяем дефолтный переход по ссылкам
                // console.log(location);//20.4
                location.hash = ''; 
                // console.log(location);
                // window.history.pushState('','','/');
                routing(); //роутинг после клика на ссылку
            })
        })
        routing(); //роутинг после загрузки дом дерева
    });

    this.init = () =>{ 
        return elem
    }

}

export default new Main().init() 

//18.1 - роутинг
//18.2 динамический импорт
//18.5 -  не работает Home, проблема в динамическом импорте из-за пустого хеша. Оставляем обартный слеш с перезагрузкой 

//19 выносим функцию hashchange отдельно - роутинг

//20 делаем, чтобы работало при переходе на главную страницу и при перезагрузке 37 строка

//load - событие которое запускается при загрузке страницы

//20.1 - получится собрать ссылки, хотя они не отрисованы, потому что header отрисуется раньше, чем main

//20.2 через цикл перебираем ссылки и вешаем события

//20.3 объект history window.history.pushState(передаем дата(объект), тайтл (строка) и url) - не работает

//20.4 при переходе на главную остается hash

// функция на load чинит адрес, чтобы после перезагрузки отрисовывало home и адрес был на home

//21 - каталог 
function Main() {

   //_____________________18.2_______________________________
    // let hash;
    let elem = document.createElement('div');   //18.3
    elem.classList.add('main_component');
    elem.innerHTML = `
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolorem, sint eveniet assumenda facilis iusto laboriosam. Ipsum, omnis, esse doloribus illum sint incidunt accusamus corporis illo sed, dicta iusto nulla?</p>
    `

    const routing = () => { //19.1
        let hash = location.hash.slice(1); 
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


    this.init = () =>{ 
        return elem
    }

}

export default new Main().init() 

//18.1 - роутинг
//18.2 динамический импорт
//18.5 -  не работает Home, проблема в динамическом импорте из-за пустого хеша. Оставляем обартный слеш с перезагрузкой 

//19 выносим функцию hashchange отдельно - роутинг
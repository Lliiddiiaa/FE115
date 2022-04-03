import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {

    const root = document.querySelector('#root'); //1 - перенесли root


    let elem = document.createElement('div');// 3 поменяли let на this ////////ошибка
    elem.innerHTML = ` 
    <h2> Header </h2>
    <h2> Main  </h2>
    <h2> Footer </h2>
    `; //2 перенесли elem для проверки //7 - This.elem.innerHTML
    
    // const render = () => { //9              
    const render = (...elems) => {   //15 переделаем рендер, создаем массив ...elems
        elems.forEach(elem => root.appendChild(elem))
        // root.append(Header);//4 THIS!     //14 - импортировали Header и вернули элемент 
    }

    const init = () => { //6 // this - 8    ////////ошибка
        // render(); 
        render(Header,Main,Footer); //15.прописываем элемент как параметр функции рендер
    }
}

//5 необходимо экспортировать в индекс

export default App();

//9 получили замыкание в рендере, переделываем рендер и инит в стрелочную функцию 
//10 создадим компоненты Header 
//16 создадим компоненты  Footer Main

/*render
7 строка - корневой элемент, куда мы все помещаем

в самой функции рендер(18) рест элемент через спред оператор получаем массив (...elems), через перебор в рут помещает каждый элемент)*/

// console.log(typeof App)
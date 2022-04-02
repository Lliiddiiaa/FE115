// const root = document.querySelector('#root');

// //проверка

// let elem = document.createElement('div');
// elem.innerHTML = `
// <h2> Header </h2>
// <h2> Main  </h2>
// <h2> Footer </h2>
// `

// root.append(elem);

//в компоненты выносятся функциональные и структурные элементы, которые потом можно использовать
//создаем app.js

import App from "./components/App.js";//5
// new App().init();//6 создаем инит, который будкт запускать 
// console.log(new App()); //8 
new App().init()
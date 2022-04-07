function Abaut(){
    this.title = 'About'
    const elem = document.createElement('div');
    elem.classList.add('about_component');
    elem.innerHTML = `
        <h1>About</h1>
        <p>Интернет-магазин всякой всячиныI

        В интернет-магазине, который территориально располагается в Беларуси, можно приобрести продукцию в розницу дешево.
        
        Главная цель нашего Интернет-магазина – сделать доступными покупки, чтобы каждый посетитель нашего сайта имел возможность приобрести продукцию на свой вкус. К нашим клиентам мы относимся с большим вниманием, к каждому из Вас мы подходим индивидуально. Всегда стараемся подстроиться под требования клиента, отсылая заказы в максимально короткие сроки. Доставляем покупки на следующий день</p>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Abaut();
let init = elem.init();
let title = elem.title;

export default init;
export {title};
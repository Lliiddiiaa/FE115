function Home(){
    this.title ='Home'
    const elem = document.createElement('div');
    elem.classList.add('home_component');
    elem.innerHTML = `
        <h1>Home</h1>
        <p>Добро пожаловать в интернет-магазин всякой всячины!
        Мы работаем по всей Беларуси и предлагаем покупателям качественную продукцию в розницу и оптом. Наша главная цель – сделать покупки доступными и безопасными, дать возможность каждому посетителю приобрести товар, соответствующий его вкусу и бюджету. Мы внимательно относимся к клиентам, максимально подстраиваемся под ваши требования, в срок отправляем все заказы и гарантируем высокое качество товара. Только индивидуальный подход и лояльные цены!
        
        Благодаря нашему магазину вы сможете купить нужную вещь, не выходя из дома и не тратя время на примерку и поиск вещей.!</p>
    `
    this.init = () => {
        return elem;
    }
}

let elem = new Home();
let init = elem.init();
let title = elem.title;

export default init;
export {title};
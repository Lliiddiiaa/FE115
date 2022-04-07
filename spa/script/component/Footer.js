function Footer(){
    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
    <div class="footer_content">
        <div>
            <h1>Для покупателей</h1>
            <ul>
                <li><a href="#">Гарантия и возврат</a></li>
                <li><a href="#">Доставка и оплата</a></li>
                <li><a href="#">Как подобрать размер</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Как оформить заказ</a></li>
            </ul>
        </div>
        <div>
            <h1>Информация</h1>
            <ul>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Скидки</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Сотрудничество</a></li>
                <li><a href="#">Новинки</a></li>
            </ul>
        </div>
        <div>
        <h1>Следите за нами</h1>
            <ul>
                <li><a href="#">Вконтакте</a></li>
                <li><a href="#">Одноклассники</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
    </div>
    `
    this.init = () => {
        return elem;
    }
}

export default new Footer().init()
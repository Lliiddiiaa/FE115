function Header() {
    // this.elem = document.createElement('div');
    // this.elem.classList.add('header_component');
    // this.elem.innerHTML = `
    // `

    const elem = document.createElement('div');//12
    elem.classList.add('header_component');
    elem.innerHTML = `
        <div class="logo">
            <a href="\">
            <img src = "https://via.placeholder.com/150x150">
            </a>
            <nav class="nav">
                <ul>
                    <li><a href="\">Home</a></li>
                    <li><a href="#catalog">Catalog</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </div>
    `

    this.init = () =>{ //13
        return elem
    }

}

export default new Header().init() //11 экспортируем готовый объект

//17 меняем в 16 строке обратный слеш на #, чтобы не перезагружало страницу
//18 переделываем мейн, чтобы он отрисовывал страницы
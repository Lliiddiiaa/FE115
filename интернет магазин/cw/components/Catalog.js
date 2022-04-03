import catalogData from "./CatalogApi.js"; //20.1

function Catalog() {

    const elem = document.createElement('div');
    elem.classList.add('catalog_component');
    let data = []; //20.2

    //пишем функцию, которая будет это отрисовывать. Обязательно асинхронная, тк работаем с апи

    const render = async() => {
        data = await catalogData();
        data.forEach(data => {
            
        })
    }

    this.init = () =>{ 
        return elem
    }

}

export default new Catalog().init() 
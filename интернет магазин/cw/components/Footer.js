function Footer() {

    const elem = document.createElement('div');
    elem.classList.add('footer_component');
    elem.innerHTML = `
    <h2>Footer</h2>
    `

    this.init = () =>{ 
        return elem
    }

}

export default new Footer().init() 
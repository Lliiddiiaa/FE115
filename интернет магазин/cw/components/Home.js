function Home() {

    const elem = document.createElement('div');
    elem.classList.add('home_component');
    elem.innerHTML = `
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolorem, sint eveniet assumenda facilis iusto laboriosam. Ipsum, omnis, esse doloribus illum sint incidunt accusamus corporis illo sed, dicta iusto nulla?</p>
    `

    this.init = () =>{ 
        return elem
    }

}

export default new Home().init() 
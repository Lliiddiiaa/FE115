import product from "./ProductCard.js";

function Main(){
    let elem = document.createElement('div');
    elem.classList.add('main_component');

    const routing = async () => {
        let hash = location.hash.slice(1);
        if(!hash) hash = 'home';
        if (hash.indexOf('/') !== -1){
            elem.innerHTML = ''
            let index = hash.indexOf('/');
            let id = hash.slice(index + 1);
            let item = await product.render(id);
            document.title = product.title;
            // console.log(item);
            elem.append(item);
        }
        import(`./${hash}.js`)
            .then(module => {
                elem.innerHTML = '';
                console.log(module);
                elem.append(module.default.init());
                document.title = module.title;
            });
    }

    window.addEventListener('hashchange', routing);

    window.addEventListener('load', () => { 
        const a = document.querySelectorAll('a[href="\"]'); 
        a.forEach(a => { 
            a.addEventListener('click', e => {
                e.preventDefault();
                location.hash = ''; 
                routing();
            })
        })
        routing();
    });

    this.init = () => {
        return elem;
    }
}

export default new Main().init()
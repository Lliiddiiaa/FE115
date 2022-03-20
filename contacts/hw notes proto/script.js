class Contacts {

    constructor() {
        // this.contactId = 0;
        this.contacts = [];
    }

    add(data){
        if(true) {
            this.contactId++
            // let contactId = Math.floor(Math.random() * 100);
            let contactId = this.getId();


            let contact = new User(data);
            contact.edit({id: contactId}); 
            this.contacts.push(contact);
            // console.log(this.contacts);
        }
    }

    getId(){
        let contactId = Math.floor(Math.random() * 100);
        if(this.contacts) return contactId; 
        if (this.contacts.some(data => data.id === contactId)){
            this.getId()
        }else{
            return contactId
        }
    }

    edit(id, data){
        let contactFind = this.contacts.find(contact => {
            return contact.data.id === id ? contact: null;
        })
        console.log(contactFind)
        contactFind.edit(data);
    }

    remove(id){
        this.contacts = this.contacts.filter(contact => contact.data.id !== id ? contact: null);
    }

    getContacts(){
        return this.contacts;
    }

}

class User {

    constructor(data) {
        if(data.title && data.title.length > 0 && data.phone && data.phone.length > 0 && data.email && data.email.length > 0 && data.adresse && data.adresse.length > 0) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data)
    }
}

class ContactsApp extends Contacts{
    constructor() {
        super();
        this.init();
    }

    init(){

        async function getData() {
            await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(resp => resp.json())
            .then( json => json.map( data => dataStorage.push(data)))
            dataStorage = f(dataStorage)

            dataStorage.forEach(elem => this.add(elem.data)) //не опеределяет свойства undefined add
            this.createContact();

            // console.log(dataStorage) 
            // let data = this.dataStorage.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{}) ////не опеределяет свойства undefined dataStorage
            // this.add(data);
            // createContact();
        

            // return console.log(dataStorage) //показывает
            // return console.log(dataStorage.data) // undefined
            // dataStorage.forEach(elem =>dataStorage.add(elem.data)) //dataStorage.add не функция
            // this.createContact();
            //createContact(dataStorage);
            // return dataStorage.add()
    


        }

        function f(data) {
            return data.map(d => {
                let {id,phone,name:title,email, address:{city}} = d
                return {title,phone,email,city,id}
            })
        }

        
        let formContact = document.createElement('form');
        formContact.setAttribute('class', 'contact_form');

        let contactTitle = document.createElement('h1');
        contactTitle.setAttribute('class', 'contact_title');
        contactTitle.innerText = 'My contacts'

        let textContactTitle = document.createElement('input');
        textContactTitle.setAttribute('type', 'text');
        textContactTitle.setAttribute('name', 'title');
        textContactTitle.setAttribute('class', 'contact_text_title');
        textContactTitle.setAttribute('placeholder', 'Title');

        let ContactNumber = document.createElement('input');
        ContactNumber.setAttribute('type', 'tel');
        ContactNumber.setAttribute('name', 'phone');
        ContactNumber.setAttribute('class', 'contact_number');
        ContactNumber.setAttribute('placeholder', '+375 XX XXXXXXX');

        let ContacEmail = document.createElement('input');
        ContacEmail.setAttribute('type', 'email');
        ContacEmail.setAttribute('name', 'email');
        ContacEmail.setAttribute('class', 'contact_email');
        ContacEmail.setAttribute('placeholder', 'user@mail.ru');

        let contactAdresse = document.createElement('textarea');
        contactAdresse.setAttribute('name', 'adresse');
        contactAdresse.setAttribute('class', 'contact_adresse');
        contactAdresse.setAttribute('placeholder', 'г. Минск, ул. Краснозвездная 11-1');

        let formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.setAttribute('class', 'note_button_submit');
        formButton.innerText = 'Save contact';

        formContact.append(textContactTitle, ContactNumber, ContacEmail,contactAdresse, formButton);

        let contactsList = document.createElement('ul');  
        contactsList.setAttribute('class', 'contacts_list');
        this.contactsList = contactsList;

        document.body.append(formContact, contactsList);

        this.Inputs = [textContactTitle, ContactNumber, ContacEmail,contactAdresse];

        formContact.addEventListener('submit', (e) => {
            this.addContact(e)
        })

        let cookie = this.getCookie('contactsExp')

        if (!cookie){
            this.storage = [];
        }

        let dataStorage = this.storage;

        if (dataStorage){
            dataStorage.forEach(elem => this.add(elem.data))
        }

        if (dataStorage == false || dataStorage == null){
            getData()
            // dataStorage.forEach(data => this.add(elem.data))
            // dataStorage.forEach(data => dataStorage.add(rez.data)
        }

        this.createContact();
    }

    addContact(e){
        e.preventDefault();
        

        let data = this.Inputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
        this.add(data);
        this.Inputs.forEach(elem => elem.value = '')
        this.createContact();
    }


    createContact(){
        this.contactsList.innerHTML = '';
        let dataList = this.getContacts();

        
        dataList.map(elem => {
            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'contact_list_item');

            let listTitle = document.createElement('div');
            listTitle.setAttribute('class', 'contact_list_item_title');
            listTitle.innerText = elem.data.title;

            let listNumber = document.createElement('div');
            listNumber.setAttribute('class', 'number_item');
            listNumber.innerText = elem.data.phone;

            let listEmail = document.createElement('div');
            listEmail.setAttribute('class', 'email_item');
            listEmail.innerText = elem.data.email;

            let listAdresse = document.createElement('div');
            listAdresse.setAttribute('class', 'adresse_item');
            listAdresse.innerText = elem.data.adresse;

            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'contact_list_item_edit');
            editBtn.innerText = 'Edit'

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'contact_list_item_remove');
            removeBtn.innerText = 'X';
            elemList.append(listTitle,listNumber, listEmail,listAdresse, editBtn, removeBtn)
            this.contactsList.append(elemList);

            editBtn.addEventListener('click', _ => {
                this.editContact(listTitle,listNumber, listEmail,listAdresse)
            })

            removeBtn.addEventListener('click', _ => this.contactRemove(elem.data.id))// ------------------------------------------------------------?????

            listTitle.addEventListener('keydown', e => {
                this.saveContact(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
            })

            listNumber.addEventListener('keydown', e => {
                this.saveContact(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
            })

            listEmail.addEventListener('keydown', e => {
                this.saveContact(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
            })

            listAdresse.addEventListener('keydown', e => {
                this.saveContact(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
            })
        })

        this.storage = this.contacts;
        this.setCookie('contactsExp', 1, {'max-age': 864000})
    }
    

    get storage(){
        let stoage = localStorage.getItem('contacts');
        return JSON.parse(stoage)
    }

    set storage(data){
        let dataStorage = JSON.stringify(data);
        localStorage.setItem('contacts', dataStorage);
    }

    
    editContact(title, phone,email,adresse){
        title.setAttribute('contenteditable', 'true');
        phone.setAttribute('contenteditable', 'true');
        email.setAttribute('contenteditable', 'true');
        adresse.setAttribute('contenteditable', 'true');
    }

    contactRemove(id){
        this.remove(id);
        this.createContact();
    }

    saveContact(e, id, title, phone,email,adresse) {
        if (e.key === 'Enter' && e.ctrlKey) {
            title.setAttribute('contenteditable', 'false');
            phone.setAttribute('contenteditable', 'false');
            email.setAttribute('contenteditable', 'false');
            adresse.setAttribute('contenteditable', 'false');
            let data = {
                title: title.innerText,
                // content: content.innerText,
                phone: phone.innerText,
                email: email.innerText,
                adresse: adresse.innerText,
            }

            this.edit(id, data);
        }
        this.storage = this.contacts;
    }

    //Готовое решение
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
}
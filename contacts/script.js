class Contacts {

    constructor() {
        // this.contactId = 0;
        this.contacts = [];
    }

    add(data){
        if(data.content && data.content.length > 0) {
            // this.contactId++
            // let contactId = Math.floor(Math.random() * 100);
            let contactId = this.getId();


            let contact = new User(data);
            contact.edit({id: noteId});
            this.contacts.push(contact);
            console.log(this.contacts);
        }
    }

    getId(){
        let contactId = Math.floor(Math.random() * 100);
        if(this.contacts) return noteId;
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

    getNotes(){
        return this.contacts;
    }

}

class User {
    constructor(data) {
        if(data.content && data.content.length > 0 ) this.data = data;
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


        // let textNoteContent = document.createElement('textarea');
        // textNoteContent.setAttribute('name', 'content');
        // textNoteContent.setAttribute('class', 'note_text_content');
        // textNoteContent.setAttribute('placeholder', 'Content');

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

        this.createContact();
    }

    addContact(e){
        e.preventDefault();
        // let regExp = [/[0-9a-z]@[a-z].[a-z]{2,6}/g, /[0-9A-Za-z]/g]
        // let regTrue = this.textInputs.every((elem, i) => this.reg(elem, regExp[i]))
        //
        // if(!regTrue) return;

        let data = this.Inputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
        console.log(this);
        this.add(data);
        this.Inputs.forEach(elem => elem.value = '')
        this.createContact();
        console.log(this.contacts);
    }

    // reg(elem, regExp){
    //     if(regExp.test(elem.value)){
    //        return true
    //     }else{
    //         elem.style.border = '1px solid red'
    //         return false
    //     }
    // }

    createContact(){
        this.contactesList.innerHTML = '';
        // let dataStorage = this.storage;
        let dataList = this.getContacts();

        // if(dataStorage){
        //     this.notes = dataStorage;
        // }

        // let dataList = this.getNotes();

        
        
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
            this.notesList.append(elemList);

            editBtn.addEventListener('click', _ => {
                this.editContact(listTitle,listNumber, listEmail,listAdresse)
            })

            removeBtn.addEventListener('click', _ => this.contactRemove(elem.data.id))

            listTitle.addEventListener('keydown', e => {
                this.saveContact(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
            })

            listContent.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listTitle,listNumber, listEmail,listAdresse)
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

    // ------------------------------------------------------------?
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
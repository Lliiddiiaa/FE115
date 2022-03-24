import User from "./user.js";

export default class Contacts {

    constructor() {
        // this.contactId = 0;
        this.contacts = [];
    }

    add(data){
        if(true) {
            this.contactId++
            let contactId = this.getId();


            let contact = new User(data);
            contact.edit({id: contactId}); 
            this.contacts.push(contact);
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
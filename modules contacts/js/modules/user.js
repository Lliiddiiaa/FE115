export default class User {

    constructor(data) {
        if(data.title && data.title.length > 0 && data.phone && data.phone.length > 0 && data.email && data.email.length > 0 && data.adresse && data.adresse.length > 0) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data)
    }
}
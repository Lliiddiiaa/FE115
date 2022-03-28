import self from "./contactsApp";

export default async function getData() {
        let dataStorage = [];
        await fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json())
        .then( json => json.map( data => dataStorage.push(data)))
        dataStorage = f(dataStorage)

        dataStorage.forEach(elem => self.add(elem)) 
        self.createContact();

    }
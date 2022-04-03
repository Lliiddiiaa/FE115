export default async function catalogData() {
    // let data = [];
    return await fetch ('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

//21.1 переходим  в Catalog.js
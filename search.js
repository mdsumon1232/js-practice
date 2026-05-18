const products = [
    { id: 1, name: 'Apple iPhone 12' },
    { id: 2, name: 'Samsung Galaxy S21' },
    { id: 3, name: 'Google Pixel 5' },
    { id: 4, name: 'OnePlus 9 Pro' },
    { id: 5, name: 'Sony Xperia 1 III' },
    { id: 6, name: 'Huawei P40 Pro' },
    { id: 7, name: 'Xiaomi Mi 11' },
    { id: 8, name: 'Oppo Find X3 Pro' },
    { id: 9, name: 'Vivo X60 Pro' },
    { id: 10, name: 'Asus ROG Phone 5' },  
    {id:11 , name: 'Apple MacBook Pro'},
    {id:12 , name: 'Dell XPS 13'},
    {id:13 , name: 'HP Spectre x360'},          
    {id:14 , name: 'Lenovo ThinkPad X1 Carbon'},
    {id:15 , name: 'Microsoft Surface Laptop 4'},
    {id:16 , name: 'Acer Swift 3'},     
]


function searchProducts(products , search){
    const searchItem = [];

    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            searchItem.push(product);
        }
    }

    return searchItem;
}

const result = searchProducts(products , 'laptop');

console.log(result);
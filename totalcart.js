const products = [
    { name: "Laptop", price: 999.99 },
    { name: "Smartphone", price: 499.99 },
    { name: "Tablet", price: 299.99 },
    { name: "Headphones", price: 199.99 }
]

const totalCart = (products) => {
    let total = 0;

    for(let product of products){
        total += product.price;
    }
    return total;
}

const price = totalCart(products);

console.log(price);
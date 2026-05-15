
const phoneList = [
    {
        name: "Phone 1",
        price: 100
    },
    {
        name: "Phone 2",
        price: 200
    },
    {
        name: "Phone 3",
        price: 150
    }
];

const cheapestPhone = (phones) => {

    let cheapest = phoneList[0];

    for(let phone of phoneList){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
  return cheapest;
}

const result = cheapestPhone(phoneList);

console.log(result.price);
console.log(result.name);
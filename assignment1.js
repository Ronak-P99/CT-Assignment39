
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.getElementById("myButton").addEventListener("click", function() {

    for (let keys in products) {
        const div = document.createElement("div");
        div.innerText = [`Name: ${products[keys].name} | Price: ${products[keys].price} | Description: ${products[keys].description}`]
        document.body.appendChild(div)
    }

});


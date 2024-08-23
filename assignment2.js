function Customer(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}
Customer.prototype.displayInfo = function() {
    return `<strong>UserName:</strong> ${this.name}, <strong>email:</strong> ${this.email}, <strong>Message:</strong> ${this.message}`;
}

document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let newCustomer = new Customer(name, email, message);
    let customerElement = document.createElement("div");
    customerElement.innerHTML = newCustomer.displayInfo();
    document.getElementById("customerList").appendChild(customerElement);
    document.getElementById("customerForm").reset();




});
var userName ="samir"
var userEmail ="samir@gmail.com"
var userAge = 22
var userAddress = "India"
var userPhone = 1234567890

// console.log(userName);
// console.log(userEmail);
// console.log(userAge);
// console.log(userAddress);
// console.log(userPhone);


//JSON OBJECT
// var user = {
//     name: "samir",
//     email: "samir@gmail.com",
//     age: 22,
//     phone: 1234567890,
//     city:"Pune",
//     state:"Maharashtra",
//     country:"India"


// }
var user = {
    name: "samir",
    email: "samir@gmail.com",
    age: 22,
    phone: 1234567890,

    address:{
        city:"Pune",
        state:"Maharashtra",
        country:"India"
    }


}
console.log(user.name);
console.log(user.email);
console.log(user.age);
console.log(user.phone);
console.log(user.address.city);
console.log(user.address.state);
console.log(user.address.country);

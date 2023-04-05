var users =[
    {
        id:101,
        name:"ram",
        age:20,
        gender:"Male",
        isActive:true,
    },
    {
        id:102,
        name:"rajvi",
        age:22,
        gender:"FeMale",
        isActive:false,
    },
    {
        id:103,
        name:"jay",
        age:24,
        gender:"Male",
        isActive:true,
    }
]

// users.forEach((i)=>{
//     console.log(i.name.toUpperCase());
// })


// var x = users.map((i)=>{
//     return i.age*2
// })
// console.log(x);

var x = users.map((i)=>i.age*2)
console.log(x);


// for(let i=0;i<users.length;i++){
//     console.log(users[i].name);
//     console.log(users[i].age);
// }
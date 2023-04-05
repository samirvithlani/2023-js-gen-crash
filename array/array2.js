var employees =[
    {
        id:101,
        name:"parth",
        age:20,
        salary:20000,
        isMarried:true,
        child:0,
        gender:"Male",
        address:{
            city:"surat",
            state:"gujarat",
        }
    },
    {
        id:102,
        name:"neha",
        age:34,
        salary:78000,
        isMarried:true,
        child:2,
        gender:"FeMale",
        address:{
            city:"Pune",
            state:"Maharashtra",
        }
    },
    {
        id:103,
        name:"jay",
        age:27,
        salary:50000,
        isMarried:true,
        child:1,
        gender:"Male",
        address:{
            city:"Ahmedabad",
            state:"gujarat",
        }
    },
    {
        id:104,
        name:"akshay",
        age:22,
        salary:20000,
        isMarried:false,
        child:0,
        gender:"Male",
        address:{
            city:"Mumbai",
            state:"Maharashtra",
        }
    },
    {
        id:105,
        name:"priya",
        age:29,
        salary:67000,
        isMarried:true,
        child:1,
        gender:"FeMale",
        address:{
            city:"Mumbai",
            state:"Maharashtra",
        }
    }
]


var emps = employees.filter((emp)=>{
    return emp.address.state==="Maharashtra"
}).forEach((emp)=>{
    console.log(emp.name);
})


// var emps = employees.filter((emp)=>
//     {
//         return emp.isMarried==true && emp.child>0
// })

// console.log(emps);


// var emps = employees.filter((emp)=>{
//     return emp.salary>=50000
// })

// var emps = employees.filter((emp)=>{
//     return emp.name.length>4
// })
// var emps = employees.filter((emp)=>{
//     return emp.gender==="FeMale" && emp.child>0
// })




//store employee name who is married !!!
// var emps=[]

// employees.map((emp)=>{
// //parth
// //neha
// //jay
// //akshay
//     if(emp.isMarried==true){
//         emps.push(emp.name)
//     }
    
// })
// console.log(emps);
const students = (d) =>{
console.log("student data",d)
}
const employees = (d) =>{

    console.log("employee data",d)
}


const driver = (data,cb) =>{

        cb(data)
}
//student , employees

//var param ="student"
var param ="employees"

var stduentData = {
    name:"Raj",
    age:23,
    address:"Pune"
}
var employee ={
    name:"Ram",
    age:28,
    salary:10000
}

if(param ==="student"){
    driver(stduentData,students)
}
else if(param ==="employees"){
    driver(employee,employees)
}




var id =0;

const printData = ()=>{

return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(101)
    },1000)
})
}


printData().then((data)=>{
    console.log(data)
    id = data
})
console.log("id",id)
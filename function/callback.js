
const test = () => {
    console.log("test")
}

const test1 = (name) => {
    console.log("test1")
    console.log(name)
}

const demo1 = (a,b)=>{

    return a + b;
}

function data(a,b,c){

    //console.log(a);
    //console.log(b);
//    console.log(c);
    //c("raj")
    var x =  c(1,23)
    return x;
    

}

//data(1,2,"hello")
//data("hello",1,2)
var res = data(1,2,demo1)
console.log(res)

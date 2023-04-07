function test(){

    setTimeout(() => {
        console.log("hello")
    }, 2000);


}

function testPromise (){

    var promise = new Promise((resolve,reject)=>{

        //resolve("Going Goa")
        //reject("No Goa '_'")
        setTimeout(() => {
            //resolve("Going Goa")
            reject("No Goa '_'")
        }, 3000);

    })

    console.log(promise)

    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err)
    })

}
//testPromise()


function getData(){

    return new Promise((suc,fail)=>{

        setTimeout(() => {
            suc("Hello")
        }, 2000);

    })
}

getData().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

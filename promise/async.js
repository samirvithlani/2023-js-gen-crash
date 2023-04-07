var p ="...."

const sendData = ()=>{

    

    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Data")
        }, 2000);
    })

}
async function getData(){

    var x = await sendData()
    console.log(x)
    p =x
    console.log(p)
}
getData()
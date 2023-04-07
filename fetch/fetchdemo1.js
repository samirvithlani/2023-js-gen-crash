function fetchData (){

    var userdata ={};

    fetch("https://reqres.in/api/users?page=2",{
        method: "GET"
    }).then((response)=>{
        //console.log(response.json())
        response.json().then((data)=>{
            //console.log(data)
            userdata = data
        })
    }).catch((err)=>{
        console.log(err)
    })

    console.log(userdata)

}

//fetchData()

const fetchData1 = async()=>{

    var res = await fetch("https://reqres.in/api/users?page=2",{
        method: "GET"
    })
    var data = await res.json()
    console.log(data)

}
fetchData1()
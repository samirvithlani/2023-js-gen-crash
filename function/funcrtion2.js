function getData(){

    function getMoreData(){

        console.log("More Data")
        return "More Data"
    }

    return "get Data"+getMoreData()
    // return "get Data"

}
var x = getData()
console.log(x)


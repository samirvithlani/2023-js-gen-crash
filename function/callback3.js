
const isPdf = (file)=>{

    console.log("Pdf uploaded "+file)

}

const isImage = (file)=>{

    console.log("Image uploaded "+file)

}

const uploadFile = (file,cb)=>{

    console.log("File uploaded")
    cb(file)

}

var file = "abc.pdf"
if(file.endsWith(".pdf")){
    uploadFile(file,isPdf)
}
else if(file.endsWith(".jpg")){
    uploadFile(file,isImage)
}

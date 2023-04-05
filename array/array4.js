var students =[
    {
        name: "John",
        age: 25,
        courses:[
            {
                name: "Maths",
                marks: 80
            },
            {
                name: "Science",
                marks: 90
            }
        ]
    },
    {
        name: "Alex",
        age: 26,
        courses:[
            {
                name: "Maths",
                marks: 56
            },
            {
                name: "Science",
                marks: 45
            },
            {
                name: "Art",
                marks: 97
            }
        ]
    }
]

// for(let i=0;i<students.length;i++){

//     console.log("Name: "+students[i].name);
//     console.log("Age: "+students[i].age);
//     for(let j=0;j<students[i].courses.length;j++){
//         console.log("Course: "+students[i].courses[j].name);
//         console.log("Marks: "+students[i].courses[j].marks);
//     }

// }
students.map((stu)=>{
    console.log("Name :"+stu.name);
    console.log("Age :"+stu.age);
    stu.courses.map((c)=>{
        console.log("Course :"+c.name);
        console.log("Marks :"+c.marks);
    })
})








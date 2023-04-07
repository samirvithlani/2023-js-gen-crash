var users = ["jay","raj","ram","sita","gita","hari","malayalam","hindi"]
var salary = [12,34,45,67,233,12345,90,67,-345]

function sortNamebylen(a,b){
    return a.length - b.length
}

users.sort(sortNamebylen)
console.log(users)



function sortSalary(a,b){

    return a -b
}

salary.sort(sortSalary)
console.log(salary)
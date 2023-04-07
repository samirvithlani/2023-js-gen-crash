var users = ["jay","raj","ram","sita","gita","hari"]

users.push("krishna","radha")
users.unshift("shyam","sita")


var removed = users.pop()
console.log("removing...",removed)
removed = users.shift()
console.log("removing...",removed)
console.log(users)

//users.splice(3,0,"kuch")
//users.splice(3,1)
//users.splice(3,2)
//users.splice(3,2,"kuch","kuch","hota","hai")
//spread operator...
console.log(users)



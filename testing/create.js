let users= require('./user.json');
const fs = require("fs");


function create(user){
    return new Promise((resolve, reject)=>{
        const newuser= {...user};
        users.push(newuser);
        fs.writeFileSync('./user.json', JSON.stringify(users))
        resolve(newuser);
    })
}

module.exports={
    create
}
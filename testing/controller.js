const USER= require('./create')

async function createUser(req, res){
 let body="";
 req.on('data', (chunk)=>{
     body += chunk.toString()
 })

 req.on('end', async()=>{
     const {name, department,phone } = JSON.parse(body);

     const user= {
         name,
         department,
         phone
     }
     const users= await USER.create(user);
     return res.send(JSON.stringify(users));
 })
}

console.log("working")
module.exports= {
    createUser
}
// page appartient ts les methods
const { Router } = require("express")
const express=require("express")

//instance d express fiha ts les methodes comme app 
const RouterUser=express.Router()

const users=require('./Db')


//GetAll Users
RouterUser.get('/HelloUser',(req,res)=>{res.send("hello word")})
RouterUser.get("/",(req,res)=>{res.send({Msg:"Succeful Getting",Response:users})})
//RouteUser.get('/getall',(req,res)=>{res.send({msg:"succesful geted",response:users}) ;console.log(users)})

//GetOneUser

//addUser
RouterUser.post('/',(req,res)=>{res.send([...users,req.body]) ;console.log(req.body)})
// RouteUser.post('/addnewuser',(req,res)=>{res.send(users.concat(req.body))
//     console.log(req.body)})
 //delete
RouterUser.delete('/:id',(req,res)=>{res.send({msg:"succ delet","response":users.filter(el=>el.id!==parseInt(req.params.id))});console.log(req.params.id)})
// RouteUser.delete('/deleteuser/:id',(req,res)=>{res.send(users.filter(el=>el.id!==parseInt(req.params.id)))
//console.log(req.params)  })
module.exports=RouterUser
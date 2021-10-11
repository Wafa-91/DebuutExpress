// import express
const express=require("express")
//midlwr express
const path=require('path')
//instance:initialisation (bech nabda inajm nesta3ml express et les methode existants)
const app=express() 

const RouterUser=require('./Router')

//midlware WorkHours
const WorkHours=require("./WorkHours")
app.use(WorkHours)
//db 
//const users=require('./Db')

//db
//const users=[{id:"1",name:"ahmed",age:"20"},{id:"2",name:"Mohamed",age:"25"},{id:"3",name:"Amal",age:"26"}]

//midelware express static 
app.use(express.static("components"))

//affichi page a partir de server(methode ge)
//app.get('/home',(req,res)=>{res.sendFile(path.join(__dirname,"components","Home.html"))})

//get all users
//app.get("/users",(req,res)=>{res.send({Msg:"Succeful Getting",Response:users})})

//middlewares(wa9tech nasta3ml il middlware haka:kif timchi 3al path hatha rak bch testa3m widlware hathaRouteUser )
 app.use(express.json())
app.use('/users',RouterUser)


//creation sever(port :a quelle port ecoute les requets /callbackfunction)
 app.listen(5000,(err)=>{err?console.log(err): console.log("sever is running")})
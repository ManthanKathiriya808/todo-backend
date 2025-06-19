const express = require("express")

const port = 3000

const app = express()

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded())
let data = []

app.post("/insert",(req,res)=>{
    data.push(req.body)
    console.log(data)
    res.render("index",{
        data
    })
    
})




app.get("/",(req,res)=>[
    res.render("index")
])


app.listen(port,(err)=>{
    if(err){
        console.log("not connected")
        return false
    }

    console.log("port is running at : " + port)
})


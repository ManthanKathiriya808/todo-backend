const express = require("express")

const port = 3000

const app = express()

app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded())

let data = []

app.post("/insert",(req,res)=>{
    console.log(req.body)

    res.render("index",{
        data: req.body
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


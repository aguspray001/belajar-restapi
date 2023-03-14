// init library yang mau dipakai
const express = require('express')
const app = express()
const port = 4700

const trm_get_data =  (req , res)=> {
    res.send("hello world!")
}

app.get('/hello',trm_get_data)



app.listen(port, ()=>{
    console.log(`this app is running on port => ${port}`)
})
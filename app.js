const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('live');
})
const PORT = process.env.PORT || 4000;

const start = async () =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`${PORT} connected`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();
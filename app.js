const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080


app.use(cors())

app.get('/health', (req,res)=>{
    res.status(200).send('OK')
})

app.get('/',(req,res)=>{

    res.send('HELLOW WORLD')
})

app.listen(PORT,()=>{

 console.log('listening on port' +PORT)
})
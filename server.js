const { response } = require("express")
const express = require("express")
const app = express()
const port = 3010

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('client'))

app.get('/', (res, req) => {
    res.send('index.html')
})

app.get('/ping', (res, req) => {
    res.send('pong') 
})

app.listen(port, () => {
    console.log(`API running on port ${port}`);
})
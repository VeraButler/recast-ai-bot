const express = require('express')
const bodyParser = require('body-parser')

const app = express() 
const port = 5000 
app.use(bodyParser.json()) 


//get stores data in URL == unsafe
app.get('/', (req, res) => {
  console.log(req, res)
  res.send("test")
})

//post stores data in web server
app.post('/', (req, res) => {
  console.log(req.body)

  res.send({
    replies: [{
      type: 'text',
      content: 'Roger that',
    }], 
    conversation: {
      memory: { key: 'value' }
    }
  })
})

app.post('/errors', (req, res) => {
  console.log(req.body) 
  res.send() 
}) 

app.listen(port, () => { 
  console.log('Server is running on port 5000') 
})



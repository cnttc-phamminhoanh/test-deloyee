const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Your Name is Ngoc Hieu!')
})

app.listen(port, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(`Example app listening on port ${port}`)
})
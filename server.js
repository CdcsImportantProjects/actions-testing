const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var hi = ["kam is gay","hi from gh actions","hello","yo","Gurt: Yo!"]
  res.send(hi[Math.floor(Math.random()*hi.length)])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const path = require('path')
const app = express()
const port = 3000
// const ktMiddleWare = (req, res, next)=>{
//   console.log(req)
//  next()
// }

app.use(express.static(path.join(__dirname,'public')))
//app.use(ktMiddleWare)

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
app.get('/about/:name', (req, res) => {
    //res.send('about')
    //res.sendFile(path.join(__dirname,"index.html"))
    //res.status(500)
    res.json({
      "name":req.params.name,
      "age":"32"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

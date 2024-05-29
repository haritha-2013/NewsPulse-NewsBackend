const express = require('express')
const articleRoutes = require('./routes/articleRoutes')
const authorRoutes = require('./routes/authorRoutes')
const app = express()
const port = 3000

app.use('/articles', articleRoutes)

app.use('/author', authorRoutes)






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.status(200).json({ title: "Espinha ama Did" })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
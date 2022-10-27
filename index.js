const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 4000
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello World")
})
app.listen(port, ()=> {
    console.log("App running on port", port)
})
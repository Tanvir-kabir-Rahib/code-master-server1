const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 4000
app.use(cors())
const courses = require("./Data/courses.json")

app.get("/", (req, res) => {
    res.send("Code master server running")
})
app.get("/courses", (req, res) => {
    res.send(courses)
})
app.listen(port, ()=> {
    console.log("App running on port", port)
})
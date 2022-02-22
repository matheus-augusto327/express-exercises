const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.use("/meusite", express.static(path.join(__dirname, "client")))

let consoleBody = (req, res, nesy) => {
    console.log(req.body)
    next()
}

let hello = (req, res) => {
    res.send("Hello World!")
}

app.use("/", bodyParser.json())
app.use("/", consoleBody)
app.get("/", hello)

app.post("/", hello)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})
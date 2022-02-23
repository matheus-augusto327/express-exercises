const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()

// app.use("/meusite", express.static(path.join(__dirname, "client")))

// let consoleBody = (req, res, nesy) => {
//     console.log(req.body)
//     next()
// } 

// let hello = (req, res) => {
//     res.send("Hello World!")
// }

// app.use("/", bodyParser.json())
// app.use("/", consoleBody)
// app.get("/", hello)

// app.post("/", hello)

// const PORT = 5000

// app.listen(PORT, () => {
//     console.log(`Server running on Port: ${PORT}`)
// })

let alunos = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "João" },
    { id: 2, nome: "Magnocleide" }
]

app.use(express.urlencoded({extended: false} ))

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body)
    let aluno = alunos[req.body.id]
    res.json(aluno)
})

// app.get("/aluno/:id", (req, res) => {
//     console.log(req.params.body)
//     let aluno = alunos[req.params.body.id]
//     res.json(aluno)
// })

app.listen(3000, () => console.log("Server rodando..."))
import express from 'express'
import cors from 'cors'
import { callRouter } from './router/callRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/chamado", callRouter)

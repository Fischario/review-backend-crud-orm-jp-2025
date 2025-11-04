import express from 'express'
import Banco from './config/database.js'
import router from './router/produto.js'

const app = express()

app.use(express.json())

app.use('/api/v1', router)

const porta = 9999

Banco.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
            console.log(`servidor ralando na porta ${porta}`)
        })
    })
    .catch((e) => {
        console.log(`Bah tchê pode não, segue erro: ${e}}`)
    })
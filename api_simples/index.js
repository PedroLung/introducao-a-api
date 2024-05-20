const express = require('express') // Importando o express para o projeto
// Configurando app e porta para rodar a aplicação
const app = express() 
const port = 3000

// Pegar os dados do body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Rotas

// Rota principal
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Primeira rota criada com sucesso!' })
})

//  Rota create
app.post('/createproduct', (req, res) => {
  const { name, price } = req.body

  if(!name && !price) {
    res.status(422).json({ message: `O campo nome e preço precisa ser enviado!`})
    return
  } else if (!name) {
    res.status(422).json({ message: `O campo nome precisa ser enviado!` })
    return
  } else if (!price) {
    res.status(422).json({ message: `O campo preço precisa ser enviado!`})
    return
  }

  console.log(name)
  console.log(price)

  res.status(201).json({ message: `O produto: ${name} foi criado com sucesso!` })
})

// Conexão com o banco de dados
app.listen(port, () => {
  console.log('Servidores conectados com sucesso!')
  console.log(`Estamos rodando na porta: ${port}`)
})
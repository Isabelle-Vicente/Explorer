require('express-async-errors')

const AppError = require('./utils/AppError')

// Importar o Express
const express = require('express')

const routes = require('./routes')

//Inicializar o Express
const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})
  
//Definir a Porta
const PORT = 3333;
//Verificar movimento na porta 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))



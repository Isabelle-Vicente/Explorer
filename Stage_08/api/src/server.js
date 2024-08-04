// Importar o Express
const express = require("express");
//Inicializar o Express
const app = express();

app.get('/message/:id/:user', (request, response) => {
    const { id, user } = request.params
  
    response.send(`
      Mensagem ID: ${id}.
      Para o usuário ${user}.  
    `)
  })
  
//Definir a Porta
const PORT = 3333;
//Verificar movimento na porta 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))



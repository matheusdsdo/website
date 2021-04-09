const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});

app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'bancosite'
});


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  })); 

app.post("/" , (req, res) => {
    console.log(req)
    res.render('No barra');
})

app.post('/adicionar', (req, res) => {
    const user = req.body.Nome;
    const pass = req.body.Senha;
    const mail = req.body.Email;
    console.log(user,pass,mail)
    //console.log(req)
    //console.log(res)

 /*   db.query('insert into usuario (usuario, senha, email) values (?,?,?)',
     [usuario, senha, email],
     (err, result) => {
         if(err){
             console.log('RESULTADO: ' , result);
             console.log('ERRO: ',err);
         } else {
            res.send("Inserido!");
         }
     }
     ); */
});


const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'bancosite'
});

app.use(cors());
app.use(express.json())

app.post("/" , (req, res) => {

})

app.post('/adicionar', (req, res) => {
    const usuario = req.body.user;
    const senha = req.body.pass;
    const emails = req.body.email;
    console.log(usuario,senha,emails)
    res.send("Inserido!")

    db.query('insert into usuario (usuario, senha, email) values (?,?,?)',
     [usuario, senha, emails],
     (err, result) => {
         if(err){
             console.log('RESULTADO: ' , result);
             console.log('ERRO: ',err);
         } else {
            res.send("Inserido!");
         }
     }
     );
});

app.get('/listausuarios' , (req, res) => {
    db.query('select * from usuario' , (err, result) => {
        if(err){
            console.log('Erro no listar: ',err)
        } else {
            res.send(result)
        }
    })
})

app.get('/selecionausuario/:id' , (req,res) => {
    const id = req.params.id
    db.query('select * from usuario where id=?',id,(err,result) => {
        if(err){
            console.log('Erro no selecionar um unico usuario: ', err)
        } else {
            res.send(result)
        }
    })
})

app.delete('/deletausuario/:id' , (req, res) => {
    const id = req.params.id;
    console.log('id do meliante ',id)
    db.query("delete from usuario where codigo=?",id,(err,result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
    }        
    })
})

app.put('/updateusuario' , (req,res) => {
    const id = req.body.codigo;
    const user = req.body.usuario;
    const senha = req.body.senha;
    const email = req.body.email;
    console.log(id,user,senha,email)
   /* db.query('update usuario set usuario=? , senha=? , email=? where codigo=?'),
    [user,senha,email, id],
    (err, result) => {
        if(err){
            console.log()
        } else {
            res.send(result)
       } }*/
    
})

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});



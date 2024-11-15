const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
300

const conexao = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'sorvetes'
});
conexao.connect((erro) => {
 if (erro) {
 console.error('Erro ao conectar com o banco de dados:', erro);
 } else {
 console.log('Conectado ao banco de dados MySQL.');
 }
});
 
app.post('/sorvetes', (req, res) => {
 const {tipo_base} = req.body;
 const query = 'INSERT INTO sorvetes (tipo_base) VALUES (?)';
 conexao.query(query, [tipo_base], (erro) => {
 if (erro) {
 res.status(500).send('Erro ao confirmar pedido');
 } else {
 res.send('Pedido realizado com sucesso com sucesso!');
 }
 });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
   });
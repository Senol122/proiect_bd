const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'CTS'
});

app.post('/create', (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const adresa = req.body.adresa;

  db.query('INSERT INTO donator(nume, prenume, adresa) VALUES (?,?,?)', 
  [nume, prenume, adresa],
  (err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
})

app.get('/donatori', (req,res) => {
  db.query('SELECT * FROM DONATOR', (err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send(result);
    }
  });
})

app.put('/update', (req, res) => {
  const ID_donator = req.body.ID_donator;
  const adresa = req.body.adresa;
  db.query('UPDATE donator SET adresa = ? WHERE ID_donator = ?', [adresa, ID_donator], (err, result) => {
    if(err) {
      console.log(err);
    }
    else {
      res.send(result);
    }
  });
});

app.delete('/delete/:ID_donator', (req, res) => {
  const ID_donator = req.params.ID_donator;
  db.query('DELETE FROM donator WHERE ID_donator = ?', ID_donator, (err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send(result);
    }
  })
});

app.listen(3001, () =>{
  console.log('Yay!');
})
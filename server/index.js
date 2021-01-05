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


// POST DONATOR
app.post('/inserare/donatori', (req, res) => {
  const nrTelefon = req.body.nrTelefon;
  const grupaSange = req.body.grupaSange;
  const rhSange = req.body.rhSange;

  db.query('INSERT INTO donator(numar_telefon, grupa_sange_don, rh_sange_don) VALUES (?,?,?)', 
  [nrTelefon, grupaSange, rhSange],
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

// POST CADRU MEDICAL
app.post('/inserare/cadru_medical', (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const calificare = req.body.calificare;
  const salariu = req.body.salariu;
  const data = req.body.data;
  const CNP = req.body.CNP;

  db.query('INSERT INTO cadru_medical(CNP_cadru, nume_cadru, prenume_cadru, calificare, salariu, data_angajare) VALUES (?,?,?,?,?,?)', 
  [CNP, nume, prenume, calificare, salariu, data],
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

// POST CENTRU TRANSFUZIE SANGUINA
app.post('/inserare/centru_transfuzie_sanguina', (req, res) => {
  const adresa = req.body.adresa;
  const program = req.body.program;
  const dateContact = req.body.dateContact;

  db.query('INSERT INTO centru_transfuzie_sanguina(adresa, program_functionare, date_contact) VALUES (?,?,?)', 
  [adresa, program, dateContact],
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

// POST DISTRIBUIRE
app.post('/inserare/distribuire', (req, res) => {
  const data = req.body.data;

  db.query('INSERT INTO distribuire(data_distribuire) VALUES (?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST ECHIPAMENT
app.post('/inserare/echipament', (req, res) => {
  const nume = req.body.nume;
  const func = req.body.func;

  db.query('INSERT INTO echipament(nume_echipament, functionalitate) VALUES (?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST FRACTIONARE
app.post('/inserare/fractionare_unitate_de_sange', (req, res) => {
  const data = req.body.data;

  db.query('INSERT INTO fractionare_unitate_de_sange(data_fractionare) VALUES (?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST PERSOANA
app.post('/inserare/persoana', (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const adresa = req.body.adresa;
  const elig = req.body.adresa;

  db.query('INSERT INTO persoana(nume, prenume, adresa, eligibilitate_donator) VALUES (?,?,?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST PRIMITOR
app.post('/inserare/primitor', (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const grSange = req.body.grSange;
  const rhSange = req.body.rhSange;
  const afectiune = req.body.afectiune;

  db.query('INSERT INTO primitor(nume_primitor, prenume_primitor, grupa_sange_primitor, rh_sange_primitor, afectiune_medicala) VALUES (?,?,?,?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST PRODUSE SANGE
app.post('/inserare/produse_sange', (req, res) => {
  const tipProdus = req.body.tipProdus;
  const valab = req.body.valab;

  db.query('INSERT INTO produse_sange(tip_produs, valabilitate) VALUES (?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST RECOLTARE SANGE
app.post('/inserare/recoltare_sange', (req, res) => {
  const data = req.body.data;
  const tipDonatie = req.body.tipDonatie;

  db.query('INSERT INTO recoltare_sange(data_recoltare, tip_donatie) VALUES (?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST SPITAL
app.post('/inserare/spital', (req, res) => {
  const necTr = req.body.necTr;
  const necGl = req.body.necGl;
  const necPl = req.body.necPl;

  db.query('INSERT INTO spital(necesitate_tromb, necesitate_globule, necesitate_plasma) VALUES (?,?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST SPONSOR
app.post('/inserare/sponsor', (req, res) => {
  const nume = req.body.nume;
  const data = req.body.data;
  const suma = req.body.suma;

  db.query('INSERT INTO sponsor(nume_sponsor, data_sponsorizare, suma_sponsorizata) VALUES (?,?,?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});

// POST UNITATE SANGE
app.post('/inserare/unitate_sange', (req, res) => {
  const calif = req.body.calif;

  db.query('INSERT INTO unitate_sange(calificare_biologica) VALUES (?)', data,(err, result) => {
    if(err){
      console.log(err);
    }
    else {
      res.send('Values inserted');
    }
  }
  );
});


// GET RECORDS
app.get('/records/:tabelName', (req,res) => {
  const tabelName = req.params.tabelName;
  db.query('SELECT * FROM ?', tabelName, (err, result) => {
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
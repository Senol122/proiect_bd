import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import {useState} from 'react';
import Axios from 'axios';
import _ from 'lodash';

function Tabel(set) {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [CNP, setCNP] = useState(0);
  const [calif, setCalif] = useState('');
  const [suma, setSuma] = useState(0);
  const [data, setData] = useState('');
  const [program, setProgram] = useState('');
  const [dateContact, setDateContact] = useState('');
  const [nrTelefon, setNrTelefon] = useState('');
  const [grSange, setGrSange] = useState('');
  const [rhSange, setRhSange] = useState('');
  const [adresa, setAdresa] = useState('');
  const [func, setFunc] = useState('');
  const [eligDon, setEligDon] = useState('');
  const [afectiune, setAfectiune] = useState('');
  const [tipProdus, setTipProdus] = useState('');
  const [tipRecoltare, setTipRecoltare] = useState('');
  const [necTr, setNecTr] = useState('');
  const [necGl, setNecGl] = useState('');
  const [necPl, setNecPl] = useState('');
  const [valab, setValab] = useState('');

  const addRecord = () => {
    if(set.set === 'centru_transfuzie_sanguina'){
      Axios.post('http://localhost:3001/inserare/centru_transfuzie_sanguina', {
        adresa: adresa,
        program: program,
        dateContact: dateContact,
      });
    };
    if(set.set === 'cadru_medical')
    {
      Axios.post('http://localhost:3001/inserare/cadru_medical', {
        CNP: CNP,
        nume: nume,
        prenume: prenume,
        calificare: calif,
        salariu: suma,
        data: data,
      });
    };
    if(set.set === 'distribuire'){
      Axios.post('http://localhost:3001/inserare/distribuire', {
        data: data
      })
    }
    if(set.set === 'echipament'){
      Axios.post('http://localhost:3001/inserare/echipament', {
        nume: nume,
        func: func
      })
    }
    if(set.set === 'fractionare_unitate_de_sange'){
      Axios.post('http://localhost:3001/inserare/fractionare_unitate_de_sange', {
        data: data
      })
    }
    if(set.set === 'persoana'){
      Axios.post('http://localhost:3001/inserare/persoana', {
        nume: nume, 
        prenume: prenume,
        adresa: adresa,
        elig: eligDon
      })
    }
    if(set.set === 'donator'){
      Axios.post('http://localhost:3001/inserare/fractionare_unitate_de_sange', {
        nrTelefon: nrTelefon,
        grupaSange: grSange,
        rhSange: rhSange
      })
    }
    if(set.set === 'primitor'){
      Axios.post('http://localhost:3001/inserare/primitor', {
        nume: nume, 
        prenume: prenume,
        grSange: grSange,
        rhSange: rhSange,
        afectiune: afectiune
      })
    }
    if(set.set === 'produse_sange'){
      Axios.post('http://localhost:3001/inserare/produse_sange', {
        tipProdus: tipProdus,
        valab: valab
      })
    }
    if(set.set === 'recoltare_sange'){
      Axios.post('http://localhost:3001/inserare/recoltare_sange', {
        data: data,
        tipDonatie: tipRecoltare
      })
    }
    if(set.set === 'spital'){
      Axios.post('http://localhost:3001/inserare/spital', {
        necTr: necTr,
        necGl: necGl,
        necPl: necPl
      })
    }
    if(set.set === 'sponsor'){
      Axios.post('http://localhost:3001/inserare/sponsor', {
        nume: nume,
        data: data,
        suma: suma
      })
    }
    if(set.set === 'unitate_sange'){
      Axios.post('http://localhost:3001/inserare/unitate_sange', {
        calif: calif
      })
    }
  }



  // CADRU MEDICAL
  if(_.isEqual(set.set, "cadru_medical")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nume cadru medical:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Prenume cadru medical:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setPrenume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">CNP:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setCNP(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Calificare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setCalif(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Salariu:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setSuma(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Data angajare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setData(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare cadru medical
        </Button>
      </div>
    );
  }

  // CENTRU TRANSFUZIE SANGUINA
  if(_.isEqual(set.set, "centru_transfuzie_sanguina")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Adresa centru:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setAdresa(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Program functionare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setProgram(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Date contact:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setDateContact(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare centru
        </Button>
      </div>
    );
  }

  // DISTRIBUIRE
  if(_.isEqual(set.set, "distribuire")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Data distribuire:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setData(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare distribuire
        </Button>
      </div>
    );
  }

  // DONATOR
  if(_.isEqual(set.set, "donator")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Numar telefon:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNrTelefon(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Grupa sange donator:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setGrSange(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Rh sange donator:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setRhSange(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare donator
        </Button>
      </div>
    );
  }

  // ECHIPAMENT
  if(_.isEqual(set.set, "echipament")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nume echipament:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Functionalitate echipament:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setFunc(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare echipament
        </Button>
      </div>
    );
  }

  // FRACTIONARE UNITATE DE SANGE 
  if(_.isEqual(set.set, "fractionare_unitate_de_sange")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Data fractionare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setData(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare recoltare
        </Button>
      </div>
    );
  }

  // PERSOANA
  if(_.isEqual(set.set, "persoana")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nume:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Prenume:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setPrenume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Adresa:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setAdresa(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Eligibilitate donator:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setEligDon(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare persoana
        </Button>
      </div>
    );
  }

  // PRIMITOR
  if(_.isEqual(set.set, "primitor")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nume primitor:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Prenume primitor:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setPrenume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Grupa sange primitor:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setGrSange(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Rh sange primitor:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setRhSange(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare primitor
        </Button>
      </div>
    );
  }

  // PRODUSE SANGE 
  if(_.isEqual(set.set, "produse_sange")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Tip produs:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setTipProdus(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Valabilitate:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setValab(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare produs sange
        </Button>
      </div>
    );
  }

  // RECOLTARE SANGE
  if(_.isEqual(set.set, "recoltare_sange")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Data recoltare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setData(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Tip donatie:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setTipRecoltare(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare recoltare sange
        </Button>
      </div>
    );
  }

  // SPITAL
  if(_.isEqual(set.set, "spital")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Necesitate trombocite:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNecTr(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Necesitate globule rosii:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNecGl(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Necesitate plasma:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNecPl(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare spital
        </Button>
      </div>
    );
  }

  // SPONSOR
  if(_.isEqual(set.set, "sponsor")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Nume sponsor:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setNume(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Data sponsorizare:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setData(event.target.value);
              }}/>
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Suma sponsorizata:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setSuma(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare sponsor
        </Button>
      </div>
    );
  }

  // UNITATE SANGE
  if(_.isEqual(set.set, "unitate_sange")) {
    return (
      <div id="card1" className=" mt-5 mb-5">
        <Form>
          <FormGroup>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Calificare biologica:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Introduceți datele..." onChange={(event) => {setCalif(event.target.value);
              }}/>
            </div>
          </div>
          </FormGroup>
        </Form>
        <Button onClick={addRecord}>
          Înregistrare unitate sange
        </Button>
      </div>
    );
  }

  return (
    <div>
      <p><small>Alege tabelul</small></p>
    </div>
  );
}

function Afisare(set){
  const [link, setLink] = useState('');
  const [entityList, setEntityList] = useState([]);

  const getRecords = () => {
    if(_.isEqual(set.set, 'cadru_medical')){
      setLink('http://localhost:3001/records/cadru_medical');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'centru_transfuzie_sanguina')){
      setLink('http://localhost:3001/records/centru_transfuzie_sanguina');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'distribuire')){
      setLink('http://localhost:3001/records/distribuire');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'donator')){
      setLink('http://localhost:3001/records/donator');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'echipament')){
      setLink('http://localhost:3001/records/echipament');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'fractionare_unitate_de_sange')){
      setLink('http://localhost:3001/records/fractionare_unitate_de_sange');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'persoana')){
      setLink('http://localhost:3001/records/persoana');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'primitor')){
      setLink('http://localhost:3001/records/primitor');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'produse_sange')){
      setLink('http://localhost:3001/records/produse_sange');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'recoltare_sange')){
      setLink('http://localhost:3001/records/recoltare_sange');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'spital')){
      setLink('http://localhost:3001/records/spital');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'sponsor')){
      setLink('http://localhost:3001/records/sponsor');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
    if(_.isEqual(set.set, 'unitate_sange')){
      setLink('http://localhost:3001/records/unitate_sange');
      Axios.get(link).then((response) => {
        setEntityList(response.data);
      })
    }
  }

  const listItems = Array.from(entityList).map((val, key) => {
    <div className="card mt-3">
      <div className="card-header">
        Cadru medical#{key+1}
      </div>
      <div className="card-body">
        <h5 className="card-title">{val.nume_cadru} {val.prenume_cadru}</h5>
        <p className="card-text">{val.CNP_cadru}</p>
        <p className="card-text">{val.salariu} lei</p>
        <p className="card-text">{val.data_angajare}</p>
      </div>
    </div>
  })

  if(_.isEqual(set.set, 'cadru_medical')){
    return (
      <div id="card2" className="mt-5">
        <Button onClick={getRecords}>Afisare rezultate</Button>
        {listItems}
      </div>
    )
  }

  return (
    <div>
      <p><small>Nu vrea frate...</small></p>
    </div>
  );

}

function App() {
  const [link, setLink] = useState('');
  const [tabel, setTabel] = useState('');

  // const updateDonatorAdresa = (ID_donator) => {
  //   Axios.put('http://localhost:3001/update', 
  //   {
  //     adresa: newAdresa,
  //     ID_donator: ID_donator
  //   }).then((response) => {
  //     setDonatorList(donatorList.map((val) => {
  //       return val.ID_donator == ID_donator ? {
  //         ID_donator: val.ID_donator,
  //         nume: val.nume,
  //         prenume: val.prenume,
  //         adresa: newAdresa
  //       } : val
  //     }))
  //   });
  // };

  // const deleteDonator = (ID_donator) => {
  //   Axios.delete(`http://localhost:3001/delete/${ID_donator}`).then((response) => {
  //     setDonatorList(donatorList.filter((val) => {
  //       return val.ID_donator != ID_donator;
  //     }))
  //   });
  // }

  return (
    <div className="App">
      <Container className="p-3">
        <div id="card1" className=" mt-5 mb-5">
          <div className="formular">
                <h3>Dashboard</h3>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Tabel:</label>
                  <div className="col-sm-10">
                    <select className="form-select" onChange={(event) => {
                      setTabel(event.target.value);
                      console.log(event.target.value);
                      <Tabel set={event.target.value}></Tabel>
                    }}>
                      <option selected>Alege tabelul</option>
                      <option value="centru_transfuzie_sanguina">Centru transfuzie sanguina</option>
                      <option value="cadru_medical">Cadru medical</option>
                      <option value="distribuire">Distribuire</option>
                      <option value="donator">Donator</option>
                      <option value="echipament">Echipament</option>
                      <option value="fractionare_unitate_de_sange">Fractionare unitate de sange</option>
                      <option value="persoana">Persoana</option>
                      <option value="primitor">Primitor</option>
                      <option value="produse_sange">Produse sange</option>
                      <option value="recoltare_sange">Recoltare sange</option>
                      <option value="spital">Spital</option>
                      <option value="sponsor">Sponsor</option>
                      <option value="unitate_sange">Unitate sange</option>
                    </select>
                  </div>
                </div>
          </div>
        <Tabel set={tabel}></Tabel>
        </div>
        <Afisare set={tabel}></Afisare>
      </Container>
    </div>
  );
}

export default App;

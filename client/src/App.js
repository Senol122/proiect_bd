import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [adresa, setAdresa] = useState('');

  const [newAdresa, setNewAdresa] = useState('');

  const [donatorList, setDonatorList] = useState([]);

  const [tabel, setTabel] = useState('');

  // const addDonator = () => {
  //   Axios.post('http://localhost:3001/create', 
  //   {nume: nume,
  //    prenume: prenume,
  //    adresa: adresa
  //   }).then(() => {
  //     console.log('Succes fraiere');
  //   });
  // }

  // const getDonator = () => {
  //   Axios.get('http://localhost:3001/donatori').then((response) => {
  //     setDonatorList(response.data);
  //   })
  // }

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
            <Form>
              <FormGroup>
                <h3>Dashboard</h3>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Tabel:</label>
                  <div className="col-sm-10">
                    <select className="form-select" onChange={(event) => {
                      setTabel(event.target.value);
                      console.log(event.target.value);
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
              </FormGroup>
            </Form>
          </div>
          <Form>
            <FormGroup>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Nume:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Introduceți numele..." onChange={(event) => {setNume(event.target.value);
                }}/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Prenume:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Introduceți prenumele..." onChange={(event) => {setPrenume(event.target.value);
                }}/>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Adresa:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="Introduceți adresa..." onChange={(event) => {setAdresa(event.target.value);
                }}/>
              </div>
            </div>
            </FormGroup>
          </Form>
          <Button>
            Înregistrare donator
          </Button>
        </div>
        <div id="card2" className="mt-5">
          <Button>
            Afișare donatori
          </Button>

          {donatorList.map((val, key) => {
            return <div className="card mt-3">
                    <div className="card-header">
                      Donator#{key+1}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{val.nume} {val.prenume}</h5>
                      <p className="card-text">{val.adresa}</p>
                      <input type="text" className="form-control mt-3" placeholder="Scrie o nouă adresă..." onChange={(event) => {setNewAdresa(event.target.value);
                      }}/>
                      <Button className="mt-3">
                        Modificare adresă
                      </Button>
                      <Button className="mt-3 ml-3">
                        Ștergere înregistrare
                      </Button>
                    </div>
                  </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;

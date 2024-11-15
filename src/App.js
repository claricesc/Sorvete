import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Card } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Importe o FaPlus corretamente

function App() {
  const [tipo_base, settipo_base] = useState('');
  
  const envio = (event) => {
    event.preventDefault();
    const novoproduto = { tipo_base };
    axios.post('http://localhost:3001/produtos', novoproduto)
      .then(() => {
        alert('Produto cadastrado com sucesso!');
      })
      .catch((erro) => {
        alert('Erro ao cadastrar produto: ' + erro.message);
      });
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Monte seu sorvete com a gente!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Cutrin's freezeria<a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br /><br /><br /><br />
      <Container className='centro'>
        <Row>
          <Col sm={1}></Col>
          <Col sm={1}></Col>
          <Col sm={6} >
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }} className='centro'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='centro'>
                <form onSubmit={envio}>
                  <div >
                    <div style={{ display: 'flex', gap: '20px' }} className='centro' >
                      <label style={{ flex: 1 }} >
                        <div style={{ color: 'black' }} className='centro'>Escolha da base</div>
                        <button class="button button2"
                        value={tipo_base} onChange={(e) => settipo_base(e.target.value)}
                        >Milk shake</button>
                        <button class="button button2">Sundae</button>
                        <button class="button button2">Casquinha</button>
                      </label>
                    </div>
                  </div>
                  <Button type="submit"
                    style={{ borderRadius: '4px' }}>Proximo</Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br /><br /><br /><br /><br />
      <Container>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
        </div>
      </Container>

    </>
  );
}

export default App;

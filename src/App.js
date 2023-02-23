import React, { useEffect, useState } from 'react';
import logo from './TBBTLogo.svg';
import pilot from './pilot.jpg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import { alignPropType } from 'react-bootstrap/esm/types';
//npm install
//npm install react-bootstrap bootstrap
//npm run start

function App() {
  const [apiData, setObj] = useState({});
  var episode;

  useEffect(() => {
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    .then(res => console.log(res))
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => {
      setObj(data);
    })
    .then(() => {
      console.log(apiData);
    });
  }, []);
  
  const onClick = () => {
    
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
      .then(res => res.json())
      .then(data => {
        setObj(data);
      })
      .then(() => {
        console.log({ apiData });
      });

    console.log({ apiData });
    console.log("Clicked!")
    episode = getEpisode(0);
    console.log(episode);
    
  }
  
  const getEpisode = (index) => {
    return apiData.data._embedded.episodes[index]
  }

  return (
    
    <div className="App">
    <Container>
        <Row>
          <Card style={{ width: '100vw' }}>
            <Card.Body>
              <Card.Title><h1>Big Bang Theory Episode Directory</h1></Card.Title>
              <img style={{width: '5em'}} src={logo} alt="Imagine Show Logo Here" />
            </Card.Body>
          <Button variant="primary" onClick={onClick} style={{ marginBottom: '2vh', marginLeft: 'auto', marginRight: 'auto'}}>Update Data</Button>
          </Card>
        </Row>
        
        <Row style={{ marginTop: '2vh'}}>
          <Col xs={5}>
            <Card style={{ width: '65'}}>
              <Card.Body>
                <Card.Title>
                  <h4>Episode List</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        
          <Col>
            <Card style={{}}>
              <Card.Body>
                <Card.Title>
                  <h4>Title</h4>
                </Card.Title>
                <Card body>
                  Episode Information
                </Card>
                <Card.Text style={{marginTop: ' 2vh'}}>
                  Episode Description
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={pilot}/>
            </Card>
          </Col>
        </Row>

      </Container>


      </div>

    
  );
}

      /*
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h1>Big Bang Theory Episode Directory <span class="align-middle"><img src={logo} alt="Imagine the show's logo here" /></span></h1>
            </div>
          </div>
        </div>

        <div className="card" style="">
          
        </div>

      
        <br></br>
      */

export default App;

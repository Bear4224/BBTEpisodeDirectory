import React, { useState } from 'react';
import logo from './TBBTLogo.svg';
import pilot from './pilot.jpg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { alignPropType } from 'react-bootstrap/esm/types';
//npm install
//npm install react-boostrap bootstrap
//npm run start

function App() {
  const [apiData, setObj] = useState('Hello');
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
  }

  /*
  
  */

  return (
    <>
      <div className="App">

      <Card className='mx-auto' style={{ width: '50rem'}}>
        <Card.Body>
          <Card.Title>Big Bang Theory Episode Data</Card.Title>
          <Card.Text>
            Get it? Pilot episode?
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={pilot}/>
      </Card>
      
      <Button variant="primary" onClick={onClick}>Update Data</Button>
      
      </div>

    </>
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

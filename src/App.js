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
  const [apiData, setObj] = useState([]);
  const [episode, setEp] = useState({ "id":2913,
                                      "url":"http://www.tvmaze.com/episodes/2913/the-big-bang-theory-1x01-pilot",
                                      "name":"Pilot",
                                      "season":1,
                                      "number":1,
                                      "airdate":"2007-09-24",
                                      "airtime":"20:30",
                                      "airstamp":"2007-09-25T00:30:00+00:00",
                                      "runtime":30,
                                      "image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/4/12368.jpg",
                                      "original":"http://static.tvmaze.com/uploads/images/original_untouched/4/12368.jpg"},
                                      "summary":"<p>Is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of \"beautiful minds\" that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door. Sheldon, Leonard's roommate, is quite content spending his nights playing Klingon Boggle with their socially dysfunctional friends, fellow Cal Tech scientists Wolowitz and Koothrappali. However, Leonard sees in Penny a whole new universe of possibilities... including love.</p>",
                                      "_links":{"self":{"href":"http://api.tvmaze.com/episodes/2913"}}
                                    });
  
  useEffect(() => {
    fetch('https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt361642/bbt/episodes')
    .then(res => res.json())
    .then(data => {
      const episodeList = data.data._embedded.episodes
      setObj(episodeList);
      console.log("Fetched")})
    //episode = getEpisode(1)
    //console.log(episode)
  }, []);
  
  const onClick = () => {
    console.log(episode)
    setEp(getEpisode(4))
    console.log(episode)
  }
  
  const getEpisode = (index) => {
    return apiData[index]
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
                  <h4>{episode.name}</h4>
                </Card.Title>
                <Card body>
                  <Container>
                    <Row>
                      <Col>Season: {episode.season}</Col>
                      <Col>Episode: {episode.number}</Col>
                      <Col>Aired: {episode.airdate}</Col>
                      <Col>Length: {episode.airtime}</Col>
                    </Row>
                  </Container>
                </Card>
                <Card.Text style={{marginTop: ' 2vh'}}>
                  <div dangerouslySetInnerHTML={{__html: episode.summary}} />
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={episode.image.medium}/>
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

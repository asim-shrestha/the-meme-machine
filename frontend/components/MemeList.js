import React from 'react';
import MemeCard from './MemeCard';
import {Container, Col, Row} from 'react-bootstrap';
import { $axios } from '../plugins/axios';
import { db } from '../plugins/firebase';

const MemeList = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    db.ref("memes").on("value", snapshot => {
        let m = [];
        snapshot.forEach((snap) => {m.push(snap.val());});
        setMemes(m);
        console.log(m);
    })}, [])

  return (
    <Container fluid>
      <Row className="justify-content-center">
      {memes.map(meme =>{ return (
        <MemeCard
        key={meme.id}
        image={meme.url}
        stars={meme.stars}
        comments={meme.comments}
        />
        )})}
      </Row>
    </Container>
  )
}

export default MemeList

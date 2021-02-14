import React from 'react';
import MemeCard from './MemeCard';
import {Container, Row} from 'react-bootstrap';
import MemeModal from './MemeModal';
import { db } from '../plugins/firebase';

const MemeList = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    db.ref("memes").on("value", snapshot => {
        let m = [];
        snapshot.forEach((snap) => {m.push(snap.val());});
        setMemes(m);
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
        onClick={() => setSelectedMeme(meme)}
        />
        )})}
      </Row>
      <MemeModal
        meme={selectedMeme}
        show={selectedMeme != null}
        onHide={() => setSelectedMeme(null)}
      />
    </Container>
  )
}

export default MemeList

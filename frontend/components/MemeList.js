import React from 'react';
import MemeCard from './MemeCard';
import {Container, Row} from 'react-bootstrap';
import MemeModal from './MemeModal';

const MemeList = ({memes}) => {
  const [selectedMeme, setSelectedMeme] = React.useState(null);

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

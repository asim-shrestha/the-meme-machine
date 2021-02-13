import React from 'react';
import MemeCard from './MemeCard';
import {Container, Col, Row} from 'react-bootstrap';
import {ALL_MEMES} from '../util/data'

const MemeList = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    setMemes(ALL_MEMES);
  }, [])

  return (
    <Container fluid>
      <Row className="justify-content-center">
      {memes.map(meme =>{ return (
        <MemeCard
        image={meme.image}
        stars={meme.stars}
        comments={meme.comments}
        />
        )})}
      </Row>
    </Container>
  )
}

export default MemeList

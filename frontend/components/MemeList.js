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
      {memes.map(meme =>{ return (
        <MemeCard
        key={meme.key}
        image={meme.image}
        stars={meme.stars}
        comments={meme.comments}
        />
        )})}
    </Container>
  )
}

export default MemeList

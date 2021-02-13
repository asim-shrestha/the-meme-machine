import React from 'react';
import MemeCard from './MemeCard';
import {Container, Col, Row} from 'react-bootstrap';
import {ALL_MEMES, QUERIES} from '../util/data'
import Columns from 'react-columns';

const MemeList = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    setMemes(ALL_MEMES);
  }, [])



  return (
  <Columns queries={QUERIES}>
      {memes.map(meme =>{ return (
        <MemeCard
        key={meme.key}
        image={meme.image}
        stars={meme.stars}
        comments={meme.comments}
        />
        )})}
    </Columns>
  )
}

export default MemeList

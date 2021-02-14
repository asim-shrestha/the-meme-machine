import React from 'react';
import MemeCard from './MemeCard';
import {Container, Col, Row} from 'react-bootstrap';
import { $axios } from '../plugins/axios';

const MemeList = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    (async function anyNameFunction() {
      try {
        setMemes((await $axios.get('/meme')).data);
      } catch (e) {
        console.log(e)
      }
    })();
  }, [])

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

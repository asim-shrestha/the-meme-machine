import React from 'react';
import MemeCard from './MemeCard';
import MemeModal from './MemeModal';
import {QUERIES} from '../util/data'
import Columns from 'react-columns';
import {Container, Row} from 'react-bootstrap';

const MemeList = ({memes, size}) => {
  const [selectedMeme, setSelectedMeme] = React.useState(null);

  return (
    <div className="memelist" style={{"padding":"5em 0"}}>
      <Columns queries={QUERIES}>
        {memes.map(meme =>{ return (
          <MemeCard
          key={meme.key}
          image={meme.url}
          comments={meme.comments}
          onClick={() => setSelectedMeme(meme)}
          size={size}
          />
          )})
        }
      </Columns>
      <MemeModal
        meme={selectedMeme}
        show={selectedMeme != null}
        onHide={() => setSelectedMeme(null)}
      />
    </div>
  )
}

export default MemeList

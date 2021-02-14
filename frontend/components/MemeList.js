import React from 'react';
import MemeCard from './MemeCard';
import MemeModal from './MemeModal';
import {QUERIES} from '../util/data'
import Columns from 'react-columns';
import {Container, Row} from 'react-bootstrap';

const MemeList = ({memes, size, origin}) => {
  const [selectedMeme, setSelectedMeme] = React.useState(null);

  let filteredMemes = memes.filter((theMeme) => {
    return theMeme.url;
  });

  return (
    <div className="memelist" style={{"padding":"5em 0"}}>
      <Columns queries={QUERIES}>
        {filteredMemes.map(meme =>{ return (
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
        prev={origin}
      />
    </div>
  )
}

export default MemeList

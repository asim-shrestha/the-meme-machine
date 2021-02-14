import React from 'react';
import MemeCard from './MemeCard';
import MemeModal from './MemeModal';
import {QUERIES} from '../util/data'
import Columns from 'react-columns';

const MemeList = ({memes}) => {
  const [selectedMeme, setSelectedMeme] = React.useState(null);

  return (
    <Columns queries={QUERIES}>
      {memes.map(meme =>{ return (
        <MemeCard
        key={meme.id}
        image={meme.url}
        stars={meme.stars}
        comments={meme.comments}
        onClick={() => setSelectedMeme(meme)}
        />
        )})}
      <MemeModal
        meme={selectedMeme}
        show={selectedMeme != null}
        onHide={() => setSelectedMeme(null)}
      />
    </Columns>
  )
}

export default MemeList

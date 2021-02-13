import React, { useState } from "react";

const MemeGenerator = ({image, topText, bottomText}) => {

  return (
    <>
      <div className='meme' style={{width: "400px"}}>
        <img src={image} alt='' />
        <h2 className='top'>{topText}</h2>
        <h2 className='bottom'>{bottomText}</h2>
      </div>
    </>
  );
};

export default MemeGenerator;

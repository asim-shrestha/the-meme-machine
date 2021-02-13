import React, { useState } from "react";
import styles from '../styles/meme.module.css'
const MemeGenerator = ({image, topText, bottomText}) => {

  return (
    <>
      <div className={styles.meme} style={{width: "400px"}}>
        <img src={image} alt='' />
        <h2 className={styles.top}>{topText}</h2>
        <h2 className={styles.bottom}>{bottomText}</h2>
      </div>
    </>
  );
};

export default MemeGenerator;

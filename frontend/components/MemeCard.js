import React from "react";
import styles from '../styles/memecard.module.css'

const MemeCard = ({image, stars, comments}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} variant="top" src={image}/>
      <div style={{padding: "5px"}}>
        <h5>
          <span style={{paddingRight: "1em"}}>⭐ {stars}{ }</span>
          <span>💬 {comments}</span>
        </h5>
      </div>
    </div>
  );
};

export default MemeCard;

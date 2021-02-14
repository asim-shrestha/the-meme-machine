import React from "react";
import styles from '../styles/memecard.module.css'

const MemeCard = ({image, stars, comments, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} variant="top" src={image}/>
      <div className={styles.react}>
        <h5>
          <span style={{paddingRight: "1em"}}>⭐ {stars}{ }</span>
          <span>💬 {comments}</span>
        </h5>
      </div>
    </div>
  );
};

export default MemeCard;

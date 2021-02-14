import React from "react";
import styles from '../styles/memecard.module.css'

const MemeCard = ({image, stars, comments, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} variant="top" src={image}/>
      <div style={{padding: "5px"}}>
        <h5>
          <span style={{color: "black"}}>💬 {comments}</span>
        </h5>
      </div>
    </div>
  );
};

export default MemeCard;

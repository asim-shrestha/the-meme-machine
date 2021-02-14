import React from "react";
import styles from '../styles/memecard.module.css'

const MemeCard = ({image, stars, comments, onClick, size}) => {
  let style = {};
  style = size == "lg" ? {width: "600px"} : style
  style = size == "sm" ? {width: "150px"} : style
  return (
    <div className={styles.card} onClick={onClick ? onClick : () => {}}>
      <img className={styles.image} variant="top" src={image} style={style}/>
      {
        stars && comments ? 
      <div className={styles.react}>
        <h5>
          <span style={{color: "black"}}>💬 {comments}</span>
        </h5>
      </div> : ''
}
    </div>
  );
};

export default MemeCard;

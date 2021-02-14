import React from "react";
import styles from '../styles/memecard.module.css'

const MemeCard = ({image, comments, onClick, size}) => {
  let style = {};
  style = size == "lg" ? {width: "600px"} : style
  style = size == "sm" ? {width: "150px"} : style
  return (
    <div className={styles.card + " m-1"} onClick={onClick ? onClick : () => {}} style={size == "sm" ? {boxShadow: "0 0 4px"}: {}}>
      <img className={styles.image} variant="top" src={image} style={style}/>
      {
        comments !== undefined? 
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

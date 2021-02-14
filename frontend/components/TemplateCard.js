import React from "react";
import styles from '../styles/memecard.module.css'

const TemplateCard = ({template, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} variant="top" src={template.url}/>
      <div style={{padding: "5px"}}>
        <h5>
          {template.name}
        </h5>
      </div>
    </div>
  );
};

export default TemplateCard;

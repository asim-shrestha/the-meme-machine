import React from "react";
import styles from '../styles/templatecard.module.css'

const TemplateCard = ({template, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} variant="top" src={template.url}/>
      <div style={{padding: "0.5em"}}>
        <h5 style={{color: "black"}}>
          {template.name.toLowerCase()}
        </h5>
      </div>
    </div>
  );
};

export default TemplateCard;

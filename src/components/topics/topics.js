import React from "react";
import styles from './topics.module.css';
import Arrow from './arrow-left-circle.svg';

function Topics () {
    return (
        <div className={styles.topicsContainer}>
                
                <button className={styles.button}>
                    <img className={styles.arrowButton} src={Arrow} alt="show up topics"></img>
                </button>
        </div>
    )
}


export default Topics;
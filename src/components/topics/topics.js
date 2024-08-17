import React, {useState} from "react";
import styles from './topics.module.css';
import Arrow from './arrow-left-circle.svg';

function Topics () {

    const [showTopic, setShowTopic] = useState(false);

    const toggleTopics = () => {
        setShowTopic(!showTopic);
    }
    return (
        <div className={styles.topicsContainer}>
                
                <button onClick={toggleTopics} className={styles.button}>
                    <img className={styles.arrowButton} src={Arrow} alt="show up topics"></img>
                </button>


                {showTopic ?
                        <div className={styles.topics}

                        ></div>
                         :
                         <></>
                            }

                
        </div>
    )
}


export default Topics;
import React, {useState} from "react";
import styles from './topics.module.css';
import Arrowleft from './arrow-left-circle.svg';
import Arrowright from './arrow-right-circle.svg';

function Topics () {

    const [showTopic, setShowTopic] = useState(false);

    const toggleTopics = () => {
        setShowTopic(!showTopic);
    }
    return (
       <main className={styles.main}>
            <div className={styles.topicsContainer}>
            <button onClick={toggleTopics} className={styles.button}>
                    <img className={styles.arrowButton} src={Arrowleft} alt="show up topics"></img>
                </button>
                
            </div>

            {showTopic ?
                        <div className={styles.topics}>
                            <header className={styles.header}>
                                <button onClick={toggleTopics} className={styles.button}>
                                    <img className={styles.arrowButton} src={Arrowright} alt="close the tab"></img>
                                </button>                                
                            </header>
                        </div>
                         :
                         <></>
                            }
        </main>
    )
}


export default Topics;

/*
    
                <button onClick={toggleTopics} className={styles.button}>
                    <img className={styles.arrowButton} src={Arrow} alt="show up topics"></img>
                </button>


                {showTopic ?
                        <div className={styles.topics}

                        ></div>
                         :
                         <></>
                            }






*/
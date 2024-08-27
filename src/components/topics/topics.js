import React, {useState, useEffect} from "react";
import styles from './topics.module.css';
import Arrowleft from './arrow-left-circle.svg';
import Arrowright from './arrow-right-circle.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits, fetchPosts } from '../api/redditSlice';


function Topics () {

    const [showTopic, setShowTopic] = useState(false);

    const toggleTopics = () => {
        setShowTopic(!showTopic);
    }

    const dispatch = useDispatch();
    const { subreddits, status, error } = useSelector((state) => state.reddit);

    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchSubreddits());
        }
        }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
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
                            <main>
                            <ul>
                                {subreddits.map((subreddit) => (
                                <li key={subreddit.id}>
                                <button onClick={() => dispatch(fetchPosts(subreddit.display_name))}>
                                {subreddit.display_name_prefixed}
                                </button>
                                </li>
                                ))}
                                </ul>
                            </main>
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
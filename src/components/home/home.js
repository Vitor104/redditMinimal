import styles from './home.module.css';
import Nav from '../nav/nav';
import Topics from '../topics/topics';
import { getSubreddits } from '../api/api';

function Home () {

    const subreddits = getSubreddits;
    return (
        <div className={styles.homeContainer}>
            <Nav />
            <div className={styles.contents}>
                <ul>
                {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
          >
            </li>
                )}
                </ul>
            </div>
            <Topics />
        </div>  
    )
}


export default Home;
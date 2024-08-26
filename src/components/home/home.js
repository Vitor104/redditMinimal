import styles from './home.module.css';
import Nav from '../nav/nav';
import Topics from '../topics/topics';
import RedditList from '../redditList/redditList';


function Home () {

    
    return (
        <div className={styles.homeContainer}>
            <Nav />
            <Topics />
            <RedditList />
        </div>  
    )
}


export default Home;
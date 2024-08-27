import styles from './home.module.css';
import Nav from '../nav/nav';
import Topics from '../topics/topics';
import PostsList from '../postlist/postList';


function Home () {

    
    return (
        <div className={styles.homeContainer}>
            <Nav />
            <Topics />
            <PostsList />
        </div>  
    )
}


export default Home;
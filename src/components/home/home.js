import styles from './home.module.css';
import Nav from '../nav/nav';
import Topics from '../topics/topics';

function Home () {
    return (
        <div className={styles.homeContainer}>
            <Nav />
            
            <div className={styles.contents}>
                <h1>ola</h1>
            </div>
            <Topics />
        </div>  
    )
}


export default Home;
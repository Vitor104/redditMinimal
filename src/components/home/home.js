import styles from './home.module.css';
import Nav from '../nav/nav';

function Home () {
    return (
        <div className={styles.homeContainer}>
            <Nav />
            <h1>ola</h1>
        </div>
    )
}


export default Home;
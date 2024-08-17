import React, {useState} from "react";
import styles from './nav.module.css';
import { NavLink } from "react-router-dom";
import listImg from './list.svg';
import redditImg from './reddit.svg';


function Nav () {

    

    return (
        <nav className={styles.navContainer}>
            <div className={styles.nameAndLogo}>
                <img className={styles.logo} src={redditImg} alt="logo"></img>
                <h1 className={styles.nome}>RedditMinimal</h1>
            </div>
            <div className={styles.inputContainer}>
                <input className={styles.inputSearch} type="text" placeholder="Search"></input>
                <button className={styles.button}>Search</button>
            </div>
            
              
            
        </nav>
    )
}


export default Nav;
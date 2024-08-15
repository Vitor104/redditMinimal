import React from "react";
import styles from './nav.module.css';
import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <nav className={styles.navContainer}>
            <h1>
                RedditMinimal
            </h1>
        </nav>
    )
}


export default Nav;
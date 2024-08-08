import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Footer(){
    return(
        <footer className={styles.container}>
            <section className={styles.content}>
                <img className={styles.logo} src={icons['logo']}/>           
                <button className={styles.started_button}>
                    Get Started
                </button>     
            </section>
        </footer>
    )
}

export default Footer;
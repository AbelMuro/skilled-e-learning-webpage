import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Header () {
    return(
        <>
        <img className={styles.heroDesktop}/>
        <img className={styles.heroTablet}/>
        <img className={styles.heroMobile}/>
        <header className={styles.container}>
            <img className={styles.logo} src={icons['logo']}/>
            <button className={styles.start_button}>
                Get Started
            </button>
            <section className={styles.content}>
                <h1>
                    Maximize skill, minimize budget
                </h1>
                <p>
                    Our modern courses across a range of 
                    in-demand skills will give you the 
                    knowledge you need to live the life 
                    you want.
                </p>
                <button>
                    Get Started
                </button>
            </section>
            <img className={styles.image}/>
        </header>        
        </>

    )
}

export default Header;
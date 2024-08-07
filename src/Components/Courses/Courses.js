import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Courses(){
    return(
        <section className={styles.container}>
            <div className={styles.message}>
                <h1>
                    Check out our most popular courses!
                </h1>
            </div>  
            <article className={styles.course}>
                <img src={icons['animation']}/>
                <strong>
                    Animation
                </strong>
                <p>
                    Learn the latest animation techniques 
                    to create stunning motion design and 
                    captivate your audience.
                </p>
                <button>
                    Get Started
                </button>
            </article>
            <article className={styles.course}>
                <img src={icons['design']}/>
                <strong>
                    Design
                </strong>
                <p>
                    Create beautiful, usable interfaces 
                    to help shape the future of how 
                    the web looks.
                </p>
                <button>
                    Get Started
                </button>
            </article>
            <article className={styles.course}>
                <img src={icons['photography']}/>
                <strong>
                    Photography
                </strong>
                <p>
                    Explore critical fundamentals like 
                    lighting, composition, and focus 
                    to capture exceptional photos.
                </p>
                <button>
                    Get Started
                </button>
            </article>
            <article className={styles.course}>
                <img src={icons['crypto']}/>
                <strong>
                    Crypto
                </strong>
                <p>
                    All you need to know to get started 
                    investing in crypto. Go from 
                    beginner to advanced with this 
                    54 hour course.
                </p>
                <button>
                    Get Started
                </button>
            </article>
            <article className={styles.course}>
                <img src={icons['business']}/>
                <strong>
                    Business
                </strong>
                <p>
                    A step-by-step playbook to 
                    help you start, scale,
                    and sustain your business 
                    without outside investment.
                </p>
                <button>
                    Get Started
                </button>
            </article>
        </section>
    )
}

export default Courses;
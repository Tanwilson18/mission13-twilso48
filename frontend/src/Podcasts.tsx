import React from 'react';
import styles from './blah.module.css';

//Podcast funtion that displays a title and redirects to joel;s podcats link
function JoelPodcast() {
  return (
    <>
      <div className="col align-self-center text-start">
        <h2 className={styles.h1}>Podcast Page!</h2>
        <p className={styles.p}>
          Listen to my most recent podcast:{' '}
          <a href="https://baconsale.com/" target="_blank">
            My Podcast!
          </a>
        </p>
      </div>
    </>
  );
}

export default JoelPodcast;

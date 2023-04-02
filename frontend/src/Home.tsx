import React from 'react';
import styles from './blah.module.css';

//This function displays Joel pic
function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
            className={styles.logo}
          />
        </div>
        {/* <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div> */}
        <div>
          <p className={styles.p}>
            Welcome to The Ultimate Movie Collection Provided by Joel Hilton
            <br />
            Here is a list of movie recommendations!
          </p>
        </div>
      </div>
    </>
  );
}
export default TopBanner;

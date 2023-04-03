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
        <div>
          <h5 className={styles.p}>
            Welcome to The Ultimate Movie Collection Site Provided by Joel
            Hilton
          </h5>
        </div>
      </div>
    </>
  );
}
export default TopBanner;

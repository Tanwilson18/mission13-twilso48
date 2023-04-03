import React from 'react';
import styles from './blah.module.css';

//This function displays Joel pic
function Header(props: any) {
  return (
    <>
      <div>
        <h4 className={styles.p}>
          Welcome to The Ultimate Movie Collection Site Provided by Joel Hilton
        </h4>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="Joel Hilton"
            className={styles.logo}
          />
        </div>
      </div>
    </>
  );
}
export default Header;

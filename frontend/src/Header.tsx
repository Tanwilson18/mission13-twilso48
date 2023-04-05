import React from 'react';
import styles from './blah.module.css';

//This function displays Joel pic
function Header(props: any) {
  return (
    <>
      <div>
        <h4 className="text-center">
          Welcome to The Ultimate Movie Collection Site Provided by Joel Hilton
        </h4>
      </div>
      <div className="align-items-center">
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton" />
      </div>
    </>
  );
}
export default Header;

import { Link } from 'react-router-dom';
import styles from './blah.module.css';

// navbar
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>
            HomePage
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/Podcast" className={styles.navbarLink}>
            Podcast
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/MovieList" className={styles.navbarLink}>
            MovieList
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

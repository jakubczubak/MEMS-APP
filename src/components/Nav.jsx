import { Link } from 'react-router-dom'
import styles from '../components/Nav.module.css'

export function Nav() {

    return <nav>
    <ul>
      <li>
        <Link className={styles.hotLink} to="/hot">⭐ HOT ⭐</Link>
      </li>
      <li>
        <Link className={styles.link} to="/regural">REGURAL</Link>
      </li>
    </ul>
  </nav>
}
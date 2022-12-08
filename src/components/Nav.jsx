import { Link } from "react-router-dom";
import styles from "../components/Nav.module.css";
import { useSelector } from "react-redux";

export function Nav() {
  const currentRoute = useSelector((state) => state.route);

  const selectedRouteClasses = `${styles.link} ${styles.selectedLink}`;

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={
              currentRoute === "hot" ? selectedRouteClasses : styles.link
            }
            to="/hot"
          >
            ⭐ HOT ⭐
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute === "hot" ? styles.link : selectedRouteClasses
            }
            to="/regural"
          >
            REGURAL
          </Link>
        </li>
      </ul>
      <Link className={`${styles.link} ${styles.add_meme}`} to="/add-meme">UPLOAD 😊</Link>

    </nav>
  );
}

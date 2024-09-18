import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return(
        <header className={styles.header}>
          <p className={styles.logo}>LabCast</p>
  
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/Consultoria">Consultoria</Link>
          <Link to="/Playlist">Playlist</Link>
        </nav>
      </header>
    )
}

export default Header;
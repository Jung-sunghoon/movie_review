import { Link } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => {
  return (
    <div id={styles.header}>
      <div className={styles.headerMenu}></div>
    </div>
  )
}

export default Header

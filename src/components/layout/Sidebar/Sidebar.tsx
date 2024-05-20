import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'

const Sidebar = () => {
  return (
    <div id={styles.sidebar}>
      <div>
        <div>
          <Link to="/">
            <HomeIcon className={styles.sidebarIcon} sx={{ fontSize: 50 }} />
          </Link>
        </div>
        <div>
          <Link to="/search">
            <SearchIcon className={styles.sidebarIcon} sx={{ fontSize: 50 }} />
          </Link>
        </div>
        <div>
          <Link to="/mypage">
            <PersonIcon className={styles.sidebarIcon} sx={{ fontSize: 50 }} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

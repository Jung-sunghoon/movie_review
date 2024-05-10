import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div id={styles.sidebar}>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div>
          <Link to="/Search">Search</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

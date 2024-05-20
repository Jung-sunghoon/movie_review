import Activity from '../../components/activity/Activity'
import BoxOffice from '../../components/boxOffice/BoxOffice'
import LatestReview from '../../components/latestReview/LatestReview'
import styles from './home.module.css'

const Home = () => {
  return (
    <div id={styles.home}>
      <div>홈 화면</div>
      <div className={styles.homeMain}>
        <BoxOffice />
        <LatestReview />
        <Activity />
      </div>
    </div>
  )
}

export default Home

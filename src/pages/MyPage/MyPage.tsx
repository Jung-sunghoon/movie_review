import GoogleLoginBtn from '../../components/googleLogin/GoogleLoginBtn'
import Profile from '../../components/profile/Profile'

const MyPage = () => {
  return (
    <>
      <div>마이 페이지</div>
      <div>
        <GoogleLoginBtn />
      </div>
      <div>
        <Profile />
      </div>
    </>
  )
}

export default MyPage

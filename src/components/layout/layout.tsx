import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div
          style={{
            margin: '20px 20px 0 20px',
            width: '100%',
          }}
        >
          <Header />
          <main style={{ marginBottom: '0', height: '100vh' }}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

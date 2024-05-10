import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginBottom: '0' }}>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout

import { Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './components/layout/layout'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import MyPage from './pages/MyPage/MyPage'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

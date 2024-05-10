import { Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './components/layout/layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

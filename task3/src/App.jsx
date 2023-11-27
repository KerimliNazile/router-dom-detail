import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Home from './components/Home/index'
import Navbar from './components/Navbar/index'
import Layout from './components/Layout/index'
import Detail from './components/Detail'
import Login from './components/Login/index'
function App() {


  return (
    <>
      <Navbar />
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/:productId' element={<Detail />} ></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App

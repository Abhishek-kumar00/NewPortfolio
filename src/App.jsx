import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <br />
      <Outlet/>
      <br />
      <br />
      <Footer/>
    </>
  )
}

export default App

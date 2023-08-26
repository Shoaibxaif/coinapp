import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Coins from './Components/Coins'
import Exchanges from './Components/Exchanges'
import CoinDetails from './Components/CoinDetails'


const App = () => {
  return (
    <Router>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/exchanges" element={<Exchanges />}></Route>
        <Route path="/coin/:id" element={<CoinDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App

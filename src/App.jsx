

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Crm from './pages/CRM/Crm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="crm" element={<Crm />} />
            {/* <Route path="crm" element={<Crm />} /> */}
            {/* <Route path="analytics" element={<Analytics />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import { Bracelet } from './pages/bracelet/Bracelet'
import { Raincoat } from './pages/raincoat/Raincoat'

export function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/crystal-roman-bracelet" element={<Bracelet />} />
          <Route path="/raincoat" element={<Raincoat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

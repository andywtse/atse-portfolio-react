import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Admin from './pages/Admin/Admin'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

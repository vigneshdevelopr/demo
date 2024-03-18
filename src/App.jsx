import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './Admin/pages/Dashboard'



function App() {

  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/admin/*' element={<Auth />} />
  <Route path='/admin/dashboard' element={<Dashboard />} />
</Routes>      
    </BrowserRouter>
  )
}

export default App

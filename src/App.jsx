
import { Routes, Route } from 'react-router-dom';
import Dasboard from './pages/Dasboard';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Dasboard />} />
    </Routes>

  )
}

export default App



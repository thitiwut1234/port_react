import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigatorBar from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

import DomainHome from '../../domains/DomainHome'
import DomainAbout from '../../domains/DomainAbout'


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <NavigatorBar />
        <Routes>
          <Route path='/' element={<DomainHome /> } />
          <Route path='/about' element={<DomainAbout /> } />

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigatorBar from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

import DomainHome from '../../domains/DomainHome'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavigatorBar />
      </header>
      <content className='App-content' >
      <Routes>
        <Route path='/' element={<DomainHome /> } />
      </Routes>
      </content>
    </div>
    </BrowserRouter>
  );
}

export default App;

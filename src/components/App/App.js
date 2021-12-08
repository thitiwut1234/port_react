import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavigatorBar from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigatorBar />
      </header>

    </div>
  );
}

export default App;

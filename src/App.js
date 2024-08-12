import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>Header</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='*' element={<div>Not Found Page.</div>} />
        </Routes>
        <div>Footer</div>
      </BrowserRouter>
    </div>
  );
}

export default App;

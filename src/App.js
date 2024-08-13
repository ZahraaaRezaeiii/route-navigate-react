import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Error } from './pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState("Zahra")
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header/>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

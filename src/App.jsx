// src/App.jsx  ← replace your existing App.jsx with this
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

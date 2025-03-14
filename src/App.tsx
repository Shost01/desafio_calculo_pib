import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './App.css';
import PIBPage from './pages/pib/PIBPage';
import Table from './pages/pib/Table';
import { PibProvider } from './context/PibContext';

function AppContent() {
  const location = useLocation(); 
  const hideNavbar = location.pathname === "/" || location.pathname === "/home"; 

  return (
    <>
      {!hideNavbar && <Navbar />} 
      
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pib" element={<PIBPage />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <PibProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PibProvider>
  );
}

export default App;

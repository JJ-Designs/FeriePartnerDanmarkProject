import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employee/:id" element={<EmployeesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

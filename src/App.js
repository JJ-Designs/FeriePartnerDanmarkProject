import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employee/:id" element={<EmployeesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

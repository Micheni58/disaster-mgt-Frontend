import './App.css';
import './styles/toastStyles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import routes from './routes/Route';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster 
          position="top-right"
          richColors
          closeButton
          theme="light"
        />
        <div className="min-h-full">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

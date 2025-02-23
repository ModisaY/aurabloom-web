import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Define routes configuration for easier management
const routes = [
  { path: '/', element: <Home /> },
  { path: '/features', element: <Features /> },
  { path: '/about', element: <About /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/contact', element: <Contact /> }
];

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            {routes.map((route) => (
              <Route 
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            {/* Add a catch-all route for 404 if needed */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
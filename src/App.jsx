import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import ArrowToTop from './Components/UI/ArrowToTop.jsx';
import '../src/Style/main.scss';

function App() {
  return (
    /* eslint-disable no-undef */
    <Router basename={process.env.NODE_ENV === 'production' ? '/Portfolio-Lombardo-Kevin' : '/'}>
    {/* eslint-enable no-undef */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <ArrowToTop />
    </Router>
  );
}

export default App;
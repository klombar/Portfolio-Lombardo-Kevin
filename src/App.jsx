import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import ArrowToTop from './Components/UI/ArrowToTop.jsx';
import Error404 from './Pages/Error404.jsx';
import '../src/Style/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ArrowToTop />
    </Router>
  );
}

export default App;

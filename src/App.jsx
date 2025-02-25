import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from '../src/Pages/HomePage/HomePage.jsx';
import ProjectDetails from '../src/Pages/ProjectDetails/ProjectDetails.jsx';
import Error404 from '../src/Pages/Error404/Error404.jsx';
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
    </Router>
  );
}

export default App;

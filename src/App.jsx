import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from './Pages/HomePage.jsx';
import '../src/Style/main.scss';

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/Portfolio-Lombardo-Kevin' : '/'}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
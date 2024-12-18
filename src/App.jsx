import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import HomePage from './Pages/HomePage'
import '../src/Style/main.scss';

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
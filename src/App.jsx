import Header from './Components/Layout/Header/Header.jsx';
import Footer from './Components/Layout/Footer/Footer.jsx';
import HomePage from '../src/Pages/HomePage.jsx';
import '../src/Style/main.scss';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style/style.css';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

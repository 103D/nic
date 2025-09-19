import Header from './component/Header';
import Main from './component/Section/Main';
import Footer from './component/Footer';
import Product from './component/Section/Product';
import styles from '../src/assets/styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

console.log(styles);
function App() {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/case" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

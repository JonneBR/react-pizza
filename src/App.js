import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import { productData } from './components/Products/data';

import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
    </Router>
  );
}

export default App;

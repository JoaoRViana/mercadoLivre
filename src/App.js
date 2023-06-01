import {
  Routes,
  Route,
} from 'react-router-dom'; import './App.css';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/:id" element={ <ProductDetail /> } />
      <Route path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;

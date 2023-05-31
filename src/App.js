import {
  Routes,
  Route,
} from 'react-router-dom'; import './App.css';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/:id" element={ <ProductDetail /> } />
    </Routes>
  );
}

export default App;

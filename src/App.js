import Products from './Components/Products'
import Header from './Components/Header';
import Cart from './Components/Carts'
import Productdetail from './Components/Productdetail';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Products></Products>}></Route>
        <Route path='/detail/:id' element={<Productdetail></Productdetail>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>

    </div>
  );
}

export default App;

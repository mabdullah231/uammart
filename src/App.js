import './App.css';
import { Navbar,Footer } from './components';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Shop, ShopCategory,Product, LoginSignup, Cart,OnlyLogin } from './pages';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/onlylogin' element={<OnlyLogin/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>

    </div>
  );
}

export default App;

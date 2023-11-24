import { useEffect, useState } from 'react';
import './App.css';
// import Nav from './components/Nav';
// import Offers from './components/Offers';
import { Context } from './context'
import s from './style.module.css'
import { useLocalStorage } from './hooks/useLocalStorage';
// import OurProducts from './components/OurProducts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/slice/productsSlice';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Nav from './components/Nav';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  const [ mode, setMode ] = useLocalStorage(false, 'mode')
  // const [mode, Setmode] = useState(() => {
  //   return !!+localStorage.getItem('mode')
  // })
  const changeMode = ({target}) => setMode(target.checked)
  // console.log('mode', mode);
  const dark = mode ? s.dark : ''

  

  // useEffect(() => {
  //   localStorage.setItem('mode', +mode)
  // }, [mode])




  return (
      <Context.Provider value={{mode, changeMode}}>
    <div className={dark}>
      <Nav />
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/product/:productId' element={<ProductPage/>}/>
          <Route path='/cart/' element={<Cart/>}/>
        </Routes>
    </div>
      </Context.Provider>
  );
}

export default App;


{/* <Nav />
<Offers />
<OurProducts /> */}
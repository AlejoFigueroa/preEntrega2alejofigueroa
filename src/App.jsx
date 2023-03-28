
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
const [productos, setProductos] = useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then((Response) =>Response.json())
  .then((data) =>{
    setProductos(data)
  })
},[])


  return (
    <div>
      <Navbar/>
      <h1 className='title'>Mystick Natural</h1>
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<ProductList productos={productos}/>} />
        <Route path='/products/:id' element={<CardDetail/>}/>
        <Route path='/404' element={<h2>404 not found</h2>}/>
      </Routes>
      
    </div>
  )
}

export default App


import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";

function App() {
const [productos, setProductos] = useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(Response =>Response.json() )
  .then(data =>{
    setProductos(data)
  })
},[])

console.log(productos)
  return (
    <div>
      <h1>react + vite</h1>
      <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App

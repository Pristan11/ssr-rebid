import React, { useEffect, useState } from 'react'
import Header from "./headers/Header";
import axios  from "axios";
import Products from "./mainpages/products/Products";
 const App = ()=> {
     const [products, setProducts] = useState([]);
     useEffect(() => {
        axios.get(`https://api.rebid.lk/api/products/search?page=${1}&limit=${page*9}&sort=name&order=ASC`).then(res=> {
            setProducts(res.data.data.items);
            console.log({resProducts: res.data.data.items})
        })
     }, []);

    return (
       <>
         <Header/>
         <Products products={products}/>
      <h1 style={{color: 'red', fontSize: '30px'}}>this is the page</h1>
       </>
    );
}

export default App;

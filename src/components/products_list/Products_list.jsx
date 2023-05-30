import React, { useState, useEffect } from 'react'
import productsService from '../../services/ProductsServices';
import Category from '../categorys/Category';
import Product from '../product/Product'
import styles from './Products_list.module.css'

function Products_list() {
    // 1. TOP STATE - kur desiu gautus duomenis
    const [products, setProducts] = useState([]);

    // 2. gautus duomenis is serviso uzsetinti i state
    const getProducts = () => {
        productsService().then((items)=>{
            setProducts(items);
        })
    }

    // 3. useEffect pakviesti funkcija,
    //  kur gauna duomenis is API ir juos uzsetina i state
    useEffect(() => {
        getProducts();
    }, []);

    console.log(products);
    console.log()
  return (
    <div>
        <Category products={products} />
        <Product products={products} />
    </div>
  )
}

export default Products_list
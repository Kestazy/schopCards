import React, { useState, useEffect } from 'react'
import productsService from '../../services/ProductsServices';
import Category from '../categorys/Category';
import Product from '../product/Product'
import styles from './Products_list.module.css'

function Products_list() {
    // 1. TOP STATE - kur desiu gautus duomenis
    const [products, setProducts] = useState([]);
    // duomenu kopija filtravimui
    const [filteredCategory, setFilteredCategory] = useState([]);
    // pasirinktai kategorijai issaugoti
    const [selectedCategory, setSelectedCategory] = useState('')

    // 2. gautus duomenis is serviso uzsetinti i state
    const getProducts = () => {
        productsService().then((items)=>{
            setProducts(items);
            setFilteredCategory(items);
        })
    }

    // funkcija duomenu filtravimui ir ju uzsetinimui
    useEffect(() => {
        // ifas pargrazinti visus duomenis be filtracijos
        if (selectedCategory === 'all') return setFilteredCategory(products);
        // isfiltruoju prekes pagal kategorijas
        const filtered = products.filter((items) => items.category.includes(selectedCategory));
        setFilteredCategory(filtered)
    }, [selectedCategory])

    // 3. useEffect pakviesti funkcija,
    //  kur gauna duomenis is API ir juos uzsetina i state
    useEffect(() => {
        getProducts();
    }, []);

    console.log(products);
  return (
    <div>
        <Category products={products} setSelectedCategory={setSelectedCategory} />
        <Product filteredCategory={filteredCategory} />
    </div>
  )
}

export default Products_list
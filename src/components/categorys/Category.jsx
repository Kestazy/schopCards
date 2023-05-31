import React, { useState } from 'react'
import styles from './Category.module.css'
import Products_list from '../products_list/Products_list';

function Category(props) {
    console.log(props.products);

    const uniqueCategorys = [ ...new Set(props.products.map((oneCategory) => oneCategory.category)), "all"]

    console.log(uniqueCategorys);

  return (
    <div className={styles.container}>
        {
            uniqueCategorys.map((newCategory, index) => (
                <button className={styles.buttons} key={index} onClick={() => props.setSelectedCategory(newCategory)}>{newCategory}</button>
            ))
        }
    </div>
  )
}

export default Category
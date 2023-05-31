import React from 'react'
import styles from './Product.module.css'

function Product(props) {
    console.log(props.filteredCategory);
  return (
    <div className={styles.products_list}>
        {
            props.filteredCategory.map((oneProduct, index) => (
                <div key={index} className={styles.oneProductCard}>
                    <p className={styles.oneCategory}>{oneProduct.category}</p>
                    <img className={styles.onePicture} src={ oneProduct.image } alt={oneProduct.category} />
                    <h4>{oneProduct.title}</h4>
                    <p>{oneProduct.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Product
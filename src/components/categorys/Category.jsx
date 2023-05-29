import React from 'react'
import styles from './Category.module.css'

function Category(props) {
    console.log(props.products);

    const uniqueCategorys = [ ...new Set(props.products.map((oneCategory) => oneCategory.category))]

    console.log(uniqueCategorys);

  return (
    <div className={styles.container}>
        {
            uniqueCategorys.map((newCategory, index) => (
                <button className={styles.buttons} key={index}>{newCategory}</button>
            ))
        }
    </div>
  )
}

export default Category
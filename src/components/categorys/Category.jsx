import React from 'react'
import styles from './Category.module.css'

function Category(props) {
    console.log(props.products);

    const uniqueCategorys = [ ...new Set(props.products.map((oneCategory) => oneCategory.category)), 'all']

    console.log(uniqueCategorys);

    function handleButtonValue (buttonValue) {
        console.log(buttonValue)
        return buttonValue
    }

  return (
    <div className={styles.container}>
        {
            uniqueCategorys.map((newCategory, index) => (
                <button className={styles.buttons} key={index} onClick={() => handleButtonValue(newCategory)}>{newCategory}</button>
            ))
        }
    </div>
  )
}

export default Category
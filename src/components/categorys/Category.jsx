import React from 'react'

function Category(props) {
    console.log(props.products);
  return (
    <div>
        {
            props.products.map((oneCategory, index) => (
                <button key={index}>{oneCategory.category}</button>
            ))
        }
    </div>
  )
}

export default Category
import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            <img src={product.imageUrls[0]} alt={product.name} />

            <div className="product_box">
                <h2 title={product.name}>{product.name}</h2>
                <span>Rs {product.targetPrice}</span>
                {/*<div danger/ouslySetInnerHTML={{__html: product.description.substring(0,50)}}/>*/}
            </div>


            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem

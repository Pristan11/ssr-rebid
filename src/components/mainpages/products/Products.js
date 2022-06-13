import React, {useState, useEffect} from 'react'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import {Helmet} from "react-helmet";


function Products({products}) {

    // if(loading) return <div><Loading /></div>
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={`Rebid.lk provides low-cost electronic item oven microwaveoven ram hard disk keyboard led tv display online shopping cash on delivery available in Sri Lanka. Buy now!`} />
                <title>Buy Electronic item sale in srilanka get lowest price for a product by creating auction | Rebid</title>

                <link rel="canonical" href={`https://www.rebid.lk/`} />
                <meta name="twitter:card" content={'rebid.lk'} />
                <meta name="twitter:title" content={'rebid.lk'} />
                <meta name="twitter:description" content={`Rebid.lk provides low-cost electronic item oven microwaveoven ram hard disk keyboard led tv display online shopping cash on delivery available in Sri Lanka. Buy now!`} />
                <meta name="twitter:image" content={'https://rebid.lk/logo192.png'} />
                <meta property="og:site_name" content={'rebid.lk'}/>
                <meta name="og:title" property="og:title" content={'rebid.lk'} />
                <meta property="og:image" content={'https://rebid.lk/logo192.png'}/>
                <meta property="og:url" content={`https://www.rebid.lk/`}/>
                <meta property="og:type" content="product"/>
                <meta
                    name="og:description"
                    property="og:description"
                    content={`Rebid.lk provides low-cost electronic item oven microwaveoven ram hard disk keyboard led tv display online shopping cash on delivery available in Sri Lanka. Buy now!`}
                />
                <meta name="description" content={`Rebid.lk provides low-cost electronic item oven microwave oven ram hard disk keyboard led tv display online shopping cash on delivery available in Sri Lanka. Buy now!`} />

            </Helmet>

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            }
        </div>

        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products

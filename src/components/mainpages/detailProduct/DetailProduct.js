import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import {Helmet} from "react-helmet";


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product.slug === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
            <div className="detail">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{detailProduct.name}</title>
                    <link rel="canonical" href={`https://www.rebid.lk/detail/${detailProduct?.slug}`} />
                    <meta name="twitter:card" content={detailProduct.name} />
                    <meta name="twitter:title" content={detailProduct.name} />
                    <meta name="twitter:description" content={`${detailProduct?.description.replace( /(<([^>]+)>)/ig, '').replace( /&nbsp;/ig, '').substring(0,100)}`} />
                    <meta name="twitter:image" content={detailProduct.imageUrls[0].replace('500x500','100x100')} />
                    <meta property="og:site_name" content={detailProduct.name}/>
                    <meta name="og:title" property="og:title" content={detailProduct.name} />
                    <meta property="og:image" content={detailProduct.imageUrls[0].replace('500x500','100x100')}/>
                    <meta property="og:url" content={`https://www.rebid.lk/detail/${detailProduct?.slug}`}/>
                    <meta property="og:type" content="product"/>
                    <meta
                        name="og:description"
                        property="og:description"
                        content={`${detailProduct?.description.replace( /(<([^>]+)>)/ig, '').replace( /&nbsp;/ig, '').substring(0,100)}`}
                    />
                    <meta name="description" content={`${detailProduct?.description.replace( /(<([^>]+)>)/ig, '').replace( /&nbsp;/ig, '').substring(0,150)}`} />
                </Helmet>
                <img src={detailProduct.imageUrls[0]} alt={`${detailProduct.name} sale in srilanka`} />
                <div className="box-detail">
                    <div className="cart">
                        Make Auction
                    </div>
                    <div className="row">
                        <h1>{detailProduct.name}</h1>
                    </div>
                    <span>Rs {detailProduct.targetPrice}</span>
                    <div dangerouslySetInnerHTML={{__html: detailProduct.description}}/>
                    <p>{detailProduct.content}</p>

                </div>
            </div>

            {/*<div>*/}
            {/*    <h2>Related products</h2>*/}
            {/*    <div className="products">*/}
            {/*        {*/}
            {/*            products.map(product => {*/}
            {/*                return product.category === detailProduct.category*/}
            {/*                    ? <ProductItem key={product._id} product={product} /> : null*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default DetailProduct

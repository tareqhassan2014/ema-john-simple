import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Products product={pd}></Products>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart container</h3>
            </div>

        </div>
    );
};

export default Shop;
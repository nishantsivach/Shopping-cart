import './Productdetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../redux/Action';
import { useState } from 'react';

const Productdetail = () => {
    const dispatch = useDispatch()
    let [changeText, setChangeText] = useState(true);

    const handleChange = () => {
        if (!changeText) return;
        dispatch(addToCart(product));
        return setChangeText(!changeText);
    };

    const { id } = useParams();
    const { products } = useSelector((state) => state.ProductsReducer)

    const product = products.find((item) => {
        return item.id === parseInt(id)
    });

    return (
        <div className="maindetail">
            <div className='detail'>
                <h3>Product Detail</h3>
                <div className='headproductdetail'>
                    <Link to="/" className='continueshopping'><p><i class="bi bi-arrow-left"></i> Continue Shopping</p></Link>
                    <div className='detailpageimage'>

                        <img src={`${product.productimage}`} alt="cameraimage"></img>
                        <div className='addcart'>
                            <button onClick={handleChange}><i className="bi bi-cart-plus-fill"></i> {!changeText ? <Link to="/cart" className='gotocart'>Go to Cart</Link> : "Add to cart"}</button>
                            <button className='buybtn'><i className="bi bi-lightning-charge-fill"></i> Buy Now</button>
                        </div>

                    </div>
                    <div className='detailpageprice'>
                        <div className='detailproducttitle'>
                            <h5>{product.producttitle}</h5>
                        </div>
                        <span className='specialprice'>Special price</span>
                        <div className='detailproductprice'>
                            <h4>₹ {product.productprice.toLocaleString('en-US')} <span className='cutprice'>₹ {product.actualprice.toLocaleString('en-US')}</span>
                                <span className='discount'>{product.discount} off</span></h4>

                        </div>
                        <div className='description'>
                            <p><span className='desc'>Description :</span> {product.productdesc}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default Productdetail
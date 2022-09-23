
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';
import { Link } from 'react-router-dom';
import { decreaseCart, removeItem } from '../redux/Action';
import './Carts.css';

const Cart = () => {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch()

    const discountfunc = () => {
        let discount = 0
        let finalPrice = 0
        let totalPrice = 0
        cart.forEach(item => {
            const discountPercentage = Number(item.discount.slice(0, -1)) || 0;
            const itemDiscount = item.actualprice * discountPercentage / 100;

            discount += itemDiscount * item.quantity
            totalPrice += item.productprice * item.quantity
            finalPrice += item.actualprice * item.quantity
        })
        discount = Math.ceil(discount);
        finalPrice = Math.floor(finalPrice);
        totalPrice = Math.floor(totalPrice);

        return { discount, finalPrice, totalPrice }
    }




    return (
        <div className='carthead'>
            <h3>Cart Items</h3>
            <Link to="/" className='continueshopping'><p><i class="bi bi-arrow-left"></i> Continue Shopping</p></Link>
            {cart.length === 0 ? (
                <div className='emptycart'>
                    <p className='emptycarttext'>Empty Cart</p>
                    <span className='emptyicon'><i class="bi bi-cart-x-fill"></i></span>
                </div>
            ) : (

                <div className='cartleftside'>
                    {cart.map((item) => {
                        return (
                            <div className='cartmainsection'>
                                <div className='cartimage'>
                                    <img src={item.productimage} alt="error"></img>
                                </div>
                                <div className='cartdetail'>
                                    <h6>{item.producttitle}</h6>
                                    <p className='cartdetailprice'>₹ {item.productprice.toLocaleString('en-US')}<span className='cartdetailactualprice'>₹ {item.actualprice.toLocaleString('en-US')}</span><span className='cartdetaildiscount'>{item.discount}</span></p>
                                    <p className='qunatity'>
                                        <span className='qunty'>Quantity :</span>
                                        <button onClick={() => dispatch(decreaseCart(item))} disabled={item.quantity <= 1}>-</button>
                                        <span className='quantityclass'>{item.quantity}</span>
                                        <button onClick={() => dispatch(addToCart(item))}>+</button>
                                        <button className='remove' onClick={() => dispatch(removeItem(item))}>Remove</button>
                                    </p>

                                </div>
                            </div>

                        )
                    })}
                </div>
            )}
            <div className='cartrightside'>
                <div className='totalhead'>
                    <h6>Price Details</h6>
                </div>
                <div className='totaldetail'>
                    <p className='pricedetail'>Price <span className='originalprice'> ₹ {discountfunc().finalPrice.toLocaleString('en-US')}</span></p>
                    <p className='discountdetail'>Discount <span className='discountprice'>-{discountfunc().discount.toLocaleString('en-US')}</span></p>
                    <p className='charge'>Delivery Charges <span className='chargefree'>Free</span></p>

                </div>
                <div className='totalfooter'>
                    <p className='total'>Total : <span className='totalprice'>₹ {discountfunc().totalPrice.toLocaleString('en-US')}</span></p>
                </div>
                <div className='saveclass'>
                    <p>You will save ₹{discountfunc().discount.toLocaleString('en-US')} on this order</p>
                </div>

            </div>



        </div>
    )

}
export default Cart

import './Products.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Header.css';

const Products = () => {

    const { products } = useSelector((state) => state.ProductsReducer);



    return (
        <div className='mainsection'>
            <div className='head'>
                <div className='heading'>
                    <h4>Top Deals</h4>
                </div>
                <div className='productsection'>
                    <div className='row'>
                        {products.map((item, index) => {
                            return (
                                <div className='col-sm-4'>
                                    <Link to={`/detail/${item.id}`} className="routingclass">
                                        <div className="card" key={index}>
                                            <div className='cardimage'>
                                                <img src={item.productimage} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className='productname'>
                                                    <h6>{item.productname}</h6>
                                                </div>
                                                <div className='productprice'>
                                                    <p>From ₹{item.productprice.toLocaleString('en-US')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Products
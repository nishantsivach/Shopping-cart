import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {

    const cart = useSelector((state) => state.cartReducer.cart)

    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand className='brandimage'>
                        <img src="/Images/logo.png" alt='brandimage'></img>
                        <Link to="/">
                            <span className='brandname'>Shopping Cart</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/cart" className='carticon'>Cart<i className="bi bi-cart-plus-fill"></i></Link>
                            <div>
                                <p className='countericon'>{cart.length === 0 ? '0' : cart.length}</p>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}
export default Header
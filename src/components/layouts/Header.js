import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Categories from "@components/Categories";
import AuthContext from "@utils/AuthContext";

const Header = () => {
  const { cart, wishlist } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    setCartCount(cart?.length || 0);
    setWishlistCount(wishlist?.length || 0);
  }, [cart, wishlist]);

  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <a className="text-body mr-3" href="#">About</a>
              <a className="text-body mr-3" href="#">Contact</a>
              <a className="text-body mr-3" href="#">Help</a>
              <a className="text-body mr-3" href="#">FAQs</a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">Sign in</button>
                  <button className="dropdown-item" type="button">Sign up</button>
                </div>
              </div>
              {/* Currency Dropdown */}
              <div className="btn-group mx-2">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">EUR</button>
                  <button className="dropdown-item" type="button">GBP</button>
                  <button className="dropdown-item" type="button">CAD</button>
                </div>
              </div>
              {/* Language Dropdown */}
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">FR</button>
                  <button className="dropdown-item" type="button">AR</button>
                  <button className="dropdown-item" type="button">RU</button>
                </div>
              </div>
            </div>
            {/* Mobile Cart & Wishlist Icons */}
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <Link to="/wishlist" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle">{wishlistCount}</span>
              </Link>
              <Link to="/cart" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span className="badge text-dark border border-dark rounded-circle">{cartCount}</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Header Logo & Search */}
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <Link to="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </Link>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="#">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
              <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <Categories />
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
              </Link>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active">Home</Link>
                  <Link to="/product-list" className="nav-item nav-link">Products</Link>
                  {/* <Link to="/product-detail" className="nav-item nav-link">Product Details</Link> */}
                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                      <Link to="/checkout" className="dropdown-item">Checkout</Link>
                    </div>
                  </div>
                  <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link to="/wishlist" className="btn px-0">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle">{wishlistCount}</span>
                  </Link>
                  <Link to="/cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle">{cartCount}</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
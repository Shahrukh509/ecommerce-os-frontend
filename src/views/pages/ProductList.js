import React, { useState, useEffect, useCallback, useContext } from "react";
import { Spin, Pagination } from "antd";
import { PriceFilter, ColorFilter, SizeFilter } from "@components/Filter";
import axiosInstance from "@utils/axiosInstance";
import Alert from "@components/Alert";
import AuthContext from "@utils/AuthContext";
import { Link } from 'react-router-dom';

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ status: "", message: "" });
  const [filter, setFilter] = useState({
    perPage: "10",
    page: "1",
    orderBy: "desc",
    price: "",
    color: "",
    size: "",
  });

  const { updateCart, updateWishlist } = useContext(AuthContext);
  const [totalProducts, setTotalProducts] = useState(0);

  // Function to get products based on current filters
  const getAllProducts = useCallback(async () => {
    setLoading(true);
   
    try {
      const response = await axiosInstance.get("/products", { params: filter });
      console.log(response.data,'response.data >>>>> respons efrom api')
      const { data, total } = response.data.data; // Adjust based on actual response structure
      console.log(data,total,'ye data and total value hai');
      console.log(filter);
      setProducts(data);
      setTotalProducts(total); // Assuming total is provided for pagination
    } catch (error) {
      // setAlert({ status: "error", message: error.response?.data?.message || "An error occurred" });
    } finally {
      setLoading(false);
    }
  }, [filter]);

  const addToCart = async (id) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/carts', { product_id: id });
      console.log(response.data.data.length,'ye cart ki length hai');
      if (response.data.success) {
        setAlert({ status: response.data.success, message: response.data.message });
        updateCart(response.data.data);
      }
    } catch (error) {
      setAlert({ status: "error", message: error.response?.data?.message || "An error occurred" });
    } finally {
      setLoading(false);
    }
  };

  const addToWishList = async (id) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/wishList', { product_id: id });
      console.log(response.data.data.length,'ye cart ki length hai');
      if (response.data.success) {
        setAlert({ status: response.data.success, message: response.data.message });
        updateWishlist(response.data.data);
      }
    } catch (error) {
      setAlert({ status: "error", message: error.response?.data?.message || "An error occurred" });
    } finally {
      setLoading(false);
    }
  };

  // Debounce the API call
  const debouncedGetAllProducts = useCallback(debounce(getAllProducts, 300), [getAllProducts]);

  // Fetch products when component mounts or filters change
  useEffect(() => {
    debouncedGetAllProducts();
  }, [filter, debouncedGetAllProducts]);

  // Function to handle filter updates
  const handleFilters = (newFilters) => {
    console.log(newFilters,'newFilters >>>>>>>>>>😂😂😂 ');
    setFilter((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  // Handle pagination change
  const handlePageChange = (page) => {
    console.log(page,'page >>>>>>>>>>😂😂😂 ');
    setFilter((prevFilter) => ({ ...prevFilter, page: page.toString() }));
  };

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        {/* Shop Sidebar Start */}
        <div className="col-lg-3 col-md-4">
          {/* Price Start */}
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by price</span>
          </h5>
          <PriceFilter handleFilters={handleFilters} />
          {/* Price End */}

          {/* Color Start */}
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by color</span>
          </h5>
          <ColorFilter handleFilters={handleFilters} />
          {/* Color End */}

          {/* Size Start */}
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by size</span>
          </h5>
          <SizeFilter handleFilters={handleFilters} />
          {/* Size End */}
        </div>

        {/* Shop Product Start */}
        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light">
                    <i className="fa fa-th-large"></i>
                  </button>
                  <button className="btn btn-sm btn-light ml-2">
                    <i className="fa fa-th-list"></i>
                  </button>
                </div>
                <div className="form-group mb-0">
                  <select className="form-control">
                    <option>Sort By</option>
                    <option>Newest Arrivals</option>
                    <option>Best Sellers</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Listing */}
            {loading ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <Spin size="large" />
              </div>
            ) : products?.length > 0 ? (
              <>
                {products.map((product) => {
                  // Determine how many full stars to show
                  const rating = product.rating || 0; // Fallback to 0 if no rating
                  const fullStars = Math.floor(rating);
                  const hasHalfStar = rating % 1 !== 0;

                  // Determine total stars (5 in this case)
                  const totalStars = 5;

                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={product.id}>
                      <div className="product-item bg-light mb-4">
                        <div className="product-img position-relative overflow-hidden">
                          <img className="img-fluid w-100" src={product.image_url} alt={product.name} />
                          <div className="product-action">
                            <a
                              className="btn btn-outline-dark btn-square"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                addToCart(product.id);
                              }}
                              data-toggle="tooltip"
                              title="Add to Cart"
                            >
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                            <a
                              className="btn btn-outline-dark btn-square"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                addToWishList(product.id);
                              }}
                              data-toggle="tooltip"
                              title="Add to Wishlist"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <Link className="h6 text-decoration-none text-truncate" to={`/product-detail/${product.id}`}>
                            {product.name}
                          </Link>
                          <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>Rs {product.price}</h5>
                            {product.special_price && (
                              <h6 className="text-muted ml-2">
                                <del>Rs {product.special_price}</del>
                              </h6>
                            )}
                          </div>
                          <div className="d-flex align-items-center justify-content-center mb-1">
                            {/* Render star rating */}
                            {[...Array(totalStars)].map((_, index) => {
                              if (index < fullStars) {
                                // Full star
                                return (
                                  <small key={`full-star-${index}`} className="fa fa-star text-primary mr-1"></small>
                                );
                              }
                              if (index === fullStars && hasHalfStar) {
                                // Half star
                                return (
                                  <small key="half-star" className="fa fa-star-half-alt text-primary mr-1"></small>
                                );
                              }
                              // Empty star
                              return (
                                <small key={`empty-star-${index}`} className="fa fa-star text-muted mr-1"></small>
                              );
                            })}
                            <small>({product.rating_reviews?.length || 0})</small> {/* Display number of reviews */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="col-12">
                  <Pagination
                    current={parseInt(filter.page, 10)}
                    total={totalProducts}
                    pageSize={parseInt(filter.perPage, 10)}
                    onChange={handlePageChange}
                  />
                </div>
              </>
            ) : (
              <div>No products found</div>
            )}
            {/* End of Product Listing */}
          </div>
        </div>
        {/* Shop Product End */}
      </div>

      {/* Alert Display */}
      {alert.message && (
        <Alert status={alert.status} message={alert.message} />
      )}
    </div>
  );
};

export default ProductList;

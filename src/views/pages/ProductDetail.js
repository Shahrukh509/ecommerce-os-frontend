import React, { useState, useEffect } from 'react';
import ProductSlide from '@components/ProductSlide';
import WriteReview from '@components/WriteReview';
import Review from '@components/Reviews';
import axiosInstance from "@utils/axiosInstance";
import Alert from "@components/Alert";
import { Spin } from "antd";
import { useParams } from 'react-router-dom';  // Ensure you import this

const ProductDetail = () => {
  const [reviews, setReviews] = useState([]);  // Initialize as an array
  const { id } = useParams();  // Access the dynamic ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);

  // Fetch product details on component mount
  useEffect(() => {
    getProductDetail();
  }, [id]);  // Include `id` as a dependency to refetch on URL change

  const getProductDetail = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      const data = response?.data?.data;

      if (data) {
        setSlides(data.image_urls || []);  // Ensure image_urls is an array
        console.log(data, 'Product detail data fetched successfully');
        setProduct(data);
        setReviews(data.reviews || []);  // Set reviews data if available
      } else {
        setError('No product data found');
      }
    } catch (error) {
      console.log(error, 'Error fetching product details');
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spin size="large" className="loading-spinner" />;  // Show loader while fetching
  }

  if (error) {
    return <Alert message={error} type="error" />;  // Show error message if any
  }

  return (
    <>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <ProductSlide slides={slides} />
          </div>

          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{product?.name || 'Product Name Goes Here'}</h3>  {/* Safe rendering */}
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star-half-alt"></small>
                  <small className="far fa-star"></small>
                </div>
                <small className="pt-1">({reviews.length} Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">${product?.price || '150.00'}</h3>
              <p className="mb-4">
                {product?.description || 'No description available for this product.'}
              </p>
              
              {/* Sizes and Colors */}
              <div className="d-flex mb-3">
                <strong className="text-dark mr-3">Sizes:</strong>
                {/* Render sizes dynamically */}
                <form>
                  {product?.sizes?.map((size, index) => (
                    <div key={index} className="custom-control custom-radio custom-control-inline">
                      <input type="radio" className="custom-control-input" id={`size-${index}`} name="size" />
                      <label className="custom-control-label" htmlFor={`size-${index}`}>{size}</label>
                    </div>
                  ))}
                </form>
              </div>

              <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                {/* Render colors dynamically */}
                <form>
                  {product?.colors?.map((color, index) => (
                    <div key={index} className="custom-control custom-radio custom-control-inline">
                      <input type="radio" className="custom-control-input" id={`color-${index}`} name="color" />
                      <label className="custom-control-label" htmlFor={`color-${index}`}>{color}</label>
                    </div>
                  ))}
                </form>
              </div>

              <div className="d-flex align-items-center mb-4 pt-2">
                <div className="input-group quantity mr-3" style={{ width: '130px' }}>
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input type="text" className="form-control bg-secondary border-0 text-center" value="1" readOnly />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                </button>
              </div>

              {/* Social share buttons */}
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="text-dark px-2" href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews ({reviews.length})</a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>{product?.description || 'No description available.'}</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  {/* Add additional information if needed */}
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">{reviews.length} reviews for "{product?.name}"</h4>
                      <Review reviews={reviews} />
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>Your email address will not be published. Required fields are marked *</small>
                      <WriteReview />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

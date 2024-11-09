import React, { useState, useEffect, useContext } from "react";
import AuthContext from "@utils/AuthContext";
import axiosInstance from "@utils/axiosInstance"; // Make sure to import your axios instance

const Cart = () => {
  const { cart, updateCart } = useContext(AuthContext); // Assuming setCart is provided in AuthContext
  const [cartDetail, setCartDetail] = useState([]);

  useEffect(() => {
    setCartDetail(cart);
  }, [cart]);

  const removeCart = async (id) => {
    // Implement the remove cart functionality here
    console.log("Remove item with id:", id);
    // Add your API call for removing the item
  };

  const updateCartData = async (id, quantity) => {
    try {
      const response = await axiosInstance.put(`/carts/${id}`, { quantity });
      // Update the cart in the context or state after successful response
      updateCart(response.data.data); // Assuming response contains the updated cart
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity less than 1
    updateCartData(id, newQuantity);
  };

  const calculateSubtotal = () => {
    return cartDetail?.reduce((acc, item) => acc + (item.quantity * item.products.price), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = 10; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-light table-borderless table-hover text-center mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {cartDetail.map((item) => (
                <tr key={item.id}>
                  <td className="align-middle">
                    <img src={item?.products?.image_url} alt={`Product ${item.products.name}`} style={{ width: '50px' }} />
                    {item?.products?.name}
                  </td>
                  <td className="align-middle">Rs {item?.products?.price}</td>
                  <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                      <div className="input-group-btn">
                        <button 
                          className="btn btn-sm btn-primary btn-minus" 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input 
                        type="text" 
                        className="form-control form-control-sm bg-secondary border-0 text-center" 
                        value={item.quantity} 
                        readOnly
                      />
                      <div className="input-group-btn">
                        <button 
                          className="btn btn-sm btn-primary btn-plus" 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">Rs {item?.quantity * item?.products?.price}</td>
                  <td className="align-middle">
                    <button className="btn btn-sm btn-danger" onClick={() => removeCart(item.id)}>
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-lg-4">
          <form className="mb-30" action="">
            <div className="input-group">
              <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>

          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Cart Summary</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>Rs {subtotal}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">Rs {shipping}</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>Rs {total}</h5>
              </div>
              <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

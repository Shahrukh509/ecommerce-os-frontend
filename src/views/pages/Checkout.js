import React from 'react';

const Checkout = () => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Billing Address</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" type="text" id="firstName" placeholder="John" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="lastName">Last Name</label>
                <input className="form-control" type="text" id="lastName" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email">E-mail</label>
                <input className="form-control" type="email" id="email" placeholder="example@email.com" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="mobile">Mobile No</label>
                <input className="form-control" type="text" id="mobile" placeholder="+123 456 789" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="address1">Address Line 1</label>
                <input className="form-control" type="text" id="address1" placeholder="123 Street" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="address2">Address Line 2</label>
                <input className="form-control" type="text" id="address2" placeholder="Apt 4B" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="country">Country</label>
                <select className="custom-select" id="country" defaultValue="United States">
                  <option value="United States">United States</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="city">City</label>
                <input className="form-control" type="text" id="city" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="state">State</label>
                <input className="form-control" type="text" id="state" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="zip">ZIP Code</label>
                <input className="form-control" type="text" id="zip" placeholder="12345" />
              </div>
              <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="newaccount" />
                  <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="shipto" data-toggle="collapse" data-target="#shipping-address" />
                  <label className="custom-control-label" htmlFor="shipto">Ship to a different address</label>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse mb-5" id="shipping-address">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Shipping Address</span>
            </h5>
            <div className="bg-light p-30">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="shipFirstName">First Name</label>
                  <input className="form-control" type="text" id="shipFirstName" placeholder="John" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipLastName">Last Name</label>
                  <input className="form-control" type="text" id="shipLastName" placeholder="Doe" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipEmail">E-mail</label>
                  <input className="form-control" type="email" id="shipEmail" placeholder="example@email.com" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipMobile">Mobile No</label>
                  <input className="form-control" type="text" id="shipMobile" placeholder="+123 456 789" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipAddress1">Address Line 1</label>
                  <input className="form-control" type="text" id="shipAddress1" placeholder="123 Street" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipAddress2">Address Line 2</label>
                  <input className="form-control" type="text" id="shipAddress2" placeholder="Apt 4B" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipCountry">Country</label>
                  <select className="custom-select" id="shipCountry" defaultValue="United States">
                    <option value="United States">United States</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipCity">City</label>
                  <input className="form-control" type="text" id="shipCity" placeholder="New York" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipState">State</label>
                  <input className="form-control" type="text" id="shipState" placeholder="New York" />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="shipZip">ZIP Code</label>
                  <input className="form-control" type="text" id="shipZip" placeholder="12345" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Order Total</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="border-bottom">
              <h6 className="mb-3">Products</h6>
              <div className="d-flex justify-content-between">
                <p>Product Name 1</p>
                <p>$150</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Product Name 2</p>
                <p>$150</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Product Name 3</p>
                <p>$150</p>
              </div>
            </div>
            <div className="border-bottom pt-3 pb-2">
              <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>$450</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>$460</h5>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Payment</span>
            </h5>
            <div className="bg-light p-30">
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                  <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                  <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="custom-control custom-radio">
                  <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                  <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                </div>
              </div>
              <button className="btn btn-block btn-primary font-weight-bold py-3">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

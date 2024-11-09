import React from 'react';

const Contact = () => {
  // Function to handle form submission (if needed)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Contact Us</span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-7 mb-5">
            <div className="contact-form bg-light p-30">
              {/* Success message can be conditionally rendered */}
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    aria-required="true"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                    aria-required="true"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required
                    aria-required="true"
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    id="message"
                    placeholder="Message"
                    required
                    aria-required="true"
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="bg-light p-30 mb-30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14240.941676095918!2d66.98116763428063!3d24.860734686954665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b227918c865%3A0x7d4b3b8a7e200!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1633798776086!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ width: '100%', height: '250px', border: '0' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Map of Karachi, Pakistan"
            ></iframe>

            </div>
            <div className="bg-light p-30 mb-3">
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary mr-3"></i>info@example.com
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

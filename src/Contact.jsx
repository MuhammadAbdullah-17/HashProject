import React from "react";

const Contact = () => {
  return (
    <div className="container" id="Contact">
      <div className="row mt-3 text-center" data-aos="fade-up" data-aos-duration="1500">
        <h2>Get Quote</h2>
        <p className="text-black-50 fs-6 mt-3 col-12 mx-auto">
          As fellow entrepreneurs, we understand the need for space which gives
          your business room to breathe and grow.
        </p>
      </div>
      
      <div  className="form mt-5 col-10 col-sm-10 col-md-10 bg-dark" >
          <input className="fh col-10 col-md-5 col-sm-10" id="fn" type="text" placeholder="First Name" size="65"/>
          <input className="fh col-10 mx-md-2 col-md-6 col-sm-10" id="ln" type="text" placeholder="Last Name" size="65" />
          <br />
          <input className=" mt-4 fh d-block col-10 col-md-12 col-sm-10" id="em" type="text" placeholder="Message" size="140" />
          <button className="ms-auto btn conb mt-5 btn-lg btn-warning rounded-pill text-white text-center">SUBMIT</button>
        </div>
    </div>
  );
};

export default Contact;

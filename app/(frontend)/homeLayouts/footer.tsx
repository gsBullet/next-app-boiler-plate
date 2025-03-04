import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
const footer = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around align-items-center">
        <p>�� 2022 My Website. All rights reserved.</p>
        <p>Powered by Next.js</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default footer;

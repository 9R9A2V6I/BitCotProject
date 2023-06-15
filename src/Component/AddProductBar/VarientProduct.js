import React from "react";

function VarientProduct() {
  return (
    <>
      <div className="basicContainer">
        <h4 className="headTextBasic">Basic Info</h4>
        <div className="basicInput">
          <label htmlFor="" className="labelBasic">
            <span>*</span>Product Name
          </label>
          <input type="text" className="productNameDetails" />
        </div>
        <div className="basicInput">
          <label htmlFor="" className="labelBasic">
            <span>*</span>Description
          </label>
          <input type="text" className="productNameDetails2" />
        </div>
      </div>
    </>
  );
}

export default VarientProduct;

import React from "react";
import './AddProduct.css'

function GeneralProduct() {
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
      <div className="basicContainer">
        <h4 className="headTextBasic">Oragnization</h4>
        <div className="organDetails">
          <div className="basicInput">
            <label htmlFor="" className="labelBasic">
              Category
            </label>
            <input type="text" className="productOrganDetails" />
          </div>
          <div className="basicInput">
            <label htmlFor="" className="labelBasic">
              Tags
            </label>
            <input type="text" className="productOrganDetails" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralProduct;

import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import logoImg from "../../Assets/download.png";
function AddProduct() {
  const [toogleVariant, settoogleVariant] = useState();

  const initialValues = {
    Description: "",
    ProductName: "",
    Tags: "",
    Category: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  console.log(formValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // };
  const handleToggle = () => {
    settoogleVariant((current) => !current);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.ProductName) {
      errors.ProductName = "Please enter Product Name ";
    }
    if (!values.Description) {
      errors.Description = "Please enter Description ";
    }
    if (!values.Tags) {
      errors.Tags = "Please enter Tags ";
    }
    if (!values.Category) {
      errors.Category = "Please enter Category ";
    }

    return errors;
  };
  return (
    <div className="addCartContainer">
      <div className="addCartHeadBox">
        <div className="addCartHead">
          <h2 className="addCartHeadText">Edit Product</h2>
          <div className="btnBar">
            <button className="discardBtn">Discard</button>
            <button className="saveBtn">Save</button>
          </div>
        </div>
        <div className="detailsType">
          <p className="detailsText" onClick={handleToggle}>
            General
          </p>
          <p className="detailsText" onClick={handleToggle}>
            Variation
          </p>
        </div>
      </div>
      {toogleVariant ? (
        <div className="basicContainer2">
          <h4 className="headTextBasic">Variants</h4>
          <p className="variantPara">
            Add A Customer Variat Options For Your Product,Like Different Sizes
            Or Colors.
          </p>

          <div className="organDetails">
            <div className="basicInput">
              <label htmlFor="" className="labelBasic">
                <span>*</span>Variant
              </label>
              <input type="text" className="productvariantDetails" />
            </div>
            <div className="basicInput">
              <label htmlFor="" className="labelBasic">
                <span>*</span>Price
              </label>
              <input type="text" className="productvariantDetails" />
            </div>
            <div className="basicInput">
              <label htmlFor="" className="labelBasic">
                <span>*</span>Stoke Keeping Unit
              </label>
              <input type="text" className="productvariantDetails" />
            </div>
          </div>
          <div className="imageVarient">
            <label htmlFor="" className="labelBasic">
              <span>*</span>Image
            </label>
            <div className="imgInputBox">
              <input type="file" id="inputImageProduct" />
              <label for="inputImageProduct" id="logoLabel">
                <img src={logoImg} alt="Logo" id="logoImage" />
              </label>
              <p className="variantPara">Click or Drag File to Upload </p>
            </div>
            <div className="addMoreFileInput">
              <h5>Add Field</h5>
            </div>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="basicContainer">
              <h4 className="headTextBasic">Basic Info</h4>
              <div className="basicInput">
                <label htmlFor="" className="labelBasic">
                  <span>*</span>Product Name
                </label>
                <input
                  name="ProductName"
                  type="text"
                  className="productNameDetails"
                  onChange={handleChange}
                />
                <p className="errorMessage">{formErrors.ProductName}</p>
              </div>
              <div className="basicInput">
                <label htmlFor="" className="labelBasic">
                  <span>*</span>Description
                </label>
                <input
                  name="Description"
                  type="text"
                  className="productNameDetails2"
                  onChange={handleChange}
                />
                <p className="errorMessage">{formErrors.Description}</p>
              </div>
            </div>
            <div className="basicContainer">
              <h4 className="headTextBasic">Oragnization</h4>
              <div className="organDetails">
                <div className="basicInput">
                  <label htmlFor="" className="labelBasic">
                    Category
                  </label>
                  <input
                    name="Category"
                    type="text"
                    className="productOrganDetails"
                    onChange={handleChange}
                  />
                  <p className="errorMessage">{formErrors.Category}</p>
                </div>
                <div className="basicInput">
                  <label htmlFor="" className="labelBasic">
                    Tags
                  </label>
                  <input
                    name="Tags"
                    type="text"
                    className="productOrganDetails"
                    onChange={handleChange}
                  />
                  <p className="errorMessage">{formErrors.Tags}</p>
                </div>
              </div>
              <button className="submitBtn" type="submit">
                Add
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default AddProduct;

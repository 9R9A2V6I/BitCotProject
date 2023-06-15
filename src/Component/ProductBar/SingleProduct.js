import React, { useState } from "react";
import "./ProductBar.css";
import { Search, ArrowCircleDown, MoreVert } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function SingleProduct({ data }) {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((current) => !current);
  };
  return (
    <>
      {data.map((item, i) => {
        return (
          <div className="productDetailsBar2" key={i}>
            <div className="checkBoxBar2">
              <input type="checkBox" className="checkInput" />
              {item.id}
            </div>

            <div className="secondBar2">
              <img
                src={item.variation[0].productImage}
                className="prductImage"
                alt=""
              />
              <p className="productName">{item.productName}</p>
            </div>
            <div className="thirdBar2">
              <p>{item.category}</p>
            </div>
            <div className="thirdBar2">
              <p>${item.variation[0].price}</p>
            </div>
            <div className="thirdBar2">
              <p>{item.variation[0].stock}</p>
            </div>
            <div className="fourthBar2">
              {item.status === "In stock" ? (
                <span className="stokeColor"></span>
              ) : (
                <span className="stokeColor2"></span>
              )}
              <p>{item.status}</p>
              <MoreVert onClick={toggleHandler} key={item.id} />
              {toggle && (
                <div className="toggleBoxUpdate">
                  <NavLink to="/AddProduct" className="editBtn">
                    Edit Product
                    <span className="deleteBtn">Delete</span>
                  </NavLink>
                 

                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SingleProduct;

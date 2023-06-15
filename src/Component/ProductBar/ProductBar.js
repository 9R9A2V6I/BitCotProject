import React, { useState } from "react";
import "./ProductBar.css";
import { Search, ArrowCircleDown, MoreVert } from "@mui/icons-material";
import productImg from "../../Assets/download.jpg";
import Data from "../../Data";
import SingleProduct from "./SingleProduct";
import PageNumber from "./PageNumber";

function ProductBar() {
  const [products, setProducts] = useState(Data);
  const [currentProduct, setCurrentProduct] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  // Toggle Edit Button

  // Pagination Functions
  const indexOfLastProduct = currentProduct * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentProduct(pageNumber);

  return (
    <>
      <div className="ProductHeadContainer">
        <div className="headerTag">
          <p className="header">Product List</p>
          <p className="subHead">Ecommerce/</p>
          <p className="subHead">Product List</p>
        </div>
        <div className="productBox">
          <div className="productTopBar">
            <div className="leftBar">
              <div className="searchBarProduct">
                <Search className="icons" />
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Search"
                />
              </div>
              <div className="searchBarProduct">
                <input type="text" className="searchInput" placeholder="All" />
              </div>
            </div>
            <button className="productAddBtn">Add Product</button>
          </div>

          <div className="productDetailsBar">
            <div className="checkBoxBar">
              <input type="checkBox" className="checkInput" />
              ID
            </div>

            <div className="secondBar">
              <p>Product</p>
              <ArrowCircleDown className="arrowIcon" />
            </div>
            <div className="thirdBar">
              <p>Category</p>
              <ArrowCircleDown className="arrowIcon" />
            </div>
            <div className="thirdBar">
              <p>Price</p>
              <ArrowCircleDown className="arrowIcon" />
            </div>
            <div className="thirdBar">
              <p>Stoke</p>
              <ArrowCircleDown className="arrowIcon" />
            </div>
            <div className="fourthBar">
              <p>Status</p>
              <ArrowCircleDown className="arrowIcon" />
            </div>
          </div>
          <SingleProduct data={currentProducts} />

          <div className="paginationNumber">
            <PageNumber
              paginate={paginate}
              productsPerPage={productsPerPage}
              totalProducts={products.length}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBar;

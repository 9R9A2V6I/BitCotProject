import React, { useState } from "react";
import "./PageNumber.css";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

function PageNumber({ paginate, productsPerPage, totalProducts }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination">
          <ChevronLeft />
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="pageItem"
              onClick={() => paginate(number)}
            >
              <a href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
          <ChevronRight />
        </ul>
      </nav>
    </>
  );
}

export default PageNumber;

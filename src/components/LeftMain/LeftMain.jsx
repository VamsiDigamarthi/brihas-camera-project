import React from "react";
import "./LeftMain.css";
import { BsCameraVideo } from "react-icons/bs";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const LeftMain = ({ videosLink, finalFilterData }) => {
  console.log(finalFilterData);

  let onLine = finalFilterData.filter((each) => each.mode === "Online");

  let offLine = finalFilterData.filter((each) => each.mode === "Offline");

  // pagination start

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 12;

  const currentItems = finalFilterData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(finalFilterData.length / 12);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % finalFilterData.length;
    setItemOffset(newOffset);
  };

  // pagination end

  return (
    <div className="left-main-container">
      <div className="total-card">
        <p>Total : {finalFilterData.length}</p>
        <p>
          online :{" "}
          <span
            style={{
              color: "green",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {onLine.length}
          </span>
        </p>
        <p>
          offline :
          <span
            style={{
              color: "rgba(255, 93, 29, 0.3)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {" "}
            {offLine.length}
          </span>
        </p>
      </div>
      <div className="all-cameras-card-container">
        {currentItems.map((each, key) => (
          <div
            key={key}
            className="camera-cards"
            onClick={() => videosLink(each)}
            style={{
              backgroundColor:
                each.mode === "Online"
                  ? "rgba(29, 255, 40, 0.3)"
                  : "rgba(255, 93, 29, 0.3)",
              borderLeft:
                each.mode === "Online"
                  ? "3px solid green"
                  : "3px solid #ff5d1d",
            }}
          >
            <div className="dt-at-card">
              <div className="cam__added__div">
                <span>
                  DT <span>Hyderbad</span>
                </span>
                <span>{each.dist}</span>
                <span>{each.subDist}</span>
              </div>
              <div className="icons-camer-cards">
                <div
                  style={{
                    backgroundColor:
                      each.mode === "Online" ? "green" : "#ff5d1d",
                  }}
                >
                  <BsCameraVideo />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<prev"
          renderOnZeroPageCount={null}
          className="paginat"
        />
      </div>
    </div>
  );
};

export default LeftMain;

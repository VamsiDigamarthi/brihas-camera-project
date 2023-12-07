import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Multiple.css";

import ReactPaginate from "react-paginate";

const values = [
  {
    id: "1",
    url: "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  },
  {
    id: "1",
    url: "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
  },
  {
    id: "1",
    url: "http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8",
  },
  {
    id: "1",
    url: "http://nasatv-lh.akamaihd.net/i/NASA_101@319270/index_1000_av-p.m3u8?sd=10&rebase=on",
  },
  {
    id: "1",
    url: "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
  },
  {
    id: "1",
    url: "http://walterebert.com/playground/video/hls/sintel-trailer.m3u8",
  },
  {
    id: "1",
    url: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
  },
  {
    id: "1",
    url: "https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
  },
  {
    id: "1",
    url: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
  },
  {
    id: "1",
    url: "https://d1gnaphp93fop2.cloudfront.net/videos/multiresolution/rendition_new10.m3u8",
  },
  {
    id: "1",
    url: "https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8",
  },
  {
    id: "1",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: "1",
    url: "https://diceyk6a7voy4.cloudfront.net/e78752a1-2e83-43fa-85ae-3d508be29366/hls/fitfest-sample-1_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.0Mbps_qvbr.m3u8",
  },
];
const Multiple = ({ finalFilterData }) => {
  // const [currentPage, setCurrentPage] = useState(0);

  // const [pageSize, setPageSize] = useState(4);

  // const [currentItems, setCurrentItems] = useState(
  //     values.slice(0, pageSize)
  // );

  // console.log(currentItems)

  // const onPage = (index) => {
  //     setCurrentPage(index);
  //     let cuurentItem = values.slice(
  //       index * pageSize,
  //       pageSize * (index + 1)
  //     );
  //     setCurrentItems(cuurentItem);
  //   }

  //   const v = Math.ceil(values.length / pageSize);

  //console.log(finalFilterData);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 4;

  const currentItems = finalFilterData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(finalFilterData.length / 4);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % finalFilterData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="muliple-videos">
        {currentItems.map((each, key) => (
          <ReactPlayer
            key={key}
            url={each.url}
            width="48%"
            height="300px"
            controls="true"
            muted="false"
            playing="true"
          />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="paginat"
      />

      {/* <div className='pagination-container'>
                <div>
                        <button
                        className="prev-btn"
                        onClick={() => onPage(currentPage - 1)}
                        disabled={currentPage === 0}
                        >
                        prev
                        </button>
                        {Array(v)
                        .fill(null)
                        .map((page, index) => (
                            <button
                            className="number-btn"
                            
                            onClick={() => onPage(index)}
                            key={index}
                            >
                            {index + 1}
                            </button>
                        ))}
                        <button
                        onClick={() => onPage(currentPage + 1)}
                        disabled={currentPage === v - 1}
                        className="prev-btn"

                        >
                        next
                        </button>
                </div>
              </div>
           */}
    </>
  );
};

export default Multiple;

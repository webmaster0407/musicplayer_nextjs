import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { AlbumCard } from "../AlbumCard";
function Items({ currentItems }) {
  return (
    <div className="items">
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index}>
            <AlbumCard info={item} />
          </div>
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage, items }) {
  // We start with an empty list of items.
  console.log(items);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    const pageNum = Math.ceil(items.length / itemsPerPage);
    setPageCount(pageNum);
    console.log(pageNum);
    console.log(pageCount);
    setItemOffset(0);
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="rounded-md text-center w-[100px] h-[30px] bg-[#DBF91D] text-[#222801] "
        previousLinkClassName="page-link"
        nextClassName="rounded-md text-center w-[80px] h-[30px] bg-[#DBF91D] text-[#222801]"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex justify-between"
        activeClassName="active bg-yellow-400 text-black w-[30px] h-[30px] rounded-full text-center"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

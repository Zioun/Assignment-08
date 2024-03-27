import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Read from "./Read";
import Wish from "./Wish";

const Listed = () => {
  const books = useLoaderData();

  const [open, setOpen] = useState("false");

  const [appliedReadData, setAppliedReadData] = useState([]);
  const [appliedWishData, setAppliedWishData] = useState([]);

  const [displayReadBooks, setDisplayReadBooks] = useState([]);
  const [displayWishBooks, setDisplayWishBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  const handleFilter = (filter, data, setData) => {
    let sortedBooks = [];
    if (filter === "All") {
      sortedBooks = data;
    } else if (filter === "rating") {
      sortedBooks = data.slice().sort((a, b) => b.rating - a.rating);
    } else if (filter === "totalPages") {
      sortedBooks = data.slice().sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === "yearOfPublishing") {
      sortedBooks = data.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setData(sortedBooks);
  };

  useEffect(() => {
    const getDefaultReadData = JSON.parse(localStorage.getItem("read")) || [];
    setAppliedReadData(getDefaultReadData);
    setDisplayReadBooks(getDefaultReadData);

    const getDefaultWishData = JSON.parse(localStorage.getItem("wish")) || [];
    setAppliedWishData(getDefaultWishData);
    setDisplayWishBooks(getDefaultWishData);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="hero bg-base-200 md:rounded-[28px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-bold ws text-[28px] py-[20px]">Books</h1>
          </div>
        </div>
      </div>
      <div className={`text-center mt-[32px] max-w-[180px] m-auto ${open === "true" ? 'hidden' : 'block'}`}>
        <select
          className="select select-bordered w-full max-w-xs bg-[#23BE0A] text-white ws font-bold"
          onChange={(event) => handleFilter(event.target.value, appliedReadData, setDisplayReadBooks)}
        >
          <option disabled  className="bg-white text-black" value="All">Sort By</option>
          <option className="bg-white text-black" value="rating">Rating</option>
          <option className="bg-white text-black" value="totalPages">Number of pages</option>
          <option className="bg-white text-black" value="yearOfPublishing">Publish Year</option>
        </select>
      </div>
      <div className={`text-center mt-[32px] max-w-[180px] m-auto ${open === "true" ? 'block' : 'hidden'}`}>
        <select
          className="select select-bordered w-full max-w-xs bg-[#23BE0A] text-white ws font-bold"
          onChange={(event) => handleFilter(event.target.value, appliedWishData, setDisplayWishBooks)}
        >
          <option disabled className="bg-white text-black" value="All">Sort By</option>
          <option className="bg-white text-black" value="rating">Rating</option>
          <option className="bg-white text-black" value="totalPages">Number of pages</option>
          <option className="bg-white text-black" value="yearOfPublishing">Publish Year</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted pb-10">
        <input onClick={()=> setOpen("false")} type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked={activeTab === "read"} onChange={() => handleTabChange("read")}
        />
        <div role="tabpanel" className="tab-content  border-base-300 rounded-box p-6 space-y-5">
          {activeTab === "read" &&
            displayReadBooks.map((add) => (
              <Read key={add.bookId} add={add} />
            ))}
        </div>

        <input onClick={()=> setOpen("true")}
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked={activeTab === "wish"}
          onChange={() => handleTabChange("wish")}
        />
        <div role="tabpanel" className="tab-content  border-base-300 rounded-box p-6 space-y-5">
          {activeTab === "wish" &&
            displayWishBooks.map((wish) => (
              <Wish key={wish.bookId} wish={wish} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Listed;

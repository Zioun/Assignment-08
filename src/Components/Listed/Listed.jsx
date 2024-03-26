import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Read from "./Read";
import Wish from "./Wish";

const Listed = () => {
    const books = useLoaderData();
    
    const [appliedReadData, setappliedReadData] = useState([]);
    const [appliedWishData, setappliedWishData] = useState([]);
    console.log(appliedReadData)
    useEffect(() => {
        const getDefaultReadData = JSON.parse(localStorage.getItem("read")) || [];
        setappliedReadData(getDefaultReadData);
        const getDefaultWishData = JSON.parse(localStorage.getItem("wish")) || [];
        setappliedWishData(getDefaultWishData);
    }, []);

  return (
    <div>
      <div className="hero bg-base-200 rounded-[28px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-bold ws text-[28px] py-[20px]">Books</h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-[32px] max-w-[145px] m-auto">
        <select
          className="select select-bordered w-full max-w-xs bg-[#23BE0A] text-white ws font-bold"
          onChange={(event) => handleJobFilter(event.target.value)}
        >
          <option className="bg-white text-black" value="all">
            All
          </option>
          <option className="bg-white text-black" value="remote">
            Remote
          </option>
          <option className="bg-white text-black" value="onside">
            Onside
          </option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted pb-20">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          checked
        />
        <div role="tabpanel" className="tab-content  border-base-300 rounded-box p-6 space-y-5">
          {
            appliedReadData.map(add => <Read key={add.bookId} add={add}></Read>)
          }
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          {
            appliedWishData.map(wish => <Wish wish={wish}></Wish>)
          }
        </div>
      </div>
    </div>
  );
};

export default Listed;
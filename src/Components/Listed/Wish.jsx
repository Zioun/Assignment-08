import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const Wish = ({ wish }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = wish;
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center border rounded-2xl py-5">
      <div className="w-[230px] bg-[#F3F3F3] flex justify-center py-10 px-10 ml-5 rounded-2xl">
        <img src={image} alt="image" />
      </div>
      <div className="w-full px-5">
        <div>
          <h1 className="pd font-bold text-[24px]">{bookName}</h1>
          <h2 className="ws font-medium text-[16px] text-[#424242] py-[10px]">
            By : {author}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-wrap gap-5">
            {tags.map((tags) => (
              <h2 className="ws font-medium px-[16px] py-[7px] bg-[#F4FCF3] text-[#23BE0A] rounded-[30px]">
                <span># {tags}</span>
              </h2>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[#717171]">
            <span className="text-[20px]">
              <IoLocationSharp />
            </span>
            <h1 className="">Year of Publishing: {yearOfPublishing}</h1>
          </div>
        </div>
        <div className="ws font-normal text-[16px] flex flex-col md:flex-row gap-5 text-[#717171] py-[16px]">
          <div className="flex items-center gap-3">
            <span className="text-[20px]">
              <FaUserFriends />
            </span>
            <h2> Publisher: {publisher}</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[20px]">
              <FaFileAlt />
            </span>
            <h2>Page {totalPages}</h2>
          </div>
        </div>
        <hr className="max-w-[1000px]" />
        <div className="flex flex-col md:flex-row  gap-5 mt-5">
          <button className="btn bg-[#E0EEFF] text-[#328EFF] ws rounded-full hover:bg-[#E0EEFF]">
            Category: {category}
          </button>
          <button className="btn bg-[#FFF3E0] text-[#FFAC33] ws rounded-full hover:bg-[#FFF3E0]">
            Rating: {rating}
          </button>
          <Link to={`/details/${bookId}`}>
            <button className="btn w-full btn-md bg-[#23BE0A] text-white ws rounded-full hover:bg-[#23BE0A]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wish;

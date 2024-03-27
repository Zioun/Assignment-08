import React from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const TopBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;

  if (rating > 4.4) {
    return (
      <Link to={`/details/${bookId}`}>
        <div className="card card-compact bg-base-100 shadow-xl p-[24px] border cursor-pointer h-full">
          <div className="">
            <figure className="bg-[#F3F3F3] rounded-[16px] py-[32px]">
              <img src={image} alt="Book" />
            </figure>
          </div>
          <div className="p-0">
            <div className="border-b-[2px] border-dashed">
              <div className="flex gap-[12px] mt-[24px]">
                {tags.map((tag, index) => (
                  <h2
                    key={index}
                    className="ws font-medium px-[16px] py-[7px] bg-[#F4FCF3] text-[#23BE0A] rounded-[30px]"
                  >
                    {tag}
                  </h2>
                ))}
              </div>
              <div>
                <div className="flex">
                  <h1 className="pd font-bold text-[24px] my-[16px] flex-grow">
                    {bookName}
                  </h1>
                </div>
                <h2 className="ws font-medium text-[16px] mb-[20px]">
                  {author}
                </h2>
              </div>
            </div>
            <div className="mt-[20px] flex justify-between ws font-medium text-[16px] ">
              <h1>{category}</h1>
              <div className="flex gap-2">
                <h3>{rating}</h3>
                <h3 className="text-2xl">
                  <CiStar />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default TopBook;

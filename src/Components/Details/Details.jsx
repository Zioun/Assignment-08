import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {saveDataReadToLocalStorage, saveDataWishToLocalStorage} from "../../Utility/localstore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const int = parseInt(bookId);
  const book = books.find((book) => book.bookId === int);
  const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing,} = book;

  const handleAddBook = () => {
    saveDataReadToLocalStorage(book)
  };

  const handleWishBook = () => {
    saveDataWishToLocalStorage(book)
  }


  return (
    <div className="grid grid-cols-12 gap-[48px]">
      <div className="col-span-6 bg-[#F3F3F3] rounded-[16px] p-[73px]">
        <img className="max-w-[425px] h-[564px]" src={image} alt="" />
      </div>
      <div className="col-span-6">
        <div>
          <h1 className="pd font-bold text-[40px]">{bookName}</h1>
          <h2 className="ws font-medium text-[20px] text-[#424242] mb-[24px]">
            By : {author}
          </h2>
        </div>
        <hr />
        <div>
          <h2 className="ws font-medium text-[20px] py-[16px]">{category}</h2>
        </div>
        <hr />
        <div className="py-[24px]">
          <p className="ws font-bold text-[16px]">
            Review :{" "}
            <span className="font-normal text-[16px] text-[#5A5A5A]">
              {review}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-5 font-bold mb-[24px]">
          <p className="">Tag</p>
          <div className="flex gap-[12px]">
            {tags.map((tag, index) => (
              <h2 className="ws font-medium px-[16px] py-[7px] bg-[#F4FCF3] text-[#23BE0A] rounded-[30px]">
                <span># </span>
                {tag}
              </h2>
            ))}
          </div>
        </div>
        <hr />
        <div className="mt-[24px]">
          <div className="max-w-[400px] flex justify-between">
            <div className="ws font-normal text-[16px] flex flex-col gap-2">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="ws font-semibold text-[16px] flex flex-col gap-2">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-[32px]">
          <button onClick={()=>handleAddBook()} className="btn btn-outline">Read</button>
          <button onClick={()=>handleWishBook()} className="btn bg-[#59C6D2] text-white ws hover:bg-[#59C6D2]">
            Wishlist
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Details;

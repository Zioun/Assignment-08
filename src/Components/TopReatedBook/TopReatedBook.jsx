import React, { useEffect, useState } from "react";
import TopBook from "./TopBook";
import { useLoaderData } from "react-router-dom";

const TopRatedBook = () => {
  const getBooks = useLoaderData();
  const sortedBooks = getBooks.slice().sort((a, b) => b.rating - a.rating);

  return (
    <div className="mb-10">
      <div className="pd font-bold text-[40px] text-center mt-[100px] mb-[36px]">
        Top Rated Book
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] px-5">
        {sortedBooks.map((book) => (
          <TopBook key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedBook;

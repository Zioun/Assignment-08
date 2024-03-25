import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const getJobs = useLoaderData();
  console.log(getJobs);
  return (
    <div>
      <div className="pd font-bold text-[40px] text-center mt-[100px] mb-[36px]">
        Books
      </div>
      <div className="grid grid-cols-3 gap-[24px]">
        {
          getJobs.map(job => <Book job={job}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;

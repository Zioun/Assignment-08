import React from "react";

const Author = ({ authors }) => {
  const {
    author,
    rating,
    category,
    authorImage,
    about
  } = authors;
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl p-[24px] border cursor-pointer h-full">
        <div className="flex justify-center">
          <figure className="py-[32px] h-[200px] w-[200px] rounded-full border-2 border-[#23BE0A]">
            <img
              className="object-center"
              src={authorImage}
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="p-0">
          <div className="border-b-[2px] border-dashed">
            <div>
              <div className="flex">
                <h1 className="pd font-bold text-[24px] my-[16px] flex-grow">
                  {author}
                </h1>
              </div>
              <h2 className="ws font-medium text-[16px] mb-[20px]">{about}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;

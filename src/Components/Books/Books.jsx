import React from "react";

const Books = () => {
  return (
    <div>
      <div className="pd font-bold text-[40px] text-center mt-[100px] mb-[36px]">
        Books
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-[24px] border">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="p-0">
          <div>
            <div className="flex gap-[12px] mt-[24px]">
              <h2 className="ws font-medium px-[16px] py-[7px] bg-[#F4FCF3] text-[#23BE0A] rounded-[30px]">Young Adult</h2>
              <h2 className="ws font-medium px-[16px] py-[7px] bg-[#F4FCF3] text-[#23BE0A] rounded-[30px]">Identity</h2>
            </div>
            <div>
              <h1 className="pd font-bold text-[24px]">The Catcher in the Rye</h1>
              <h2 className="ws font-medium text-[16px]">By : Awlad Hossain</h2>
            </div>
          </div>
          <div>
            <h1>Fiction</h1>
            <div>
              <h3>5.00</h3>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;

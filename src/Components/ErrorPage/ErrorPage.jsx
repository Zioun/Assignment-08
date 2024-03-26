import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center h-screen items-center text-center">
      <div className="border p-20 rounded-2xl bg-slate-50 ">
        <h1 className="text-[200px]">404</h1>
        <p className="text-[50px]">Page Not Found</p>
        <Link to="/">
          <button className="btn btn-neutral mt-10">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

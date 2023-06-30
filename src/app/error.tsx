"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg">We're sorry, but an error occurred.</p>
      <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <Link href="/">Go Back to Main Page</Link>
      </div>
    </div>
  );
};

export default Error;

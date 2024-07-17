import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-400 p-4 flex justify-between items-center ">
      <Link to="/">
        <h1 className="font-bold text-4xl ml-8">Auth App</h1>
      </Link>
      <div className="flex gap-6 text-2xl">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="about">
          <ul>About</ul>
        </Link>
        <Link to="sign-in">
          <ul className="mr-8">Sign-In</ul>
        </Link>
      </div>
    </div>
  );
};

export default Header;

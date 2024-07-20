import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (event)=>{
    setFormData({...formData, [event.target.id]: event.target.value});
    console.log(formData);
  }

  return (
    <div className="flex flex-col max-w-lg mx-auto">
      <div className="">
        <h1 className="my-4 text-4xl font-bold text-center">Sign Up</h1>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            className="p-3 rounded bg-slate-200"
            placeholder="User Name"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            className="p-3 rounded bg-slate-200"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="p-3 rounded bg-slate-200"
            placeholder="Password"
            id="Password"
            onChange={handleChange}
          />
          <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 mt-5 text-2xl">
          <p className="">Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

"use client";

import { useState } from "react";

import { Button } from "@smartflow/ui/button";

export default function Sign() {
  const [isSignIn, setIsSignIn] = useState(true);

  function SignIn() {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
          <h1 className="text-7xl font-bold text-white">Sign in</h1>
          <p className="mt-4 text-white">Sign in to your account to continue</p>
          <div className="mt-8 w-2/4">
            <input
              type="text"
              placeholder="Email"
              className="h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            />
            <Button className="mt-4 w-full">Sign in</Button>
            <div className="mt-4 flex justify-between">
              <a href="#" className="text-white">
                Forgot password?
              </a>
              <a href="#" className="text-white" onClick={() => setIsSignIn(false)}>
                Create account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function SignUp() {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
          <h1 className="text-7xl font-bold text-white">Sign up</h1>
          <p className="mt-4 text-white">Create an account to continue</p>
          <div className="mt-8 w-2/4">
            <input
              type="text"
              placeholder="Email"
              className="h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            />
            <Button className="mt-4 w-full">Sign up</Button>
          </div>
          <div className="mt-4 flex justify-between">
              <a href="#" className="text-white" onClick={() => setIsSignIn(true)}>
                Sign In
              </a>
            </div>
        </div>
      </div>
    );
  }
  if (isSignIn) {
    return <SignIn />;
  } else {
    return <SignUp />;
  }
}

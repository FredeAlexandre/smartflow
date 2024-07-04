import Link from "next/link"; 
import { Button } from "@smartflow/ui/button";

export default function Signin() {

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
              <a href="#" className="text-white">
              <Link href="/signup"> Create account </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

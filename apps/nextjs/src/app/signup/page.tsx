"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@smartflow/pocketbase/client/auth";
import { Button } from "@smartflow/ui/button";
import { toast } from "@smartflow/ui/toast";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const router = useRouter();
  const { register } = useAuth();

  const { mutate: signup } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast("Registration Successful! Redirecting...");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    },
    onError: (err) => {
      toast(err.message);
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
        <h1 className="text-7xl font-bold text-white">Sign Up</h1>
        <p className="mt-4 text-white">Create an account to continue</p>
        <form
          onSubmit={() => {
            console.log("ON SUBMIT");
            signup({ email, password, repassword });
          }}
          className="mt-8 w-2/4"
        >
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            className="mt-4 h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            required
          />
          <Button type="submit" className="mt-4 w-full">
            Sign Up
          </Button>
        </form>
        <div className="mt-4 flex justify-between">
          <Link href="/signin" className="text-white">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

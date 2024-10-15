"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@smartflow/pocketbase/client/auth";
import { Button } from "@smartflow/ui/button";
import { toast } from "@smartflow/ui/toast";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const { mutate: signin } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast("Sign-in Successful! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    },
    onError: (err) => {
      toast(err.message);
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
        <h1 className="text-7xl font-bold text-white">Sign In</h1>
        <p className="mt-4 text-white">Sign in to your account to continue</p>
        <form
          onSubmit={(e) => {
            signin({ email, password });
            e.preventDefault();
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
          <Button type="submit" className="mt-4 w-full">
            Sign In
          </Button>
        </form>
        <div className="mt-4 flex w-2/4 justify-between">
          <Link href="/forgot-password" className="text-white">
            Forgot password?
          </Link>
          <Link href="/signup" className="text-white">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/signup")({
  component: SignUp,
});

import { useMutation } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { useAuth } from "~/hooks/pocketbase/use-auth";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const navigate = useNavigate({ from: "/signup" });
  const { register } = useAuth();

  const { mutate: signup } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast("Registration Successful! Redirecting...");
      setTimeout(() => {
        navigate({ to: "/signin" });
      }, 2000);
    },
    onError: (err) => {
      toast(err.message);
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
        <h1 className="font-bold text-7xl text-white">Sign Up</h1>
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

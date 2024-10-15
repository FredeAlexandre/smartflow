"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@smartflow/pocketbase/client/auth";
import { Button } from "@smartflow/ui/button";
import { toast } from "@smartflow/ui/toast";

export default function ConfirmPassword({ params }: { params: any }) {
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const { confirmPasswordRequest } = useAuth();
  const { token } = params;

  const { mutate: confirmPassword } = useMutation({
    mutationFn: confirmPasswordRequest,
    onSuccess: () => {
      toast("Check your mail");
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
        <h1 className="text-7xl font-bold text-white">Reset password</h1>
        <p className="mt-4 text-white">
          Put your email to confirm your password reset
        </p>
        <form
          onSubmit={(e) => {
            confirmPassword({ token, password, repassword });
            e.preventDefault();
          }}
          className="mt-8 w-2/4"
        >
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setRepassword(e.target.value)}
            className="h-12 w-full border border-[#2c2c2c] bg-[#2c2c2c] px-4 text-white"
            required
          />
          <Button type="submit" className="mt-4 w-full">
            Send email
          </Button>
        </form>
      </div>
    </div>
  );
}

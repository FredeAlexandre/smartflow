import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/forgot-password")({
  component: ForgotPassword,
});

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { useAuth } from "~/hooks/pocketbase/use-auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const { resetPasswordRequest } = useAuth();

  const { mutate: resetRequest } = useMutation({
    mutationFn: resetPasswordRequest,
    onSuccess: () => {
      toast("Check your mail");
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded bg-gradient-to-r from-[#1e1e1e] to-[#2c2c2c] py-[100px]">
        <h1 className="font-bold text-7xl text-white">Forgot password</h1>
        <p className="mt-4 text-white">
          Put your email to send a reset password request
        </p>
        <form
          onSubmit={(e) => {
            resetRequest({ email });
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
          <Button type="submit" className="mt-4 w-full">
            Send email
          </Button>
        </form>
      </div>
    </div>
  );
}

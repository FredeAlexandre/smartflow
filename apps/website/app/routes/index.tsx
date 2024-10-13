import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <h1 className="text-3xl">
        Welcome to <span className="font-bold">smartflow</span>
      </h1>
      <p>The first EVM Smart Contract no code plateform</p>
    </div>
  );
}

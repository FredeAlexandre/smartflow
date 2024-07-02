import { Button } from "@smartflow/ui/button";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold">SmartFlow</h1>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline">Documentation</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}

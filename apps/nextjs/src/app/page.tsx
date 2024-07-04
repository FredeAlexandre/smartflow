import { Icon } from "@iconify/react";

import { Button } from "@smartflow/ui/button";

export default function Home() {
  return (
    <div className=" h-screen w-screen bg-stone-900">
      <div className="flex h-20 w-full items-center bg-stone-900 px-8">
        <h1 className="text-3xl font-bold text-white">Smartflow</h1>
        <div className="ml-20 flex gap-6">
          <Button>
            <Icon icon="lucide:home" className="mr-1" /> Home
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-primary hover:text-white"
          >
            <Icon icon="lucide:book" className="mr-1" /> Documentation
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-primary hover:text-white"
          >
            <Icon icon="lucide:newspaper" className="mr-1" /> Articles
          </Button>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <Button>Sign in</Button>
          <Button className="ml-4" variant="outline">
            Sign up
          </Button>
        </div>
      </div>
      <div className="slide-up mt-28 flex w-full flex-col items-center justify-center">
        <h1 className="w-2/4 bg-gradient-to-r from-[#808080] from-20% via-white via-50% to-[#808080] to-85% bg-clip-text text-center text-7xl font-extrabold text-transparent ">
          Le meilleur moyen de créer des smart contracts
        </h1>
        <p className="mt-10 w-2/4 text-center text-3xl text-[#d9d9d9]">
          La solution no-code qui peut vous permettre de créer et déployer des
          smart contracts
        </p>
        <Button className="mt-10">Get started</Button>
      </div>
    </div>
  );
}

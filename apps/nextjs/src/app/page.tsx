import { Button } from "@smartflow/ui/button";

import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className=" h-screen w-screen bg-stone-900">
      <div className="flex h-20 w-full items-center bg-stone-900 px-8">
        <h1 className="text-3xl text-white font-bold">Smartflow</h1>
        <div className="flex gap-6 ml-20">
          <Button><Icon icon="lucide:home" className="mr-1" /> Home</Button>
          <Button variant="ghost" className="text-white hover:text-white hover:bg-primary"><Icon icon="lucide:book" className="mr-1" /> Documentation</Button>
          <Button variant="ghost" className="text-white hover:text-white hover:bg-primary"><Icon icon="lucide:newspaper" className="mr-1" /> Articles</Button>
        </div>
        <div className="flex h-full w-full items-center justify-end">
          <Button>Sign in</Button>
          <Button className="ml-4" variant="outline">
            Sign up
          </Button>
        </div>
      </div>
      <div className="slide-up mt-28 flex w-full flex-col items-center justify-center">
        <h1 className="w-2/4 text-center font-extrabold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#808080] from-20% via-white via-50% to-[#808080] to-85% "
        >
          Le meilleur moyen de créer des smart contracts
        </h1>
        <p className="text-[#d9d9d9] mt-10 w-2/4 text-center text-3xl">
          La solution no-code qui peut vous permetre de crée et deployer des
          smart contract
        </p>
        <Button className="mt-10">Get started</Button>
      </div>
    </div>
  );
}

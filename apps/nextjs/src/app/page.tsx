import { Button } from "@smartflow/ui/button";

export default function Home() {
  return (
    <div className=" h-screen w-screen bg-stone-900">
      <div className="flex h-20 w-full items-center bg-stone-900 px-8">
        <h1 className="text-3xl text-white">Smartflow</h1>
        <Button className="ml-20 mr-4">Docs</Button>
        <Button className="mx-4 bg-stone-900">Help</Button>
        <Button className="mx-4 bg-stone-900">Blog</Button>
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

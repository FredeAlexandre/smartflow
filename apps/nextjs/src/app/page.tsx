import { Button } from "@smartflow/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-stone-900">
    <div className="flex w-full h-20 bg-stone-900 px-8 items-center">
      <h1 className="text-3xl color-white">Smartflow</h1>
      <Button className="ml-20 mr-4">Docs</Button>
      <Button className="mx-4 bg-stone-900">Help</Button>
      <Button className="mx-4 bg-stone-900">Blog</Button>
      <div className="flex h-full w-full justify-end items-center">
        <Button>Sign in</Button>
        <Button className="ml-4" variant="outline">Sign up</Button>
      </div>
    </div>
    <div className="justify-center w-full items-center slide-up flex-col flex">
      <h1 className="w-2/4 mt-30 text-center text-color-white text-7xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-gray from-15% via-white via-50% to-gray to-85%">Le meilleur moyen de créer des smart contracts</h1>
      <p className="mt-10 text-3xl w-2/4 text-center text-color-neutral-400">La solution no-code qui peut vous permetre de crée et deployer des smart contract</p>        
      <Button className="mt-10">Get started</Button>
    </div>
  </div>
  );
}

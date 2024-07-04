import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { Button } from "@smartflow/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@smartflow/ui/dialog";
import { Input } from "@smartflow/ui/input";
import { Label } from "@smartflow/ui/label";

export const ProjectCreator = ({
  onSubmitProject,
}: {
  onSubmitProject: (projectName: string) => void;
}) => {
  const [projectName, setProjectName] = useState("New Project");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="ml-8 flex h-52 w-72 shrink-0 items-center justify-center rounded-md border-2 border-stone-900"
          variant="ghost"
        >
          <Icon icon="lucide:plus" className="color-stone-900 h-10 w-10" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitProject(projectName);
            setProjectName("New Project");
          }}
        >
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a no-code smart contract.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project name" className="text-right">
                Project name
              </Label>
              <Input
                id="project name"
                defaultValue="New Project"
                className="col-span-3"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Create</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

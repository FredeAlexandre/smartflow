import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(skeleton)/project")({
  component: Project,
});
("use client");

import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import Navbar from "~/components/navbar";

interface Project {
  id: number;
  name: string;
  description: string;
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "Projet A", description: "Description du projet A" },
    { id: 2, name: "Projet B", description: "Description du projet B" },
  ]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
      setNewProject({ name: "", description: "" });
      setIsDialogOpen(false);
    }
  };

  return (
    <div>
      <Navbar
        links={[
          { label: "Overview", path: "/overview" },
          { label: "Project", path: "/project" },
          { label: "Activity", path: "/team_activity" },
          { label: "Settings", path: "/team_settings" },
        ]}
      />
      <div className="container mx-auto p-4">
        <h1 className="mb-6 font-bold text-3xl">Tableau de bord des projets</h1>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.id} href="/nocode">
              <Card>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Ajouter un projet
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Créer un nouveau projet</DialogTitle>
              <DialogDescription>
                Ajoutez les détails de votre nouveau projet ici. Cliquez sur
                sauvegarder lorsque vous avez terminé.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom
                </Label>
                <Input
                  id="name"
                  value={newProject.name}
                  onChange={(e) =>
                    setNewProject({ ...newProject, name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddProject}>
                Sauvegarder le projet
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

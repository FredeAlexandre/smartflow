import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(skeleton)/overview")({
  component: Overview,
});

import { Link } from "@tanstack/react-router";
import NavBar from "~/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface Project {
  id: number;
  name: string;
  description: string;
}

interface Library {
  id: number;
  name: string;
  description: string;
}

function Overview() {
  const projects: Project[] = [
    { id: 1, name: "Projet A", description: "Description du projet A" },
    { id: 2, name: "Projet B", description: "Description du projet B" },
  ];

  const libraries: Library[] = [
    { id: 1, name: "Contract 1", description: "Description Contract" },
    { id: 2, name: "Contract 2", description: "Description Contract" },
    { id: 3, name: "Contract 3", description: "Description Contract" },
  ];

  return (
    <div>
      <NavBar
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
            <Link key={project.id} to="/nocode">
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
      </div>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 font-bold text-3xl">Library</h1>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {libraries.map((library) => (
            <Card key={library.id}>
              <CardHeader>
                <CardTitle>{library.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{library.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

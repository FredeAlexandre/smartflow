'use client'

import NavBar from "../components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@smartflow/ui/card"


interface Project {
  id: number
  name: string
  description: string
}

interface Library {
  id: number
  name: string
  description: string
}

export default function Overview() {
  const projects : Project[] = [
    { id: 1, name: "Projet A", description: "Description du projet A" },
    { id: 2, name: "Projet B", description: "Description du projet B" },
  ]

  const libraries: Library[] = [
    { id: 1, name: 'Contract 1', description: 'Description Contract' },
    { id: 2, name: 'Contract 2', description: 'Description Contract' },
    { id: 3, name: 'Contract 3', description: 'Description Contract' },
  ];


  return (
    <div>
       <NavBar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Tableau de bord des projets</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Library</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
  )
}
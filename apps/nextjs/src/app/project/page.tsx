'use client'

import { Settings } from "lucide-react"
import { useState } from 'react'
import NavBar from "../components/navbar";
import { Plus } from 'lucide-react'
import { Button } from "@smartflow/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@smartflow/ui/card"
import { Input } from "@smartflow/ui/input"
import { Label } from "@smartflow/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@smartflow/ui/dialog"

interface Project {
  id: number
  name: string
  description: string
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "Projet A", description: "Description du projet A" },
    { id: 2, name: "Projet B", description: "Description du projet B" },
  ])

  const [newProject, setNewProject] = useState({ id: 0, name: '', description: '' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)


  const handleSaveProject = () => {
    if (newProject.name && newProject.description) {
      if (isEditing) {
        setProjects(
          projects.map((project) =>
            project.id === newProject.id ? { ...newProject } : project
          )
        )
      } else {
        setProjects([...projects, { ...newProject, id: Date.now() }])
      }
      resetDialog()
    }
  }


  const handleEditProject = (project: Project) => {
    setNewProject(project)
    setIsEditing(true)
    setIsDialogOpen(true)
  }


  const resetDialog = () => {
    setNewProject({ id: 0, name: '', description: '' })
    setIsEditing(false)
    setIsDialogOpen(false)
  }

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord des projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {projects.map((project) => (
            <Card key={project.id} className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleEditProject(project)}
              className="absolute top-2 right-2"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
          
          ))}
        </div>


        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{isEditing ? 'Modifier le projet' : 'Créer un nouveau projet'}</DialogTitle>
              <DialogDescription>
                {isEditing ? 'Modifier les détails de votre projet ici.' : 'Ajoutez les détails de votre nouveau projet ici.'}
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
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
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
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSaveProject}>
                {isEditing ? 'Sauvegarder les modifications' : 'Sauvegarder le projet'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un projet
        </Button>
      </div>
    </div>
  )
}

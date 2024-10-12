"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@smartflow/ui/avatar";
import { Button } from "@smartflow/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@smartflow/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@smartflow/ui/dialog";
import { Input } from "@smartflow/ui/input";
import { Label } from "@smartflow/ui/label";
import { Switch } from "@smartflow/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@smartflow/ui/tabs";
import { Textarea } from "@smartflow/ui/textarea";

import Navbar from "../components/navbar";

interface TeamMember {
  name: string;
  email: string;
}

export default function TeamSettings() {
  const [teamName, setTeamName] = useState("Mon Équipe");
  const [teamDescription, setTeamDescription] = useState(
    "Description de l'équipe",
  );
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [members, setMembers] = useState<TeamMember[]>([
    { name: "Alice Dubois", email: "alice@example.com" },
    { name: "Bob Martin", email: "bob@example.com" },
    { name: "Claire Lefebvre", email: "claire@example.com" },
  ]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [isAddMemberDialogOpen, setIsAddMemberDialogOpen] = useState(false);

  const handleSaveGeneral = () => {
    console.log("Paramètres généraux sauvegardés");
  };

  const handleSaveNotifications = () => {
    console.log("Paramètres de notification sauvegardés");
  };

  const handleAddMember = () => {
    if (newMemberName && newMemberEmail) {
      setMembers([...members, { name: newMemberName, email: newMemberEmail }]);
      setNewMemberName("");
      setNewMemberEmail("");
      setIsAddMemberDialogOpen(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="mb-6 text-3xl font-bold">Paramètres de l'équipe</h1>
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="members">Membres</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
                <CardDescription>
                  Mettez à jour les informations de base de votre équipe.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Nom de l'équipe</Label>
                  <Input
                    id="teamName"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamDescription">
                    Description de l'équipe
                  </Label>
                  <Textarea
                    id="teamDescription"
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveGeneral}>
                  Enregistrer les modifications
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>Membres de l'équipe</CardTitle>
                <CardDescription>
                  Gérez les membres de votre équipe ici.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {members.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40`}
                            alt={member.name}
                          />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.email}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline">Gérer</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Dialog
                  open={isAddMemberDialogOpen}
                  onOpenChange={setIsAddMemberDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button>Ajouter un membre</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau membre</DialogTitle>
                      <DialogDescription>
                        Entrez les détails du nouveau membre de l'équipe ici.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="newMemberName">Nom</Label>
                        <Input
                          id="newMemberName"
                          value={newMemberName}
                          onChange={(e) => setNewMemberName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newMemberEmail">Email</Label>
                        <Input
                          id="newMemberEmail"
                          type="email"
                          value={newMemberEmail}
                          onChange={(e) => setNewMemberEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleAddMember}>
                        Ajouter le membre
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres de notification</CardTitle>
                <CardDescription>
                  Gérez vos préférences de notification.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="emailNotifications">
                    Notifications par email
                  </Label>
                  <Switch
                    id="emailNotifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSaveNotifications}>
                  Enregistrer les préférences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

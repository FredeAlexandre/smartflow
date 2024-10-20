"use client";

import { Button } from "@smartflow/ui/button";
import { Input } from "@smartflow/ui/input";
import { Label } from "@smartflow/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@smartflow/ui/select";
import { Separator } from "@smartflow/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@smartflow/ui/sheet";
import { Switch } from "@smartflow/ui/switch";
import { Textarea } from "@smartflow/ui/textarea";
import { Bell, Link, Settings, Users } from "lucide-react";
import { useState } from "react";

export default function TeamSettingsOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <Users className="mr-2 h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[400px] overflow-y-auto sm:w-[540px]"
      >
        <SheetHeader>
          <SheetTitle className="text-left">Paramètres de l'équipe</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <section>
            <h3 className="flex items-center font-medium text-lg">
              <Settings className="mr-2 h-5 w-5" /> Informations générales
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="team-name">Nom de l'équipe</Label>
                <Input id="team-name" defaultValue="Mon équipe" />
              </div>
              <div>
                <Label htmlFor="team-description">
                  Description de l'équipe
                </Label>
                <Textarea
                  id="team-description"
                  placeholder="Décrivez votre équipe..."
                />
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center font-medium text-lg">
              <Users className="mr-2 h-5 w-5" /> Gestion des membres
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="invite-member">Inviter un nouveau membre</Label>
                <div className="mt-1 flex">
                  <Input
                    id="invite-member"
                    placeholder="Email du membre"
                    className="mr-2"
                  />
                  <Button>Inviter</Button>
                </div>
              </div>
              <div>
                <Label>Rôle par défaut pour les nouveaux membres</Label>
                <Select defaultValue="member">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrateur</SelectItem>
                    <SelectItem value="member">Membre</SelectItem>
                    <SelectItem value="viewer">Observateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center font-medium text-lg">
              <Bell className="mr-2 h-5 w-5" /> Paramètres de notification
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">
                  Notifications par email
                </Label>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">Notifications push</Label>
                <Switch id="push-notifications" />
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="flex items-center font-medium text-lg">
              <Link className="mr-2 h-5 w-5" /> Intégrations
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Slack</Label>
                  <p className="text-gray-500 text-sm">
                    Connectez votre équipe à Slack
                  </p>
                </div>
                <Button variant="outline">Connecter</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">GitHub</Label>
                  <p className="text-gray-500 text-sm">
                    Intégrez vos repositories GitHub
                  </p>
                </div>
                <Button variant="outline">Connecter</Button>
              </div>
            </div>
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@smartflow/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@smartflow/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@smartflow/ui/form";
import { Input } from "@smartflow/ui/input";
import { Switch } from "@smartflow/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@smartflow/ui/tabs";
import { Textarea } from "@smartflow/ui/textarea";

import Navbar from "../components/navbar";

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Le nom du projet doit contenir au moins 2 caractères.",
  }),
  description: z.string().optional(),
  contractName: z.string().min(2, {
    message: "Le nom du contrat doit contenir au moins 2 caractères.",
  }),
  contractSymbol: z.string().min(1, {
    message: "Le symbole du contrat est requis.",
  }),
  darkMode: z.boolean().default(false),
  notifications: z.boolean().default(true),
});

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      description: "",
      contractName: "",
      contractSymbol: "",
      darkMode: false,
      notifications: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSaving(true);
    // Simuler une sauvegarde asynchrone
    setTimeout(() => {
      console.log(values);
      setIsSaving(false);
    }, 2000);
  }

  return (
    <div>
      <Navbar
        links={[
          { label: "Nocode", path: "/nocode" },
          { label: "Activity", path: "/project_activity" },
          { label: "Settings", path: "/project_settings" },
        ]}
      />
      <div className="container mx-auto py-10">
        <h1 className="mb-6 text-3xl font-bold">Paramètres du projet</h1>
        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="contract">Smart Contract</TabsTrigger>
            <TabsTrigger value="preferences">Préférences</TabsTrigger>
          </TabsList>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres généraux</CardTitle>
                    <CardDescription>
                      Configurez les détails de base de votre projet.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="projectName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom du projet</FormLabel>
                          <FormControl>
                            <Input placeholder="Mon Projet NoCode" {...field} />
                          </FormControl>
                          <FormDescription>
                            Le nom de votre projet de smart contract no-code.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez votre projet en quelques mots..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="contract">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuration du Smart Contract</CardTitle>
                    <CardDescription>
                      Définissez les paramètres de votre smart contract.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="contractName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom du contrat</FormLabel>
                          <FormControl>
                            <Input placeholder="MonToken" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contractSymbol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Symbole du contrat</FormLabel>
                          <FormControl>
                            <Input placeholder="MTK" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Préférences utilisateur</CardTitle>
                    <CardDescription>
                      Personnalisez votre expérience utilisateur.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="darkMode"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Mode sombre
                            </FormLabel>
                            <FormDescription>
                              Activer le mode sombre pour l'interface
                              utilisateur.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="notifications"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Notifications
                            </FormLabel>
                            <FormDescription>
                              Recevoir des notifications sur l'avancement du
                              projet.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? (
                  <>Enregistrement...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Enregistrer les
                    modifications
                  </>
                )}
              </Button>
            </form>
          </Form>
        </Tabs>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { z } from "zod";

import { usePocketBase } from ".";

/**
 * Permet de verifier qu'une variable contien bien le contenu definie dans le schema
 *
 * Ici je definie ce que normalement on devrais recevoir de la BDD donc si on utilise
 *
 * const resulta = UserSchema.parse(model);
 *
 * resultat aura obligatoirement un objet avec le schema de UserSchema dans le cas contraire
 * l'application crash
 */
export const UserSchema = z.object({
  id: z.string(),
  username: z.string().nullable(),
  email: z.string().email(),
  created: z.string(),
  updated: z.string(),
});

export type User = z.infer<typeof UserSchema>;

/**
 *  Du code non tester que j'ai fais pour mon application.
 *
 * /!\ A tester et meme tous refaire en fonction de nos exigence sur le projet /!\
 */
export const useAuth = () => {
  const pb = usePocketBase();

  const user = React.useSyncExternalStore(
    (callback) => () => {
      pb.authStore.onChange(callback);
    },
    () => UserSchema.nullable().parse(pb.authStore.model),
  );

  const token = React.useSyncExternalStore(
    (callback) => () => {
      pb.authStore.onChange(callback);
    },
    () => UserSchema.nullable().parse(pb.authStore.token),
  );

  const login = ({ email, password }: { email: string; password: string }) => {
    return pb.collection("users").authWithPassword(email, password);
  };

  const logout = () => {
    return pb.authStore.clear();
  };

  const register = async (
    data: {
      email: string;
      password: string;
      repassword: string;
    } & Partial<User>,
  ) => {
    return pb.collection("users").create(data);
  };

  return { user, token, login, logout, register };
};

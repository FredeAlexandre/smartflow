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
  username: z.string(),
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

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    return pb.authStore.onChange((_, model) => {
      if (model == null) {
        setUser(null);
      } else {
        setUser(UserSchema.parse(model));
      }
    }, true);
  }, []);

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

  return { user, login, logout, register };
};

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import PocketBase from "pocketbase";
import type * as React from "react";

import { PocketBaseProvider } from "~/hooks/pocketbase/use-pocketbase";

// @ts-expect-error
import globals from "../globals.css?url";

import { ThemeProvider } from "~/components/theme-provider";

const queryClient = new QueryClient();

const pb = new PocketBase("http://127.0.0.1:8080/");

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  links: () => [{ rel: "stylesheet", href: globals }],
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <PocketBaseProvider pb={pb}>
            <Outlet />
          </PocketBaseProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}

import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@smartflow/ui";
import { ThemeProvider } from "@smartflow/ui/theme";
import { Toaster } from "@smartflow/ui/toast";

import "~/app/globals.css";

import { PocketBaseProvider } from "~/components/pocket-base-provider";
import { QueryClientProvider } from "~/components/query-client-provider";
import { env } from "~/env";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NODE_ENV === "production"
      ? "https://smart-flow.site"
      : "http://localhost:3000",
  ),
  title: "Smartflow - Easy Smart Contract in No Code",
  description: "The modern way to create smart contracts without coding",
  openGraph: {
    title: "Smartflow - Easy Smart Contract in No Code",
    description: "The modern way to create smart contracts without coding",
    url: "https://smart-flow.site",
    siteName: "Smartflow",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryClientProvider>
            <PocketBaseProvider>{props.children}</PocketBaseProvider>
          </QueryClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

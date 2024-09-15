"use client";

import {
  QueryClientProvider as OriginalQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const client = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <OriginalQueryClientProvider client={client}>
      {children}
    </OriginalQueryClientProvider>
  );
}

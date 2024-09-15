"use client";

import { pb } from "@smartflow/pocketbase";
import { PocketBaseProvider as OriginalPocketBaseProvider } from "@smartflow/pocketbase/client";

export function PocketBaseProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <OriginalPocketBaseProvider pb={pb}>{children}</OriginalPocketBaseProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import Navbar from "~/components/navbar";

export const Route = createFileRoute("/(skeleton)/nocode")({
  component: Nocode,
});

function Nocode() {
  return (
    <div>
      <Navbar
        links={[
          { label: "Nocode", path: "/nocode" },
          { label: "Activity", path: "/project_activity" },
          { label: "Settings", path: "/project_settings" },
        ]}
      />
      <h1>Aller leandre il faut bosser maintenant</h1>
    </div>
  );
}

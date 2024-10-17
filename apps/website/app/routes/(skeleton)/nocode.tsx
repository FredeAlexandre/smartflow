import { createFileRoute } from "@tanstack/react-router";

import Navbar from "~/components/navbar";
import { NoCodeExample } from "~/components/no-code-example";

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
      <NoCodeExample />
    </div>
  );
}

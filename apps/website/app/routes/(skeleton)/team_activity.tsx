import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(skeleton)/team_activity")({
  component: TeamActivityPage,
});
import { useMemo, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import Navbar from "~/components/navbar";

const allActivities = [
  {
    id: 1,
    user: "Alice",
    action: "created",
    target: "Project A",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    user: "Bob",
    action: "modified",
    target: "Project B",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: 3,
    user: "Charlie",
    action: "deployed",
    target: "Project C",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: 4,
    user: "David",
    action: "created",
    target: "Project D",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 5,
    user: "Eve",
    action: "modified",
    target: "Project E",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 6,
    user: "Frank",
    action: "deployed",
    target: "Project F",
    timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
  },
];

function TeamActivityPage() {
  const [timeFilter, setTimeFilter] = useState("7d");

  const filteredActivities = useMemo(() => {
    const now = new Date();
    const filterTime =
      {
        "7d": 7 * 24 * 60 * 60 * 1000,
        "3d": 3 * 24 * 60 * 60 * 1000,
        "1d": 24 * 60 * 60 * 1000,
      }[timeFilter] ?? 7 * 24 * 60 * 60 * 1000;

    return allActivities
      .filter(
        (activity) => now.getTime() - activity.timestamp.getTime() < filterTime,
      )
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [timeFilter]);

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  return (
    <div>
      <Navbar
        links={[
          { label: "Overview", path: "/overview" },
          { label: "Project", path: "/project" },
          { label: "Activity", path: "/team_activity" },
          { label: "Settings", path: "/team_settings" },
        ]}
      />
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="font-bold text-2xl">Activity</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-lg">Filters</h2>
              <p className="text-muted-foreground text-sm">
                Adjust the time range for the activity feed.
              </p>
            </div>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="3d">Last 3 days</SelectItem>
                <SelectItem value="1d">Last 24 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-8">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center border-b py-4 last:border-b-0"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={`/avatars/${activity.user.toLowerCase()}.png`}
                    alt={activity.user}
                  />
                  <AvatarFallback>{activity.user[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="font-medium text-sm">
                    {activity.user}{" "}
                    <span className="text-muted-foreground">
                      {activity.action}
                    </span>{" "}
                    {activity.target}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {formatRelativeTime(activity.timestamp)} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

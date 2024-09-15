"use client";

import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { usePocketBase } from "@smartflow/pocketbase/client";

function PageLayout({ children }: { children?: React.ReactNode }) {
  return <div className="flex justify-center pt-10">{children}</div>;
}

function DisplaySucess({ children }: { children: string[] | string }) {
  return <p className="text-xl">{children}</p>;
}

function DisplayError({ children }: { children: string[] | string }) {
  return <p className="text-xl text-red-500">{children}</p>;
}

export default function HomePage() {
  const pb = usePocketBase();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return pb.collection("test").getOne("hh7uvs8ne2fgbfb");
    },
  });

  if (isPending) return <PageLayout>"Loading..."</PageLayout>;

  if (isError)
    return (
      <PageLayout>
        <DisplayError>{error.message}</DisplayError>
      </PageLayout>
    );

  const result = z.object({ content: z.string() }).safeParse(data);

  if (!result.success)
    return (
      <PageLayout>
        <DisplayError>{result.error.message}</DisplayError>
      </PageLayout>
    );

  return (
    <PageLayout>
      <DisplaySucess>{result.data.content}</DisplaySucess>
    </PageLayout>
  );
}

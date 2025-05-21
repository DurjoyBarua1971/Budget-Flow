import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CreateTransactionDialog from "./_components/CreateTransactionDialog";

export default async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect("/wizard");
  }

  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card px-6">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="text-3xl font-bold">
            Hello,{" "}
            {user.firstName
              ? user.firstName.charAt(0).toUpperCase() +
                user.firstName.slice(1).toLowerCase()
              : ""}{" "}
            💕
          </p>
          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="!border-emerald-500 !bg-emerald-600 dark:!bg-emerald-950 !text-white hover:!bg-emerald-700 hover:!text-white"
                >
                  New income ➕
                </Button>
              }
              type="income"
            />
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="!border-red-500 !bg-red-600 dark:!bg-red-950 !text-white hover:!bg-red-700 hover:!text-white"
                >
                  New expense ➖
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

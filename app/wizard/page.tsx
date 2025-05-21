import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4 mx-auto">
      <div>
        <h1 className="text-center text-3xl">
          Welcome, <span className="ml-2 font-bold">{user.firstName}! 👋</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let&apos;s get started by setting up your currency
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change this later in the settings
        </h3>
      </div>
      <Separator />
      <Card className="px-2 w-[300px] sm:w-full sm:px-6">
        <CardTitle> Currency </CardTitle>
        <CardDescription>
          Set your default currency for transactions
        </CardDescription>
        <CardContent>
          <CurrencyComboBox />          
        </CardContent>
      </Card>
      <Separator />
      <Button>
        <Link href={"/"}>I&apos;m done! Take me to my dashboard</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}

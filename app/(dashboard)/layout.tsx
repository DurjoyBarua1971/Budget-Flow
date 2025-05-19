import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full relative">
      <Navbar />
      <div className="w-full"> {children}</div>
    </div>
  );
}

/*
https://youtu.be/nANLXwxZxks?feature=shared&t=1564
*/

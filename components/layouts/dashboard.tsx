import React from "react";
import Header from "../header/header";

type Props = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <main>
      <Header></Header>
      {children}
    </main>
  );
}

import Link from "next/link";
import React from "react";
import ActiveLink from "../next/active-link";

export default function Header() {
  const handleLanguageChange = (language: string) => {};

  return (
    <header className="grid grid-flow-col p-4 bg-purple-600 justify-between items-center sticky top-0 w-full left-0">
      <nav className="flex gap-4 text-white">
        {/* <Link href="/home" activeProps={() => ({ className: "font-bold" })}> */}
        <ActiveLink activeClassName="font-bold" href="/">
          {/* {t("home")} */}Home
        </ActiveLink>
        {/* <Link href="/user" activeProps={() => ({ className: "font-bold" })}> */}
        <ActiveLink href="/users" activeClassName="font-bold">
          {/* {t("user")} */}Users
        </ActiveLink>
      </nav>
      {/* <div className="text-white">{isFetching ? "Loading..." : ""}</div> */}
      <div className="text-white grid items-center justify-items-center grid-flow-col gap-2">
        <div className="flex gap-2 border border-solid border-purple-400 p-1 rounded-lg">
          <button onClick={() => handleLanguageChange("en")}>EN</button>
          <button onClick={() => handleLanguageChange("tr")}>TR</button>
        </div>
        <Link
          href="/profile"
          className="p-1 border border-solid border-purple-400 rounded-lg"
        >
          My Profile
        </Link>
      </div>
    </header>
  );
}

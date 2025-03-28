import React from "react";
import { Button } from "../button";
import { Link } from "react-router";
import { UserButton, useUser } from "@clerk/clerk-react";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex items-center justify-between">
      <img src="/logo.svg" width={100} height={100} />
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to={"/dashboard"}>
            <Button variant={"outline"}>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;

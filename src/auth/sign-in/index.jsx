import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="container mx-auto h-[90vh] flex justify-center items-center ">
      <SignIn />
    </div>
  );
};

export default SignInPage;

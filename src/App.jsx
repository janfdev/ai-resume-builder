import { Navigate, Outlet } from "react-router";
import { Button } from "./components/ui/button";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/ui/custom/Header";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

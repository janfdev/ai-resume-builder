import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import SignInPage from "./auth/sign-in";
import Home from "./home";
import Dashboard from "./dashboard";
import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "dashboard", element: <Dashboard /> }]
  },
  { path: "/", element: <Home /> },
  { path: "/auth/sign-in", element: <SignInPage /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);

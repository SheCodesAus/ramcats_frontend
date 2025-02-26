import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateOpportunityPage from "./pages/CreateOpportunityPage.jsx";
import OpportunityListingPage from "./pages/OpportunityListingPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import EditPage from "./pages/EditPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import { AuthProvider } from "./components/AuthProvider.jsx";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/create-opportunity", element: <CreateOpportunityPage /> },
      { path: "/opportunities/:id", element: <OpportunityListingPage /> },
      { path: "/profile", element: <UserProfilePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "opportunities/edit/:id", element: <EditPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

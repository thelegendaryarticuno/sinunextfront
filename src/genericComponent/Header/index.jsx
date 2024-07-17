import React from "react";
import PublicNavbar from "./Public";
import ProtectedNavbar from "./Protected";

export default function Header() {
  return (
    <header>{protectedRoutes ? <ProtectedNavbar /> : <PublicNavbar />}</header>
  );
}

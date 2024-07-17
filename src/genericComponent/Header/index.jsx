import React from "react";
import PublicNavbar from "./Public";
import ProtectedNavbar from "./Protected";

export default function Header() {
  const protectedRoutes = false
  return (
    <header>{protectedRoutes ? <ProtectedNavbar /> : <PublicNavbar />}</header>
  );
}

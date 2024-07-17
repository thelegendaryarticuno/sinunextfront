import React from "react";
import ProtectedFooter from "./ProtectedFooter";
import PublicFooter from "./PublicFooter";

export default function Footer() {
  return (
    <footer>{protectedFooter ? <ProtectedFooter /> : <PublicFooter />}</footer>
  );
}

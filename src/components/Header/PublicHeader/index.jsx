import { PROTECTEDNAVBARITEMARRAY } from "@/componentConstant/navbarConstant";
import Link from "next/link";
import React from "react";
import { NavbarLinkComponent } from "../ProtectedHeader/styledComponents";

export default function PublicHeader() {
  return (
    <>
      {PROTECTEDNAVBARITEMARRAY.map((item, idx) => (
        <NavbarLinkComponent key={idx} href={item.href} text={item.title} />
      ))}
    </>
  );
}

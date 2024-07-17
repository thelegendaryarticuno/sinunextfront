import Link from "next/link";
import Brand from "./stylecomponent";

export default function PublicNavbar() {
  return (
    <>
      <NavbarContainer>
        <Brand>
          <Link>siNUsoid</Link>
        </Brand>
      </NavbarContainer>
    </>
  );
}

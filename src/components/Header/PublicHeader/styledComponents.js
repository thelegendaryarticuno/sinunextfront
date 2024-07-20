import Link from "next/link";

const NavbarLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;

export function NavbarLinkComponent({ href, text }) {
  return <NavbarLink href={href}>{text}</NavbarLink>;
}


export const NavbarContainer = styled.div`
  display: flex;
`;

export const NavBar = styled.div``;

export function BrandLinkContainer({ href, text }) {
  return <BrandLink href={href}>{text}</BrandLink>;
}

export const BrandLink = styled(Link)`
  text-decoration: none;
`;

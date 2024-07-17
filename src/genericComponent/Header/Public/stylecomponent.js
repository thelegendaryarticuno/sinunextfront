import styled from "styled-components";

export const Nav = styled.nav``;

export const BrandLink = styled.Link`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
`;

export default function Brand({ href }) {
  return <BrandLink>{href}</BrandLink>;
}


import Link from "next/link";
import styled from "styled-components";

export const BrandBar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 60px 0 20px;
`;

export const BrandLogo = styled(Link)`
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 20px 0 60px;
`;
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  // position: sticky;
  // top: 50px;
  width: 100%;
  // height: 0;

  a {
    margin: 10px;
    font-size:20px;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
     <NavBarStyle>
     <h1>Sarah&apos;s portfolio</h1>
      <ul>
        <Link href="/">About</Link>
        <Link href="/Mycomponent">Projects</Link>
      </ul>
    </NavBarStyle>
  );
};

export default Navbar;

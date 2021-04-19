import React from "react";

import { Footer, Header, LayoutStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header>
        <h5>Buddy App</h5>
      </Header>
      <main style={{ marginTop: "60px" }}>{children}</main>
      <Footer>© 2020 ThisIsMyBuddy. A Limited Company</Footer>
    </LayoutStyled>
  );
};

export default Layout;

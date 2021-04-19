import React from "react";

import { Footer, Header } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <h5>Buddy App</h5>
      </Header>
      <main>{children}</main>
      <Footer>© 2020 ThisIsMyBuddy. A Limited Company</Footer>
    </div>
  );
};

export default Layout;

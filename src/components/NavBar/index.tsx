import { PropsWithChildren } from "react";

const NavBar = ({ children }: PropsWithChildren) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;

import { NavBarItemProps } from "./props.types";

const NavBarItem = ({ icon, children }: NavBarItemProps) => {
  return (
    <li>
      {icon}
      {children}
    </li>
  );
};

export default NavBarItem;

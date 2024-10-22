import { Link } from "react-router-dom";
import { NavBarSubItemProps } from "./props.types";

const NavBarSubItem = ({
  children,
  to,
  onClick,
  selected,
}: NavBarSubItemProps) => {
  return (
    <li
      className={`py-3 px-2 select-none hover:text-blue-500 ${
        selected ? "text-blue-700" : ""
      } list-disc`}
    >
      {to ? (
        <Link to={to}>{children}</Link>
      ) : (
        <div role="button" onClick={onClick}>
          {children}
        </div>
      )}
    </li>
  );
};

export default NavBarSubItem;

import { Link } from "react-router-dom";
import { NavBarItemProps } from "./props.types";
import { NavBarVariant } from "../NavBar/props.types";
import { useCallback } from "react";

const NavBarItem = ({
  icon,
  children,
  to,
  onClick,
  variant,
  selected,
}: NavBarItemProps) => {
  const Content = useCallback(
    () => (
      <>
        {icon}
        {variant === NavBarVariant.Expanded ? children : null}
      </>
    ),
    [icon, variant, children]
  );

  return (
    <li
      className={`py-3 px-2 select-none hover:text-blue-500 ${
        selected ? "text-blue-700" : ""
      }`}
    >
      {to ? (
        <Link to={to} className="flex gap-2">
          <Content />
        </Link>
      ) : (
        <div role="button" onClick={onClick}>
          <Content />
        </div>
      )}
    </li>
  );
};

export default NavBarItem;

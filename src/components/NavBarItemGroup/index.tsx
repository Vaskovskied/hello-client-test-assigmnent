import { NavBarVariant } from "../NavBar/props.types";
import { NavBarItemGroupProps } from "./props.types";

export const NavBarItemGroup = ({
  title,
  icon,
  variant = NavBarVariant.Expanded,
  children,
  onClick,
}: NavBarItemGroupProps) => {
  return (
    <li className="py-3 px-2">
      <div role="button" onClick={onClick}>
        {icon}
        {variant === NavBarVariant.Expanded ? title : null}
      </div>
    </li>
  );
};

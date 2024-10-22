import { Children, useEffect, useState } from "react";
import { NavBarVariant } from "../NavBar/props.types";
import { NavBarItemGroupProps } from "./props.types";
import {
  FloatingList,
  FloatingPortal,
  useClick,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";

const NavBarItemGroup = ({
  title,
  icon,
  variant = NavBarVariant.Expanded,
  children,
  onClick,
}: NavBarItemGroupProps) => {
  const [expanded, setExpanded] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);

  const expand = () => {
    if (onClick) {
      onClick(title, children);
    } else {
      setExpanded((prev) => !prev);
    }
  };

  const changeFloatingMenuOpen = (open: boolean) => {
    console.log(open);
    if (variant === NavBarVariant.Folded) {
      setFloatingMenuOpen(open);
    } else {
      setFloatingMenuOpen(false);
    }
  };

  useEffect(() => {
    if (variant !== NavBarVariant.Expanded) {
      setExpanded(false);
    }
  }, [variant]);

  const { refs, floatingStyles, context } = useFloating({
    open: floatingMenuOpen,
    onOpenChange: changeFloatingMenuOpen,
  });

  // const hover = useHover(context);
  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  return (
    <li className="py-3 px-2">
      <div
        role="button"
        className="flex gap-2 select-none hover:text-blue-500"
        ref={refs.setReference}
        {...getReferenceProps()}
        // onClick={expand}
      >
        {icon}
        {variant === NavBarVariant.Expanded ? title : null}
      </div>
      {variant === NavBarVariant.Expanded && expanded ? (
        <ul className="pl-6">{children}</ul>
      ) : variant === NavBarVariant.Folded && floatingMenuOpen ? (
        <div
          ref={refs.setFloating}
          className="bg-white rounded-md p-2 shadow-md  border-gray-300 "
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <h2 className="w-bold">{title}</h2>
          <ul>{children}</ul>
        </div>
      ) : null}
    </li>
  );
};
export default NavBarItemGroup;

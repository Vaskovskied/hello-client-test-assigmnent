import { useEffect, useState } from "react";
import { NavBarVariant } from "../NavBar/props.types";
import { NavBarItemGroupProps } from "./props.types";
import {
  flip,
  FloatingPortal,
  offset,
  safePolygon,
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
  selected,
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
    strategy: "fixed",
    placement: "right",
    middleware: [offset(16), flip()],
  });

  const hover = useHover(context, { handleClose: safePolygon() });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <li className="py-3 px-2">
      <div
        role="button"
        className={`flex gap-2 select-none hover:text-blue-500 ${
          selected ? "text-blue-700" : ""
        }`}
        onClick={expand}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {icon}
        {variant === NavBarVariant.Expanded ? title : null}
      </div>
      {variant === NavBarVariant.Expanded && expanded ? (
        <ul className="pl-6">{children}</ul>
      ) : variant === NavBarVariant.Folded && floatingMenuOpen ? (
        <FloatingPortal>
          <div
            className="bg-white min-w-32 rounded-md p-4 shadow-md border-gray-300"
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <h2 className="w-bold">{title}</h2>
            <ul className="pl-6">{children}</ul>
          </div>
        </FloatingPortal>
      ) : null}
    </li>
  );
};
export default NavBarItemGroup;

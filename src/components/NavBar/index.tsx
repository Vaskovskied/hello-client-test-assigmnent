import { FastArrowLeft, FastArrowRight } from "iconoir-react";
import { NavBarProps, NavBarVariant } from "./props.types";

const NavBar = ({
  children,
  variant,
  showExpandButton = false,
  onClickExpandButton,
}: NavBarProps) => {
  return (
    <div
      className={`sticky left-0 block ${
        variant === NavBarVariant.Expanded
          ? "w-56 h-full"
          : variant === NavBarVariant.Folded
          ? "h-full"
          : "w-full"
      } p-2`}
    >
      <div
        className={`flex ${
          variant !== NavBarVariant.Mobile ? "flex-col" : ""
        } justify-between h-full border border-gray-300 rounded-lg`}
      >
        <nav className={variant === NavBarVariant.Mobile ? "mx-auto" : ""}>
          <ul className={variant === NavBarVariant.Mobile ? "flex " : ""}>
            {children}
          </ul>
        </nav>
        {showExpandButton && variant !== NavBarVariant.Mobile ? (
          <button
            onClick={onClickExpandButton}
            className="p-2 hover:text-blue-500"
          >
            {variant === NavBarVariant.Expanded ? (
              <FastArrowLeft />
            ) : (
              <FastArrowRight />
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

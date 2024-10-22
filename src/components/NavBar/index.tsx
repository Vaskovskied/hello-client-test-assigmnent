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
        variant === NavBarVariant.Expanded ? "w-56" : ""
      } h-full p-2`}
    >
      <div className="flex flex-col justify-between h-full border border-gray-300 rounded-lg">
        <nav>
          <ul>{children}</ul>
        </nav>
        {showExpandButton ? (
          <button onClick={onClickExpandButton} className="p-2">
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

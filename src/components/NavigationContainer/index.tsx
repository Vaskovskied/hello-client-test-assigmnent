import { PropsWithChildren, useCallback, useState } from "react";
import NavBar from "../NavBar";
import RawNavBarItem from "../NavBarItem";
import { Home, InfoCircle } from "iconoir-react";
import { NavBarVariant } from "../NavBar/props.types";
import { NavBarItemProps } from "../NavBarItem/props.types";
import { useLocation } from "react-router-dom";

const NavigationContainer = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [variant, setVariant] = useState(NavBarVariant.Expanded);

  const NavBarItem = useCallback(
    (props: NavBarItemProps) => (
      <RawNavBarItem
        {...props}
        selected={props?.to === location.pathname}
        variant={variant}
      />
    ),
    [variant, location.pathname]
  );

  const onClickExpandButton = () => {
    if (variant === NavBarVariant.Expanded) {
      setVariant(NavBarVariant.Folded);
    }
    if (variant === NavBarVariant.Folded) {
      setVariant(NavBarVariant.Expanded);
    }
  };

  return (
    <div className="flex h-screen">
      <NavBar
        variant={variant}
        showExpandButton
        onClickExpandButton={onClickExpandButton}
      >
        <NavBarItem icon={<Home />} to="/">
          Home
        </NavBarItem>
        <NavBarItem icon={<InfoCircle />} to="/details">
          Details
        </NavBarItem>
      </NavBar>
      <main className="flex-grow pl-4 py-2 pr-2">{children}</main>
    </div>
  );
};

export default NavigationContainer;

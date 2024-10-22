import { ReactNode, useCallback, useEffect, useState } from "react";
import NavBar from "../NavBar";
import RawNavBarItem from "../NavBarItem";
import { Group, Home, InfoCircle } from "iconoir-react";
import { NavBarVariant } from "../NavBar/props.types";
import { NavBarItemProps } from "../NavBarItem/props.types";
import { Outlet, useLocation } from "react-router-dom";
import RawNavBarItemGroup from "../NavBarItemGroup";
import { NavBarItemGroupProps } from "../NavBarItemGroup/props.types";
import RawNavBarSubItem from "../NavBarSubItem";
import { NavBarSubItemProps } from "../NavBarSubItem/props.types";
import useWindowDimensions from "../../hooks/useWindowDemensions";
import Modal from "../Modal";

const NavigationContainer = () => {
  const { width } = useWindowDimensions();

  const isDeviceSmall = width <= 768;

  const location = useLocation();
  const [variant, setVariant] = useState(NavBarVariant.Expanded);
  const [groupModal, setGroupModal] = useState<{
    title: string;
    children: ReactNode;
  } | null>(null);

  useEffect(() => {
    if (isDeviceSmall) {
      setVariant(NavBarVariant.Mobile);
    } else {
      setVariant(NavBarVariant.Folded);
      setGroupModal(null);
    }
  }, [isDeviceSmall]);

  useEffect(() => {
    setGroupModal(null);
  }, [location.pathname]);

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

  const NavBarItemGroup = useCallback(
    (props: NavBarItemGroupProps) => {
      const onClick =
        variant === NavBarVariant.Mobile
          ? (title: string, children: ReactNode) => {
              setGroupModal({
                title: title || "",
                children: children,
              });
            }
          : undefined;

      return (
        <RawNavBarItemGroup
          onClick={onClick}
          variant={variant}
          selected={
            props?.to
              ? location.pathname.split("/")[1] === props.to.slice(1)
              : false
          }
          {...props}
        />
      );
    },

    [variant, location.pathname]
  );

  const NavBarSubItem = useCallback(
    (props: NavBarSubItemProps) => (
      <RawNavBarSubItem selected={props?.to === location.pathname} {...props} />
    ),
    [location.pathname]
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
    <div
      className={`flex h-screen ${
        variant === NavBarVariant.Mobile ? "flex-col-reverse" : ""
      }`}
    >
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
        <NavBarItemGroup icon={<Group />} title="Group" to="/group">
          <NavBarSubItem to={"/group/1"}>One</NavBarSubItem>
          <NavBarSubItem to={"/group/2"}>Two</NavBarSubItem>
          <NavBarSubItem to={"/group/3"}>Three</NavBarSubItem>
        </NavBarItemGroup>
      </NavBar>
      <main className="flex-grow pl-4 py-2 pr-2">
        <Outlet />
      </main>
      <Modal
        open={Boolean(groupModal?.title)}
        title={groupModal?.title || ""}
        onClose={() => setGroupModal(null)}
      >
        {groupModal?.children}
      </Modal>
    </div>
  );
};

export default NavigationContainer;

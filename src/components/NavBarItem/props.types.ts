import { PropsWithChildren, ReactNode } from "react";
import { NavBarVariant } from "../NavBar/props.types";

export interface NavBarItemProps extends PropsWithChildren {
  variant?: NavBarVariant;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
  selected?: boolean;
}

import { PropsWithChildren, ReactNode } from "react";
import { NavBarVariant } from "../NavBar/props.types";

export interface NavBarItemGroupProps extends PropsWithChildren {
  title?: string;
  variant?: NavBarVariant;
  icon: ReactNode;
  onClick?: () => void;
}

import { PropsWithChildren, ReactNode } from "react";
import { NavBarVariant } from "../NavBar/props.types";

export interface NavBarItemGroupProps extends PropsWithChildren {
  title: string;
  variant?: NavBarVariant;
  icon: ReactNode;
  to?: string;
  selected?: boolean;
  onClick?: (title: string, children: ReactNode) => void;
}

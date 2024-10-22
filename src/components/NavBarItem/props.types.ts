import { PropsWithChildren, ReactNode } from "react";

export interface NavBarItemProps extends PropsWithChildren {
  icon: ReactNode;
  to?: string;
  onClick?: () => void;
}

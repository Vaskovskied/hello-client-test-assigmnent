import { PropsWithChildren } from "react";

export interface NavBarSubItemProps extends PropsWithChildren {
  to?: string;
  onClick?: () => void;
  selected?: boolean;
}

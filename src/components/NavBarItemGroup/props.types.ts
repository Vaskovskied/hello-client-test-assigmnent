import { PropsWithChildren, ReactElement } from "react";

export interface NavBarItemGroupProps extends PropsWithChildren {
  icon?: ReactElement;
  title?: string;
}

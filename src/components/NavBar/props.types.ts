import { PropsWithChildren } from "react";

export enum NavBarVariant {
  Expanded,
  Folded,
  Mobile,
}

export interface NavBarProps extends PropsWithChildren {
  showExpandButton?: boolean;
  onClickExpandButton?: () => void;
  variant?: NavBarVariant;
}

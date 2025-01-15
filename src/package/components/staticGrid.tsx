import { cloneElement, HTMLAttributes, ReactElement } from "react";
import { RemixIconsList } from "../icons.ts";
import { cn } from "@lib/utils";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  current_selected?: string;
  isSelected?: string;
  children: ReactElement;
}

export const StaticGrid = ({ children, className, ...props }: Props) => {
  if (!children) throw Error("Icon component must be provided");
  return (
    <div className={cn(["flex flex-wrap", className])} {...props}>
      {RemixIconsList.map(({ Component, key }) =>
        cloneElement(children, { id: key, Icon: Component, key })
      )}
    </div>
  );
};

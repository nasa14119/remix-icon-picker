import { HTMLAttributes } from "react";
import type { RemixIcon } from "./icons.ts";
import { cn } from "./lib/utils";
import { ClassValue } from "clsx";
interface Props extends HTMLAttributes<HTMLDivElement> {
  Icons: RemixIcon[];
  classNameIcons?: ClassValue;
}

export const DynamicGrid = ({
  Icons,
  className,
  classNameIcons,
  onClick,
  ...props
}: Props) => {
  return (
    <div className={cn([className])} {...props}>
      {Icons.map(({ Component, key }) => (
        <span className={cn([classNameIcons])} onClick={onClick}>
          <Component key={key} />
        </span>
      ))}
    </div>
  );
};

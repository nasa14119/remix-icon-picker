import { HTMLAttributes, memo } from "react";
import type { RemixIcon } from "../icons.ts";
import { cn } from "../lib/utils.ts";
import { ClassValue } from "clsx";
interface Props extends HTMLAttributes<HTMLDivElement> {
  Icons: RemixIcon[];
  classNameIcons?: ClassValue;
}

const DynamicGridComponent = ({
  Icons,
  className,
  classNameIcons,
  onClick,
  ...props
}: Props) => {
  return (
    <div className={cn(["flex flex-wrap", className])} {...props}>
      {Icons.map(({ Component, key }) => (
        <span className={cn([classNameIcons])} onClick={onClick} key={key}>
          <Component />
        </span>
      ))}
    </div>
  );
};
export const DynamicGrid = memo(DynamicGridComponent);

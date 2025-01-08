import { HTMLAttributes, memo } from "react";
import type { RemixIcon } from "../icons.ts";
import { cn } from "../lib/utils.ts";
import { ClassValue } from "clsx";
interface Props extends HTMLAttributes<HTMLDivElement> {
  Icons: RemixIcon[] | null;
  classNameIcons?: ClassValue;
  errorClasses?: ClassValue;
}

const DynamicGridComponent = ({
  Icons,
  className,
  errorClasses,
  classNameIcons,
  onClick,
  ...props
}: Props) => {
  if (Icons === null) {
    return (
      <div
        className={cn(["flex flex-wrap", className, errorClasses])}
        {...props}
      >
        Not Found
      </div>
    );
  }
  return (
    <div className={cn(["flex flex-wrap", className])} {...props}>
      {Icons.map(({ Component, key }) => (
        <span className={cn([classNameIcons, key])} onClick={onClick} key={key}>
          <Component />
        </span>
      ))}
    </div>
  );
};
export const DynamicGrid = memo(DynamicGridComponent);

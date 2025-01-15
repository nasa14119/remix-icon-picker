import { HTMLAttributes, memo } from "react";
import type { RemixIcon } from "@lib/types";
import { cn } from "@lib/utils.ts";
import { ClassValue } from "clsx";
interface Props extends HTMLAttributes<HTMLDivElement> {
  Icons: RemixIcon[] | null;
  classNameIcons?: ClassValue;
  classNameDescription?: ClassValue;
  errorClasses?: ClassValue;
}

const DynamicGridComponent = ({
  Icons,
  className,
  errorClasses,
  classNameIcons,
  classNameDescription,
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
        <span
          className={cn(["size-10 flex flex-col text-center", classNameIcons])}
          onClick={onClick}
          key={key}
        >
          <Component className="size-full" />
          <span className={cn(["text-[6px] md:hidden", classNameDescription])}>
            {key}
          </span>
        </span>
      ))}
    </div>
  );
};
export const DynamicGrid = memo(DynamicGridComponent);

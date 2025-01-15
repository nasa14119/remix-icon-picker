import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@lib/utils";
import { RemixIcon } from "@lib/types";
import { ClassValue } from "clsx";

export type Props = HtmlHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    classNameSVG?: ClassValue;
    Icon?: RemixIcon["Component"];
    classNameBg?: ClassValue;
  };

export const Icon = ({
  Icon,
  classNameSVG,
  children,
  className,
  classNameBg,
  ...rest
}: Props) => {
  if (!Icon) throw Error("Icon is not provided");
  return (
    <button
      className={cn(["size-7 md:size-8 m-1", className, "relative group"])}
      {...rest}
    >
      <Icon className={cn(["size-full", classNameSVG])} />
      {children}
      <span
        className={cn([
          "absolute -inset-1 rounded-xl -z-30 group-hover:opacity-20 bg-[var(--text-color)] transition-opacity opacity-0",
          classNameBg,
        ])}
      ></span>
    </button>
  );
};

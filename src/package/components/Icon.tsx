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
      className={cn([
        "size-8 md:size-9 m-1 relative rounded-xl p-1",
        className,
        "group",
      ])}
      {...rest}
    >
      <Icon className={cn(["size-full", classNameSVG])} />
      {children}
      <span
        className={cn([
          "absolute inset-0 rounded-xl -z-30 group-hover:opacity-20 bg-[var(--text-color)] transition-opacity opacity-0",
          classNameBg,
        ])}
      ></span>
    </button>
  );
};

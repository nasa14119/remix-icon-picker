import { HtmlHTMLAttributes } from "react";
import { cn } from "@lib/utils";
import { ClassValue } from "clsx";

export interface Props extends HtmlHTMLAttributes<HTMLSpanElement> {
  text: string;
  classNameContainer?: string;
  classNameBg?: ClassValue;
}
export const DefaultTooltip = ({
  text,
  className,
  classNameContainer,
  classNameBg,
  style,
  ...props
}: Props) => {
  return (
    <span
      className={cn([
        "opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 flex justify-center items-center h-fit w-full pointer-events-none z-10",
        classNameContainer,
      ])}
      {...props}
    >
      <span
        className={cn(["w-fit text-sm relative text-white", className])}
        style={{ ...style }}
      >
        {text}
        <span
          className={cn([
            "absolute -inset-y-1 -inset-x-4 rounded-xl -z-30 group-hover:opacity-60 bg-[var(--text-color)] transition-opacity opacity-0",
            classNameBg,
          ])}
        ></span>
      </span>
    </span>
  );
};

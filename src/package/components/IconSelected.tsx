import { ClassValue } from "clsx";
import { RemixIconsObject } from "../icons";
import { KeyRemixObject, StaticContextType } from "@lib/types";
import { cn } from "@lib/utils";
import { Icon, Props as IconProps } from "./Icon";
import { useEffect, useState } from "react";

export interface Props extends Omit<IconProps, "id"> {
  id: StaticContextType["currentIcon"];
  defaultIcon?: KeyRemixObject;
  classNameLegend?: ClassValue;
  legend?: boolean;
}
export const IconSelected = ({
  id,
  defaultIcon,
  className,
  children,
  legend = false,
  classNameLegend,
  classNameBg,
  classNameSVG,
  ...props
}: Props) => {
  const [curretntIcon, setIcon] = useState(defaultIcon ?? "User3Fill");
  const iconSelected = RemixIconsObject[curretntIcon];
  useEffect(() => {
    if (!id) return;
    setIcon(() => id.key);
  }, [id]);
  return (
    <Icon
      className={cn([
        "size-full md:size-fit m-1 hover:cursor-default",
        className,
      ])}
      classNameSVG={cn(["size-7 md:size-8 mx-auto", classNameSVG])}
      Icon={iconSelected}
      classNameBg={cn("bg-current", classNameBg)}
      {...props}
    >
      {legend && (
        <span className={cn(["text-sm", classNameLegend])}>{curretntIcon}</span>
      )}
      {children}
    </Icon>
  );
};

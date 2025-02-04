import {
  IconSelected,
  Props as IconSelectedProps,
} from "@components/IconSelected.tsx";
import { useCurrentIcon } from "../hooks/context";
import { Children, cloneElement, CSSProperties, ReactElement } from "react";
import { cn } from "@lib/utils";

export const CurrentIcon = ({
  children,
  ...props
}: Omit<IconSelectedProps, "id"> & { children?: ReactElement }) => {
  const currentIcon = useCurrentIcon();
  if (currentIcon === null && children) {
    return (
      <IconSelected
        id={currentIcon}
        className={cn("group", props.className)}
        style={
          { "--text-color": "currentColor", ...props.style } as CSSProperties
        }
      >
        {Children.map(children, (child) => {
          return cloneElement(child, {
            text: props.defaultIcon ?? "User3fill",
          });
        })}
      </IconSelected>
    );
  }
  if (children && currentIcon !== null) {
    return (
      <IconSelected id={currentIcon} className={cn("group", props.className)}>
        {Children.map(children, (child) => {
          return cloneElement(child, { text: currentIcon.key });
        })}
      </IconSelected>
    );
  }
  return <IconSelected {...props} id={currentIcon} />;
};

export default CurrentIcon;

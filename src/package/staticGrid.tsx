import { HTMLAttributes } from "react";
import { RemixIcons } from "./icons";
import { cn } from "./lib/utils";
import { ClassValue } from "clsx";
interface Props extends HTMLAttributes<HTMLDivElement> {
  current_selected?: string;
  classNameIcons?: string;
  isSelected?: ClassValue;
}

export const StaticGrid = ({
  isSelected,
  current_selected,
  className,
  classNameIcons,
  onClick,
  ...props
}: Props) => {
  return (
    <div className={cn([className])} {...props}>
      {RemixIcons.map(({ Component, key }) => {
        if (key === current_selected) {
          return (
            <span
              className={cn([isSelected, classNameIcons])}
              onClick={onClick}
            >
              <Component />
            </span>
          );
        }
        return (
          <span className={cn([classNameIcons])} onClick={onClick}>
            <Component key={key} />
          </span>
        );
      })}
    </div>
  );
};

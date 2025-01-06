import { HTMLAttributes } from "react";
import { icons } from "./icons";
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
  ...props
}: Props) => {
  return (
    <div className={cn([className])} {...props}>
      {icons.map(({ Component, key }) => {
        if (key === current_selected) {
          return (
            <span className={cn([isSelected, classNameIcons])}>
              <Component />
            </span>
          );
        }
        return (
          <span className={cn([classNameIcons])}>
            <Component key={key} />
          </span>
        );
      })}
    </div>
  );
};

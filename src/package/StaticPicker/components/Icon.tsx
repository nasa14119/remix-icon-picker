import {
  Icon as DefaultIcon,
  Props as PropsDefaultIcon,
} from "@components/Icon.tsx";
import { KeyRemixObject } from "@lib/types";
import { Children, cloneElement, ReactElement } from "react";
import { DefaultTooltip } from "@components/Tooltip";
import { useNewIcon, useSuggetionsFind } from "../hooks/context";
import { cn } from "@lib/utils";
interface PropsIcon extends Omit<PropsDefaultIcon, "onClick"> {
  readonly id?: KeyRemixObject;
  tooltip?: boolean;
  children?: ReactElement;
  tooltipColor?: string;
  isFoundClass?: string;
}
const Icon = ({
  tooltip = false,
  Icon,
  isFoundClass = "",
  id,
  tooltipColor,
  children,
  className,
  ...props
}: PropsIcon) => {
  const changeIcon = useNewIcon();
  const isFound = useSuggetionsFind(id);
  const handleClick = () => {
    if (!id) return;
    changeIcon(id);
  };
  if (!Icon || !id) throw Error("No corrisponting parent added");
  if (children) {
    return (
      <DefaultIcon
        Icon={Icon}
        onTouchStart={handleClick}
        onClick={handleClick}
        className={cn({ [isFoundClass]: isFound }, className)}
        {...props}
      >
        {Children.map(children, (child) =>
          cloneElement(child, { text: id, key: id })
        )}
      </DefaultIcon>
    );
  }
  if (!tooltip) {
    return (
      <DefaultIcon
        Icon={Icon}
        onClick={handleClick}
        onTouchStart={handleClick}
        className={cn({ [isFoundClass]: isFound }, className)}
        {...props}
      />
    );
  }
  return (
    <DefaultIcon
      Icon={Icon}
      onClick={handleClick}
      onTouchStart={handleClick}
      className={cn(
        { ["isFound"]: isFound },
        { [isFoundClass]: isFound },
        className
      )}
      {...props}
    >
      <DefaultTooltip text={id} style={{ color: tooltipColor || "" }} />
    </DefaultIcon>
  );
};
export default Icon;

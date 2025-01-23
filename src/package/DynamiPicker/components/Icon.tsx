import {
  Icon as DefaultIcon,
  Props as PropsDefaultIcon,
} from "@components/Icon.tsx";
import { KeyRemixObject } from "@lib/types";
import { Children, cloneElement, ReactElement } from "react";
import { DefaultTooltip } from "@components/Tooltip";
import { useSetIcon } from "../hooks/context";
interface PropsIcon extends Omit<PropsDefaultIcon, "onClick"> {
  readonly id?: KeyRemixObject;
  tooltip?: boolean;
  children?: ReactElement;
  tooltipColor?: string;
  isFoundClass?: string;
}
export const Icon = ({
  tooltip = false,
  Icon,
  id,
  tooltipColor,
  children,
  ...props
}: PropsIcon) => {
  const changeIcon = useSetIcon();
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
        {...props}
      />
    );
  }
  return (
    <DefaultIcon
      Icon={Icon}
      onClick={handleClick}
      onTouchStart={handleClick}
      {...props}
    >
      <DefaultTooltip text={id} style={{ color: tooltipColor || "" }} />
    </DefaultIcon>
  );
};

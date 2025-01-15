// import { ClassValue } from "clsx";
import { PropsWithChildren, useState } from "react";
import { RemixIcon, StaticContextType } from "@lib/types";
import { getIcon } from "../icons.ts";
import { StaticContext } from "./hooks/context";
import Grid from "./components/Grid";
import CurrentIcon from "./components/CurrentIcon.tsx";
import Icon from "./components/Icon";
import Tooltip from "./components/Tooltip";

export function StaticPicker({
  onIconChange,
  children,
}: PropsWithChildren & { onIconChange?: (icon: RemixIcon) => void }) {
  const [currentIcon, setIcon] =
    useState<StaticContextType["currentIcon"]>(null);
  const handleChange: StaticContextType["setNewIcon"] = (newIcon) => {
    setIcon(() => {
      const icon = getIcon(newIcon);
      if (onIconChange) onIconChange(icon);
      return icon;
    });
  };
  return (
    <StaticContext.Provider value={{ currentIcon, setNewIcon: handleChange }}>
      {children}
    </StaticContext.Provider>
  );
}
StaticPicker.Grid = Grid;
StaticPicker.CurrentIcon = CurrentIcon;
StaticPicker.Icon = Icon;
StaticPicker.Tooltip = Tooltip;

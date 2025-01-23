import { DynamicContextType, RemixIcon } from "@lib/types";
import { PropsWithChildren, useState } from "react";
import { DynamicContext } from "./hooks/context";
import { getIcon } from "../icons.ts";
import { Grid } from "./components/Grid";
import { Icon } from "./components/Icon";
import { Tooltip } from "./components/Tooltip.tsx";
import { Input } from "./components/Input.tsx";
import { CurrentIcon } from "./components/CurrentIcon";
interface Props extends PropsWithChildren {
  onIconChange?: (new_icon: RemixIcon) => void;
}
export function DynamicPicker({ children, onIconChange }: Props) {
  const [currentIcon, setIcon] =
    useState<DynamicContextType["currentIcon"]>(null);
  const handleIconChange: DynamicContextType["setNewIcon"] = (new_icon) => {
    const icon = getIcon(new_icon);
    if (onIconChange) onIconChange(icon);
    setIcon(() => icon);
  };
  const [inputSearch, setInputSearch] =
    useState<DynamicContextType["inputSearch"]>("");
  const handleChange: DynamicContextType["handleInput"] = (new_input) => {
    setInputSearch(new_input);
  };
  return (
    <DynamicContext.Provider
      value={{
        currentIcon,
        setNewIcon: handleIconChange,
        inputSearch,
        handleInput: handleChange,
      }}
    >
      {children}
    </DynamicContext.Provider>
  );
}
DynamicPicker.Grid = Grid;
DynamicPicker.Icon = Icon;
DynamicPicker.Tooltip = Tooltip;
DynamicPicker.Input = Input;
DynamicPicker.CurrentIcon = CurrentIcon;

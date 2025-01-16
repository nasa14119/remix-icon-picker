// import { ClassValue } from "clsx";
import { PropsWithChildren, useCallback, useState } from "react";
import { RemixIcon, StaticContextType } from "@lib/types";
import { getIcon } from "../icons.ts";
import { StaticContext } from "./hooks/context";
import Grid from "./components/Grid";
import CurrentIcon from "./components/CurrentIcon.tsx";
import Icon from "./components/Icon";
import Tooltip from "./components/Tooltip";
import Input from "./components/Input";
import { useFilterWithInput } from "@hooks/useFilterWithInput";

export function StaticPicker({
  onIconChange,
  children,
}: PropsWithChildren & { onIconChange?: (icon: RemixIcon) => void }) {
  const [currentIcon, setIcon] =
    useState<StaticContextType["currentIcon"]>(null);
  const [inputText, setInputText] =
    useState<StaticContextType["inputText"]>("");
  const suggestions = useFilterWithInput(inputText);
  const handleChange: StaticContextType["setNewIcon"] = (newIcon) => {
    setIcon(() => {
      const icon = getIcon(newIcon);
      if (onIconChange) onIconChange(icon);
      return icon;
    });
  };
  const handleInput: StaticContextType["handleInput"] = useCallback(
    setInputText,
    [setInputText]
  );
  return (
    <StaticContext.Provider
      value={{
        inputText,
        currentIcon,
        setNewIcon: handleChange,
        suggestions,
        handleInput,
      }}
    >
      {children}
    </StaticContext.Provider>
  );
}
StaticPicker.Grid = Grid;
StaticPicker.CurrentIcon = CurrentIcon;
StaticPicker.Icon = Icon;
StaticPicker.Tooltip = Tooltip;
StaticPicker.InputText = Input;

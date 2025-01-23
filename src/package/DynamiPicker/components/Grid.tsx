import {
  DynamicGrid,
  Props as DynamicGridProps,
} from "@components/dynamicGrid";
import { useDynamicIcons } from "@hooks/useDynamicIcons";
import { useInputSearch } from "../hooks/context";
import { CSSProperties } from "react";

interface Props extends Omit<DynamicGridProps, "Icons"> {
  light?: boolean;
  color?: string;
}
export function Grid({
  light = false,
  color,
  children,
  style,
  ...props
}: Props) {
  const inputSearch = useInputSearch();
  const icons = useDynamicIcons(inputSearch);
  return (
    <DynamicGrid
      style={
        {
          "--text-color": color ?? (light ? "#000" : "#fff"),
          color: "var(--text-color)",
          ...style,
        } as CSSProperties
      }
      Icons={icons}
      {...props}
    >
      {children}
    </DynamicGrid>
  );
}

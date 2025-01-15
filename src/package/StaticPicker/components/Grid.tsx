import { CSSProperties, ReactElement } from "react";
import { StaticGrid, Props as PropsStaticGrid } from "@components/staticGrid";
import { cn } from "@lib/utils";

interface PorpsGrid extends PropsStaticGrid {
  color?: string;
  light?: boolean;
  children: ReactElement;
}
const Grid = ({
  light = false,
  color,
  style,
  className,
  ...props
}: PorpsGrid) => {
  if (!color) {
    return (
      <StaticGrid
        style={
          {
            "--text-color": light ? "#000" : "#fff",
            ...style,
          } as CSSProperties
        }
        className={cn([light ? "text-black" : "text-white", className])}
        {...props}
      />
    );
  }
  return (
    <StaticGrid
      style={
        {
          color,
          "--text-color": !color ? (light ? "#000" : "#fff") : color,
          ...style,
        } as CSSProperties
      }
      className={className}
      {...props}
    />
  );
};

export default Grid;

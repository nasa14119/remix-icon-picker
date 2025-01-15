import { StaticContextType } from "@lib/types";
import { createContext, useContext } from "react";

export const StaticContext = createContext<StaticContextType | null>(null);

export const useNewIcon = () => {
  const context = useContext(StaticContext);
  if (!context) throw Error("Context not found, check for parent container");
  return context.setNewIcon;
};

export const useCurrentIcon = () => {
  const context = useContext(StaticContext);
  if (!context) throw Error("Context not found, check for parent container");
  return context.currentIcon;
};

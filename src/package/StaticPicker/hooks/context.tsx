import { StaticContextType } from "@lib/types";
import { isSimilarKey, normalizeBiggerString } from "@lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

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

export const useInput = () => {
  const context = useContext(StaticContext);
  if (!context) throw Error("Context not found, check for parent container");
  return {
    onChange: context.handleInput,
    value: context.inputText,
  };
};
export const useSuggetionsWord = (value: string) => {
  const context = useContext(StaticContext);
  if (!context) throw Error("Context not found, check for parent container");
  const { suggestions } = context;
  if (!value) return null;
  if (suggestions.length < 0) return null;
  try {
    const word = suggestions.find((now) => isSimilarKey(value, now));
    if (!word) return null;
    return normalizeBiggerString(value, word);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useSuggetionsFind = (key?: string) => {
  const [isFound, setFound] = useState(false);
  const context = useContext(StaticContext);
  if (!context) throw Error("Context not found, check for parent container");
  const { suggestions, inputText } = context;
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setFound(() => {
        if (!key) return false;
        return (
          typeof suggestions.find((v) => isSimilarKey(v, key)) !== "undefined"
        );
      });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [suggestions, key]);
  if (!inputText) return false;
  return isFound;
};

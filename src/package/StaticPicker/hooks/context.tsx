import { StaticContextType } from "@lib/types";
import { isSimilarKey, normalizeBiggerString } from "@lib/utils";
import { createContext, useContext, useEffect, useRef, useState } from "react";

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
export const useSuggetionsWord = () => {
  const context = useContext(StaticContext);
  const [suggestion, setSuggestion] = useState("");
  if (!context)
    throw Error("Error finding context check for the parent component");
  const { inputText, suggestions: suggestionsContext } = context;
  const suggestions = useRef<string[]>([]);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (!inputText) return;
      suggestions.current = [...suggestionsContext];
      const word = suggestions.current.find((current_word) =>
        isSimilarKey(inputText, current_word)
      );
      setSuggestion(() => (word ? normalizeBiggerString(inputText, word) : ""));
    }, 500);
    return () => {
      setSuggestion("");
      clearTimeout(timeOutId);
    };
  }, [inputText, suggestionsContext]);
  if (!inputText) return "";
  return suggestion;
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

import { DynamicContextType } from "@lib/types";
import {
  getSuggestions,
  isSimilarKey,
  normalizeBiggerString,
} from "@lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

export const DynamicContext = createContext<DynamicContextType | null>(null);

export const useInputSearch = () => {
  const context = useContext(DynamicContext);
  if (!context)
    throw Error("Error finding context check for the parent component");
  return context.inputSearch;
};

export const useInputHandler = () => {
  const context = useContext(DynamicContext);
  if (!context)
    throw Error("Error finding context check for the parent component");
  return context.handleInput;
};
export const useCurrentIcon = () => {
  const context = useContext(DynamicContext);
  if (!context)
    throw Error("Error finding context check for the parent component");
  return context.currentIcon;
};
export const useSetIcon = () => {
  const context = useContext(DynamicContext);
  if (!context)
    throw Error("Error finding context check for the parent component");
  return context.setNewIcon;
};
export const useSuggestionWord = () => {
  const context = useContext(DynamicContext);
  const [suggestion, setSuggestion] = useState("");
  if (!context)
    throw Error("Error finding context check for the parent component");
  const { inputSearch } = context;
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (!inputSearch) return;
      const suggestions = getSuggestions(inputSearch);
      if (!suggestions) return;
      const word = suggestions?.find((current_word) =>
        isSimilarKey(inputSearch, current_word)
      );
      setSuggestion(word ? normalizeBiggerString(inputSearch, word) : "");
    }, 500);
    return () => {
      setSuggestion(() => "");
      clearTimeout(timeOutId);
    };
  }, [inputSearch]);
  if (!inputSearch) return "";
  return suggestion;
};

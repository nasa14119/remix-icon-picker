import { useEffect, useState } from "react";
import { RemixIconsList } from "../icons.ts";
import { isSimilarKeyArray, getSuggestions } from "@lib/utils.ts";
import { RemixIcon } from "@lib/types.ts";

const filterData = (input: string) => {
  const suggestions = getSuggestions(input);
  if (suggestions === null) return null;
  return RemixIconsList.filter((icon) =>
    isSimilarKeyArray(suggestions, icon.key)
  );
};
export const useDynamicIcons = (input: string): RemixIcon[] | null => {
  const [icons, setIcons] = useState<RemixIcon[] | null>(RemixIconsList);
  useEffect(() => {
    if (!input) return setIcons(RemixIconsList);
    const timeOutId = setTimeout(() => {
      setIcons(() => {
        const value = filterData(input);
        return value;
      });
    }, 100);
    return () => clearTimeout(timeOutId);
  }, [input]);
  if (!input) return RemixIconsList;
  return icons;
};

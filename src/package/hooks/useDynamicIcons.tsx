import { useEffect, useState } from "react";
import { RemixIconsList } from "../icons.ts";
import { isSimilarKey } from "@lib/utils.ts";

export const filteredData = (check: string) =>
  RemixIconsList.filter((v) => isSimilarKey(check, v.key));
export const useDynamicIcons = (input: string[]) => {
  const [icons, setIcons] = useState(RemixIconsList);
  useEffect(() => {
    setIcons(filteredData(input.join(",")));
  }, [input]);
  if (!input) {
    return RemixIconsList;
  }
  return icons;
};

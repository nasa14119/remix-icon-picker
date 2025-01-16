import { useEffect, useState } from "react";
import search_file from "../search.json";
import { isSimilarKey, startsWithPart } from "@lib/utils";

const filterData = (inp: string) => {
  const temp = [];
  for (const iteration in search_file) {
    if (
      // @ts-expect-error iteration string will allwaiy be defined because is in a for in
      startsWithPart(inp, search_file[iteration]) ||
      isSimilarKey(inp, iteration)
    ) {
      temp.push(iteration);
    }
  }
  return temp;
};
export const useFilterWithInput = (inp: string): string[] => {
  const [result, setResult] = useState<string[]>(Object.keys(search_file));
  useEffect(() => {
    const timeId = setTimeout(() => {
      setResult(() => filterData(inp));
    }, 200);
    return () => {
      clearTimeout(timeId);
    };
  }, [inp]);
  return result;
};

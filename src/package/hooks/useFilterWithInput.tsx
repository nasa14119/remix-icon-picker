import { useEffect, useState } from "react";
import search_file from "../search.json";
import { isSimilarKey, startsWithPart } from "@lib/utils";

const filterData = (inp: string) => {
  try {
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
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const useFilterWithInput = (inp: string): string[] => {
  const [result, setResult] = useState<string[]>([]);
  useEffect(() => {
    setResult(() => filterData(inp));
  }, [inp]);
  if (!inp) return [];
  return result;
};

import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";
export const cn = (...args: ClassValue[]) => twMerge(clsx(args));
import search_file from "../search.json";
export function startsWithPart(inp: string, str: string) {
  const regex = new RegExp(`^${inp}`, "i"); // ^ asegura que busque al inicio, 'i' ignora mayúsculas/minúsculas
  return str.split(",").some((word) => regex.test(word.trim()));
}
export function isSimilarKey(search: string, key: string) {
  return search
    .split(",")
    .some((word) => new RegExp(`^${word}`, "i").test(key));
}
export function isSimilarKeyArray(search: string[], key: string) {
  return search.some((word) => new RegExp(`^${word}`, "i").test(key));
}
export function isSimilar(inp: string, str: string) {
  const normalizedPart = inp.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
  const normalizedStr = str.replace(/\s+/g, "").toLowerCase(); // Elimina todos los espacios y convierte a minúsculas
  return normalizedStr.startsWith(normalizedPart); // V
}
export function normalizeBiggerString(shorter: string, longer: string) {
  if (!longer) return "";
  const formatted = longer
    .split("") // Divide el string largo en caracteres
    .map((char, index) => {
      if (index < shorter.length) {
        // Aplica mayúscula o minúscula según el carácter en `shorter`
        return shorter[index] === shorter[index].toUpperCase()
          ? char.toUpperCase()
          : char.toLowerCase();
      }
      return char; // Mantiene el resto del string igual
    })
    .join(""); // Une los caracteres formateados en un string

  return formatted;
}
export const getSuggestions = (input: string): null | string[] => {
  try {
    const temp = [];
    for (const iteration in search_file) {
      if (
        // @ts-expect-error iteration string will allwaiy be defined because is in a for in
        startsWithPart(input, search_file[iteration]) ||
        isSimilarKey(input, iteration)
      ) {
        temp.push(iteration);
      }
    }
    if (temp.length <= 0) return null;
    return temp;
  } catch (error) {
    console.log(error);
    return null;
  }
};

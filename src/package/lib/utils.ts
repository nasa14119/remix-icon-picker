import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";
export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export function startsWithPart(inp: string, str: string) {
  const regex = new RegExp(`^${inp}`, "i"); // ^ asegura que busque al inicio, 'i' ignora mayúsculas/minúsculas
  return str.split(",").some((word) => regex.test(word.trim()));
}

export function isSimilar(inp: string, str: string) {
  const normalizedPart = inp.trim().toLowerCase(); // Elimina espacios y convierte a minúsculas
  const normalizedStr = str.replace(/\s+/g, "").toLowerCase(); // Elimina todos los espacios y convierte a minúsculas
  return normalizedStr.startsWith(normalizedPart); // V
}

import { isSimilarKey, normalizeBiggerString } from "@lib/utils";
import { HtmlHTMLAttributes } from "react";
interface Props extends HtmlHTMLAttributes<HTMLSpanElement> {
  value: string;
  found_items: string[];
}
export const Autosuggest = ({ value, found_items }: Props) => {
  return (
    <span className="absolute text-left inset-0 flex justify-start px-4 items-center bg-transparent opacity-30 pointer-events-none">
      {normalizeBiggerString(
        value,
        found_items.filter((v) => isSimilarKey(value, v))[0]
      )}
    </span>
  );
};

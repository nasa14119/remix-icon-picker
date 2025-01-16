import { HtmlHTMLAttributes } from "react";
export interface Props extends HtmlHTMLAttributes<HTMLSpanElement> {
  suggestion: string | null;
}
export const Autosuggest = ({ suggestion }: Props) => {
  return (
    <>
      {suggestion !== null && (
        <span className="absolute text-left inset-0 flex justify-start px-4 items-center bg-transparent opacity-30 pointer-events-none">
          {suggestion}
        </span>
      )}
    </>
  );
};

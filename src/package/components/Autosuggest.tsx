import { HtmlHTMLAttributes } from "react";
interface Props extends HtmlHTMLAttributes<HTMLSpanElement> {
  suggestion: string;
}
export const Autosuggest = ({ suggestion }: Props) => {
  return (
    <span className="absolute text-left inset-0 flex justify-start px-4 items-center bg-transparent opacity-30 pointer-events-none">
      {suggestion}
    </span>
  );
};

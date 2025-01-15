import { HtmlHTMLAttributes } from "react";
import { cn } from "@lib/utils";
import { ClassValue } from "clsx";
import { Autosuggest } from "./Autosuggest";

interface Props extends Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange"> {
  found_items: string[];
  inputClassName?: ClassValue;
  onChange: (input: string) => void;
  value: string;
}
export const InputTextPicker = ({
  inputClassName,
  className,
  found_items,
  value,
  onChange,
  ...props
}: Props) => {
  const autosuggest = found_items.length !== 0 && value;
  return (
    <span className={cn(["size-full relative", className])}>
      <input
        className={cn([
          "size-full bg-transparent px-4 py-2 outline-none",
          inputClassName,
        ])}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...props}
      />
      {autosuggest && <Autosuggest found_items={found_items} value={value} />}
    </span>
  );
};

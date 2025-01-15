import { HtmlHTMLAttributes } from "react";
import { cn } from "@lib/utils";
import { Autosuggest } from "./Autosuggest";

type PropsInput = Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange">;
interface Props extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "onChange"> {
  autosuggest?: string;
  value: string;
  onChange: (input: string) => void;
  inputProps: PropsInput;
}
export const InputTextPicker = ({
  autosuggest,
  className,
  value,
  onChange,
  inputProps,
  ...props
}: Props) => {
  return (
    <span className={cn(["size-full relative", className])} {...props}>
      <input
        className={cn([
          "size-full bg-transparent px-4 py-2 outline-none",
          inputProps.className,
        ])}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...inputProps}
      />
      {typeof autosuggest !== "undefined" && (
        <Autosuggest suggestion={autosuggest} />
      )}
    </span>
  );
};

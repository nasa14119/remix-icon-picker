import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { cn } from "@lib/utils";

type PropsInput = Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange">;
export interface Props
  extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "onChange">,
    PropsWithChildren {
  onChange: (input: string) => void;
  inputProps?: PropsInput;
}
export const InputTextPicker = ({
  className,
  onChange,
  inputProps,
  children,
  ...props
}: Props) => {
  const [localValue, setValue] = useState("");
  useEffect(() => {
    const timeOutId = setTimeout(() => onChange(localValue), 200);
    return () => clearTimeout(timeOutId);
  }, [localValue, onChange]);
  return (
    <span
      className={cn([
        "size-full relative px-4 py-2 rounded-3xl text-black bg-white",
        className,
      ])}
      {...props}
    >
      <input
        className={cn([
          "size-full bg-transparent outline-none",
          inputProps?.className ? inputProps.className : "",
        ])}
        onChange={(e) => setValue(e.target.value)}
        value={localValue}
        {...inputProps}
      />
      {children}
    </span>
  );
};

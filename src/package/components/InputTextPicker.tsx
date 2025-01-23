import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { cn } from "@lib/utils";

type PropsInput = Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange">;
export interface Props
  extends Omit<
      HtmlHTMLAttributes<HTMLSpanElement>,
      "onChange" | "onKeyDownCapture"
    >,
    PropsWithChildren {
  onChange: (input: string) => void;
  inputProps?: PropsInput;
  onKeyDownCapture: (
    event: KeyboardEvent<HTMLSpanElement>,
    setInput: (new_val: string) => void
  ) => void;
}
export const InputTextPicker = ({
  className,
  onChange,
  inputProps,
  children,
  onKeyDownCapture,
  ...props
}: Props) => {
  const [localValue, setValue] = useState("");
  useEffect(() => {
    const timeOutId = setTimeout(() => onChange(localValue), 50);
    return () => clearTimeout(timeOutId);
  }, [localValue, onChange]);
  return (
    <span
      className={cn([
        "size-full relative px-4 py-2 rounded-3xl text-black bg-white",
        className,
      ])}
      onKeyDownCapture={(e) => {
        if (onKeyDownCapture) {
          onKeyDownCapture(e, setValue);
        }
      }}
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

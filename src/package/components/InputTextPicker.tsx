import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@lib/utils";

type PropsInput = Omit<HtmlHTMLAttributes<HTMLInputElement>, "onChange">;
interface Props
  extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "onChange">,
    PropsWithChildren {
  value: string;
  onChange: (input: string) => void;
  inputProps: PropsInput;
}
export const InputTextPicker = ({
  className,
  value,
  onChange,
  inputProps,
  children,
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
      {children}
    </span>
  );
};

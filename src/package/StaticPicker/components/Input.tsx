import { PropsWithChildren } from "react";
import { useInput, useSuggetionsWord } from "../hooks/context";
import {
  InputTextPicker,
  Props as ComponentProps,
} from "@components/InputTextPicker";
import { Autosuggest } from "@components/Autosuggest";
type Props = PropsWithChildren &
  Omit<ComponentProps, "value" | "onChange" | "onKeyDownCapture">;
const Input = ({ children, ...props }: Props) => {
  const { onChange } = useInput();
  const suggestion = useSuggetionsWord();
  if (!children) {
    return (
      <InputTextPicker
        {...props}
        onChange={onChange}
        onKeyDownCapture={(e, setValue) => {
          if (e.key === "Enter") {
            if (!suggestion) return;
            setValue(suggestion);
          }
        }}
      >
        <Autosuggest suggestion={suggestion} />
      </InputTextPicker>
    );
  }
};

export default Input;

import { PropsWithChildren } from "react";
import { useInputHandler, useSuggestionWord } from "../hooks/context";
import {
  InputTextPicker,
  Props as ComponentProps,
} from "@components/InputTextPicker";
import { Autosuggest } from "@components/Autosuggest";
type Props = PropsWithChildren &
  Omit<ComponentProps, "value" | "onChange" | "onKeyDownCapture">;
export const Input = ({ children, ...props }: Props) => {
  const suggestion = useSuggestionWord();
  const onChange = useInputHandler();
  if (!children) {
    return (
      <InputTextPicker
        {...props}
        onChange={onChange}
        onKeyDownCapture={(e, setValue) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (!suggestion) return;
            onChange(suggestion);
            setValue(suggestion);
          }
        }}
      >
        <Autosuggest suggestion={suggestion} />
      </InputTextPicker>
    );
  }
};

import { PropsWithChildren } from "react";
import { useInput, useSuggetionsWord } from "../hooks/context";
import {
  InputTextPicker,
  Props as ComponentProps,
} from "@components/InputTextPicker";
import { Autosuggest } from "@components/Autosuggest";
type Props = PropsWithChildren & Omit<ComponentProps, "value" | "onChange">;
const Input = ({ children, ...props }: Props) => {
  const { value, onChange } = useInput();
  const suggestion = useSuggetionsWord(value);
  if (!children) {
    return (
      <InputTextPicker {...props} onChange={onChange}>
        <Autosuggest suggestion={suggestion} />
      </InputTextPicker>
    );
  }
};

export default Input;

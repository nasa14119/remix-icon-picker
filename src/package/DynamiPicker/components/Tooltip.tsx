import {
  DefaultTooltip,
  Props as DefaultTooltipProps,
} from "@components/Tooltip.tsx";

interface PropsTooltip extends Omit<DefaultTooltipProps, "text"> {
  text?: string;
}
export const Tooltip = ({ text, ...props }: PropsTooltip) => {
  if (!text) throw Error("No correct parent provided");
  return <DefaultTooltip text={text} {...props} />;
};

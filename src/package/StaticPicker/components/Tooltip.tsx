import {
  DefaultTooltip,
  Props as DefaultTooltipProps,
} from "../../components/Tooltip.tsx";

interface PropsTooltip extends Omit<DefaultTooltipProps, "text"> {
  text?: string;
}
const Tooltip = ({ text, ...props }: PropsTooltip) => {
  if (!text) throw Error("No correct parent provided");
  return <DefaultTooltip text={text} {...props} />;
};

export default Tooltip;

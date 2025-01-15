import {
  IconSelected,
  Props as IconSelectedProps,
} from "@components/IconSelected.tsx";
import { useCurrentIcon } from "../hooks/context";

const CurrentIcon = ({ ...props }: Omit<IconSelectedProps, "id">) => {
  const currentIcon = useCurrentIcon();
  return <IconSelected {...props} id={currentIcon} />;
};
export default CurrentIcon;

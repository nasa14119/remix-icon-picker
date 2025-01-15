import { IconSelected } from "@components/IconSelected.tsx";
import { useCurrentIcon } from "../hooks/context";

const CurrentIcon = () => {
  const currentIcon = useCurrentIcon();
  return <IconSelected id={currentIcon} />;
};
export default CurrentIcon;

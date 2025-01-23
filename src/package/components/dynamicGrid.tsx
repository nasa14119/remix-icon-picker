import {
  cloneElement,
  HTMLAttributes,
  memo,
  ReactElement,
  ReactNode,
} from "react";
import type { RemixIcon } from "@lib/types";
import { cn } from "@lib/utils.ts";
export interface Props extends HTMLAttributes<HTMLDivElement> {
  Icons: RemixIcon[] | null;
  notFound?: ReactNode;
  children: ReactElement;
}

const DynamicGridComponent = ({
  Icons,
  className,
  notFound,
  children,
  ...props
}: Props) => {
  if (Icons === null) {
    if (notFound) return <>{notFound}</>;
    return (
      <div className={cn(["flex flex-wrap", className])} {...props}>
        Not Found
      </div>
    );
  }
  return (
    <div className={cn(["flex flex-wrap", className])} {...props}>
      {Icons.map(({ Component, key }) =>
        cloneElement(children, { id: key, Icon: Component, key })
      )}
    </div>
  );
};
export const DynamicGrid = memo(DynamicGridComponent);

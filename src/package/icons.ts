import * as remix_icons from "@remixicon/react";
import { KeyRemixObject, RemixIcon } from "./lib/types";

function iconsList() {
  const parse_content = [];
  const content = Object.entries(remix_icons);
  for (let i = 0; i < content.length; i++) {
    const key = content[i][0].slice(2);
    parse_content.push({
      key,
      Component: content[i][1],
    });
  }
  return parse_content as RemixIcon[];
}
type RemixIconKeys = keyof typeof remix_icons;
type ParsedKeys = RemixIconKeys extends `Ri${infer Rest}` ? Rest : never;
function iconsObject() {
  const parse_content: Record<string, remix_icons.RemixiconComponentType> = {};
  const content = Object.entries(remix_icons);
  for (let i = 0; i < content.length; i++) {
    const key = content[i][0].slice(2) as ParsedKeys;
    parse_content[key] = content[i][1];
  }
  return parse_content as Record<
    ParsedKeys,
    remix_icons.RemixiconComponentType
  >;
}
export const RemixIconsList = iconsList();
export const RemixIconsObject = iconsObject();

export const getIcon = (icon: KeyRemixObject): RemixIcon => {
  return { key: icon, Component: RemixIconsObject[icon] };
};

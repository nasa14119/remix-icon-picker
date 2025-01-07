import * as remix_icons from "@remixicon/react";

export type RemixIcon = {
  key: string;
  Component: remix_icons.RemixiconComponentType;
};
export type RemixIconObject = {
  [key: string]: remix_icons.RemixiconComponentType;
};
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
  return parse_content;
}
function iconsObject() {
  const parse_content: RemixIconObject = {};
  const content = Object.entries(remix_icons);
  for (let i = 0; i < content.length; i++) {
    const key = content[i][0].slice(2);
    parse_content[key] = content[i][1];
  }
  return parse_content;
}
export const RemixIconsList = iconsList() as RemixIcon[];
export const RemixIconsObject = iconsObject();

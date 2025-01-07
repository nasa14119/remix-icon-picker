function camelToKebabWithNumbers(text: string) {
  return text
    .replace(/([a-z])([A-Z0-9])/g, "$1-$2") // De letra minúscula a mayúscula o número
    .replace(/([0-9])([a-zA-Z])/g, "$1-$2") // De número a letra
    .toLowerCase();
}
import * as remix_icons from "@remixicon/react";

const parse_content = [];
const content = Object.entries(remix_icons);
export type RemixIcon = {
  key: string;
  Component: remix_icons.RemixiconComponentType;
};
for (let i = 0; i < content.length; i++) {
  const key = content[i][0].slice(2);
  parse_content.push({
    key,
    Component: content[i][1],
  });
}

export const RemixIcons = [...parse_content] as RemixIcon[];

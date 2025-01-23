import type { RemixiconComponentType } from "@remixicon/react";
import { RemixIconsObject } from "../icons";

export type KeyRemixObject = keyof typeof RemixIconsObject;

export type RemixIcon = {
  key: KeyRemixObject;
  Component: RemixiconComponentType;
};

export interface StaticContextType {
  currentIcon: RemixIcon | null;
  setNewIcon: (icon: KeyRemixObject) => void;
  inputText: string;
  handleInput: (prev: string) => void;
  suggestions: string[];
}

export interface DynamicContextType {
  currentIcon: RemixIcon | null;
  setNewIcon: (icon: KeyRemixObject) => void;
  inputSearch: string;
  handleInput: (prev: string) => void;
}

import { ReactNode } from "react";

export type LinkType = {
  href: string;
  title: string;
};

export interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

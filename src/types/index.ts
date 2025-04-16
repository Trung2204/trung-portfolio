import { ReactNode } from "react";

export type LinkType = {
  href: string;
  title: string;
};

export type ProjectsDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

export type TabDataType = {
  title: string;
  id: string;
  content: ReactNode;
};

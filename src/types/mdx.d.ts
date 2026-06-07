// src/types/mdx.d.ts
declare module "*.mdx" {
  import { ReactNode } from "react";

  // Define the shape of your exported 'meta' object
  export const meta: {
    title: string;
    description: string;
    date: string;
    image: string;
    tags: string[];
  };

  // Define the default export (the MDX component)
  const defaultExport: (props: any) => ReactNode;
  export default defaultExport;
}

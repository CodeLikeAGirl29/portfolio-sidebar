import { BlogLayout } from "@/components/BlogLayout";
import Content from "./content.mdx";
import { meta } from "./content.mdx"; // Or whatever your meta export is

export default function Page() {
  return (
    <BlogLayout meta={meta}>
      <Content />
    </BlogLayout>
  );
}

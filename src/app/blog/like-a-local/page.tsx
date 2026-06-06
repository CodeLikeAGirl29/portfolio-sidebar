import { BlogLayout } from "@/components/BlogLayout";
import Content, { meta } from "./content.mdx";

export default function Page() {
  return (
    <BlogLayout meta={meta}>
      <Content />
    </BlogLayout>
  );
}

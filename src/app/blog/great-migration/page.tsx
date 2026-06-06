import { BlogLayout } from "@/components/BlogLayout";
import Content from "./content.mdx";
import { meta } from "./content.mdx"; // Or use * as meta if you prefer

export default function Page() {
  return (
    <BlogLayout meta={meta}>
      <Content />
    </BlogLayout>
  );
}

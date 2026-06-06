import { BlogLayout } from "@/components/BlogLayout";
import Content, * as meta from "./content.mdx";

export default function Page() {
  return (
    <BlogLayout meta={meta}>
      <Content />
    </BlogLayout>
  );
}

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Lindsey H",
  description:
    "Lindsey Howard is a frontend web developer and designer based in the Florida Panhandle, specializing in React, Next.js, and building custom digital experiences.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">
        I write about pixels and property
      </Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight>I started building</Highlight>, I&apos;ve been
        fascinated by the architecture of both code and coastal homes.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}

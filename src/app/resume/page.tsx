import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💻</span>
      <Heading className="font-black">Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
        I am a frontend developer and business owner who specializes in{" "}
        <Highlight>architecting modern interfaces</Highlight> using React,
        Next.js, and Tailwind CSS.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}

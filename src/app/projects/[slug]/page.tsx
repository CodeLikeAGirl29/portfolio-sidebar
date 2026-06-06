import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>; // Change this to Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // Await params here
  const product = products.find((p) => p.slug === slug);
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Lindsey H",
      description:
        "Lindsey Howard is a frontend web developer and designer based in the Florida Panhandle, specializing in React, Next.js, and building custom digital experiences.",
    };
  }
}

export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Change this to Promise
}) {
  const { slug } = await params; // Await params here
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}

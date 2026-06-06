"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
"/images/image-1.jpg",
"/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

     <div className="max-w-4xl">
      <Paragraph className="mt-4">
        Hey there, I&apos;m Lindsey Howard — a soon-to-be licensed Florida Real Estate 
        Sales Associate driven by a mission to provide a transparent, tech-forward, 
        and client-centered experience from the ground up.
      </Paragraph>

      <Paragraph className="mt-4">
        Having recently completed my 63-hour pre-licensing coursework, I’ve built a 
        rigorous foundation in real estate principles, property law, and contract 
        ethics. What sets me apart in the Fort Walton Beach market is a rare blend 
        of technical precision and a &quot;get-it-done&quot; Southern work ethic.
      </Paragraph>

      <Paragraph className="mt-4">
        My background brings a unique set of assets to the table:
      </Paragraph>

      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
        <li>
          <strong>The Tech Advantage:</strong> As a Full-Stack Web Developer, I 
          don&apos;t just use digital tools—I build them. I leverage data analytics 
          and custom digital marketing to ensure listings stand out.
        </li>
        <li>
          <strong>The Mechanical Eye:</strong> My experience as an Automotive 
          Technician has sharpened my attention to detail and taught me to thrive 
          in high-stakes environments where reliability is non-negotiable.
        </li>
        <li>
          <strong>The Marketer’s Grit:</strong> With over four years in strategic 
          sales and marketing, I have a proven track record of increasing revenue 
          and expanding market presence through targeted, effective campaigns.
        </li>
      </ul>

      <Paragraph className="mt-4">
        I value honesty, clear communication, and building genuine trust. Whether 
        it’s navigating a complex contract or helping a family find their first 
        home in the Florida Panhandle, I am committed to ensuring my clients feel 
        confident and informed every step of the way.
      </Paragraph>

      <Paragraph className="mt-4">
        I am currently seeking a sponsoring broker in Florida where I can 
        contribute my unique skill set to a driven team and help grow the business 
        through innovation and hard work. Let&apos;s connect!
      </Paragraph>
    </div>
    </div>
  );
}

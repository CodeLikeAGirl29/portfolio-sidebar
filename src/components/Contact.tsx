"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 💡 Replace this with your actual Web3Forms Access Key
          access_key: "14116aac-e6f7-4a9a-ad28-8f80540617a6",
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData(defaultFormState); // Reset form

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <Heading className="font-black pb-4 text-3xl">Get in touch</Heading>
        <Paragraph>
          Whether you&apos;re looking to build a website or find a home in the
          Panhandle, I&apos;d love to hear from you.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Your Existing Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 px-4 py-2 rounded-md text-sm text-neutral-700 w-full transition-shadow duration-200"
                value={formData.name.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 px-4 py-2 mt-4 rounded-md text-sm text-neutral-700 w-full transition-shadow duration-200"
                value={formData.email.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={10}
                required
                className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-slate-400 px-4 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full resize-none transition-shadow duration-200"
                value={formData.message.value}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: { value: e.target.value, error: "" },
                  })
                }
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                disabled={isSubmitting}
                className="px-6 py-3 w-full md:w-auto bg-slate-900 text-white font-semibold rounded-lg shadow-sm hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
              </motion.button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm font-medium text-emerald-600"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: The Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-sm border border-neutral-100 relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55039.82161363061!2d-86.67128134454958!3d30.436417980196214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889116d2aaa0387d%3A0xe3a6ad0f3c9e67c7!2sFort%20Walton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1780702457656!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-90"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

"use client";

import Container from "@/components/utility/Container";
import Heading from "@/components/utility/Heading";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Loader from "./utility/Loader";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    if (!e || !e.target || !e.target.elements) return;
    e.preventDefault();
    try {
      setLoading(true);
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const message = e.target.elements.message.value;
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        { name, message, email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
      if (res.status !== 200) console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };
  return (
    <Container section="contact">
      <Heading>Contact</Heading>
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-[85%] pt-[15px] text-center text-[18px] font-light leading-tight md:w-[40%] md:text-[20px]">
            Feel free to contact us if you have any questions, comments or
            concerns!
          </div>
          <form className="mt-[25px] w-full" onSubmit={handleSubmit}>
            <div className="mb-[12.5px] px-[15%] text-[16px] leading-tight opacity-50">
              Enter your <label htmlFor="name">name, </label>
              <label htmlFor="email">email and </label>
              <label htmlFor="message">message below:</label>
            </div>
            <div>
              <div className="mb-[25px]">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="h-[45px] w-[82%] rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="mb-[25px]">
                <input
                  placeholder="Email"
                  type="text"
                  id="email"
                  name="email"
                  className="h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                  required
                  autoComplete="email"
                />
              </div>
              <textarea
                placeholder="Your message..."
                type="text"
                id="message"
                name="message"
                className="mb-[25px] h-[220px] w-[82%] resize-none rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] pt-[10px] text-[18px] placeholder:font-light  focus:outline-none
                md:w-[50%] lg:mb-0"
                required
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="w-[185px] rounded-[3px] bg-red py-2 font-semibold outline-none md:mt-[25px]"
            >
              {!loading ? "SEND MESSAGE" : <Loader />}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

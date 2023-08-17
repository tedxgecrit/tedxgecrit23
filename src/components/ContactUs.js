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
          <div className="w-[73%] pt-[25px] text-center text-[20px] font-light md:w-[40%] md:text-[24px]">
            Feel free to contact us if you have any questions, comments or
            concerns
          </div>
          <form className="mt-10 h-[385px] w-full" onSubmit={handleSubmit}>
            <div>
              <div className="mb-[25px]">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  className="h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                  required
                />
              </div>
              <div className="mb-[25px]">
                <input
                  placeholder="Email"
                  type="text"
                  id="email"
                  className="h-[45px] w-[82%] rounded-t-[5px] border-b-2  border-red bg-deepGrey pl-[10px] text-[18px] placeholder:font-light focus:outline-none md:w-[50%]"
                  required
                />
              </div>
              <textarea
                placeholder="Your message..."
                type="text"
                id="message"
                className="h-[220px] w-[82%] resize-none rounded-t-[5px] border-b-2 border-red bg-deepGrey pl-[10px] pt-[10px] text-[18px] placeholder:font-light  focus:outline-none md:w-[50%]"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-[10px] h-[50px] w-[232px] rounded-[5px] bg-red text-[20px] font-semibold text-white outline-none md:mt-[30px] md:w-[280px]"
            >
              {!loading ? "SEND MESSAGE" : <Loader />}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}

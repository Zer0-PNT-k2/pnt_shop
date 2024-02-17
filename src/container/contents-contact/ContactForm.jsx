import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Wrapper from "../../components/wrapper";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flchutm",
        "template_bd8kdo5",
        formRef.current,
        "lNygUf-F-TvbhSJBj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Wrapper>
      <div className="text-center text-base mb-24">
        <h1 className="text-4xl font-normal my-10">
          Hỏi chúng tôi bất cứ điều gì ở đây!
        </h1>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-6 font-['Open_Serif']">
            <Input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Name *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div className="my-5">
            <Input
              type="text"
              id="Subject"
              name="Subject"
              placeholder="Subject *"
              className="h-6 w-full py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div>
            <textarea
              type="message"
              id="message"
              name="message"
              placeholder="Message *"
              cols="155"
              rows="10"
              className="px-3.5 py-2.5 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            />
          </div>
          <div className="my-5">
            <Button
              className="font-normal text-base mb-6 rounded-full py-3 px-12 
                        bg-red-600 text-white hover:opacity-"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

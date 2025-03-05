import React from "react";
import { Typography } from "@material-tailwind/react";
import Newsletter from "../components/Newsletter";
import InputField from "../components/InputField";
import AppButton from "../components/AppButton";

export function Contact() {
  return (
    <div>
      <section className="flex flex-col w-full h-full py-20 bg-white-100">
        <div className="flex space-x-10 gap-x-30 justify-center">
          <div className="flex-1 max-w-md">
            <Typography className="font-mono text-gray-500 text-left">
              HOTEL
            </Typography>
            <Typography
              className="text-left font-serif mb-2"
              color="black-light"
              variant="h2"
            >
              Say Hello
            </Typography>
            <Typography className="text-left mt-4 font-normal !text-lg !text-gray-500">
              Praesent fermentum ligula in dui imper diet, vel tempus nulla
              ultricies. Phasellus at commodo ligula. Praesent fermentum ligula
              in dui imper diet, vel tempus nulla ultricies. Phasellus at
              commodo.
            </Typography>
            <Typography className="text-left mt-10 font-normal !text-lg !text-gray-500">
              1481 Creekside Lane Avila Beach, CA 931
            </Typography>
            <Typography className="text-left mt-1 font-mono !text-lg !text-gray-500">
              +53 345795332453
            </Typography>
            <Typography className="text-left mt-1 font-normal !text-lg !text-gray-500">
              yourmail@gmail.com
            </Typography>
          </div>
          <div className="flex-1 max-w-lg content-center">
            <form action="#" className="flex flex-col gap-4">
              <div className="flex gap-4">
                <InputField
                  type="text"
                  placeholder="Your Name"
                  name="first-name"
                />
                <InputField
                  type="email"
                  placeholder="Your E-mail"
                  name="email"
                />
              </div>
              <InputField type="text" placeholder="Subject" name="subject" />
              <InputField
                type="textarea"
                placeholder="Message"
                name="message"
              />
              <AppButton
                className="w-full"
                color="gray"
                title="Subscribe"
              ></AppButton>
            </form>
          </div>
        </div>
        <div className="relative w-full h-96">
          <iframe
            className="absolute top-10 left-0 w-full h-full border:0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}

export default Contact;

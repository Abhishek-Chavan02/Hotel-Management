import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";

function Newsletter() {
  return (
    <div className="flex gap-50 justify-center">
      <div className="flex-1 max-w-md">
        <Typography className="font-mono text-gray-500 text-left">
          LUXURY RESORT
        </Typography>
        <Typography
          className="text-left font-serif mb-2"
          color="black-light"
          variant="h2"
        >
          Our Newsletter
        </Typography>
        <Typography className="text-left mt-4 font-normal !text-lg !text-gray-500">
          Praesent fermentum ligula in dui imperdiet, vel tempus nulla
          ultricies. Phasellus at commodo ligula. Nullam molestie volutp at
          sapien.
        </Typography>
      </div>
      <div className="flex-1 content-center max-w-lg">
        <div className="flex items-center">
          <Input
            type="email"
            placeholder="Your E-mail"
            name="email"
            className="!border !border-gray-300 placeholder:italic bg-white text-gray-900 shadow-lg
             shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100
              focus:!border-gray-900 focus:!border-t-gray-900
             focus:ring-gray-900/10 rounded-none"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />
          <Button color="lightBlue" ripple="light" className=" rounded-none ml-0">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
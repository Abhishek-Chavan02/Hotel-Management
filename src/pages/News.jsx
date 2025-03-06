import React from "react";
import blog_1 from "../assets/news/blog_1.jpg";
import blog_2 from "../assets/news/blog_2.jpg";
import blog_3 from "../assets/news/blog_3.jpg";
import blog_4 from "../assets/news/blog_4.jpg";
import blog_5 from "../assets/news/blog_5.jpg";
import blog_6 from "../assets/news/blog_6.jpg";
import { Typography } from "@material-tailwind/react";
import BookingTabs from "../components/BookingTabs";
import Newsletter from "../components/Newsletter";

export default function News() {
  return (
    <>
    <BookingTabs />
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
        {/* col 1 */}
        <div className="grid gap-4 justify-items-center">
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src={blog_1}
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">HOTEL</Typography>
              <Typography className="text-2xl font-bold font-serif">A new Swimming Pool</Typography>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className=" rounded-none object-cover object-center"
              src={blog_2}
              alt="gallery-photo"
            />

          </div>
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src={blog_3}
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">RESORT</Typography>
              <Typography className="text-2xl font-bold ">Seaside Views</Typography>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="grid gap-4 justify-items-center">
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src={blog_4}
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl text-black">VILLA</Typography>
              <Typography className="text-2xl font-bold font-serif text-purple">Mountain Escape</Typography>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src={blog_5}
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">LOUNGE</Typography>
              <Typography className="text-2xl font-bold">Cozy Interiors</Typography>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">CONFERENCE</Typography>
              <Typography className="text-2xl font-bold">Business Facilities</Typography>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className="grid gap-4 justify-items-center">
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">HOTEL</Typography>
              <Typography className="text-2xl font-bold">Ocean Views</Typography>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src={blog_6}
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl font-mono">RESORT</Typography>
              <Typography className="text-2xl font-bold font-serif">hotel
                A new Swimming Pool
                Praesent fermentum ligula in dui imper diet, vel tempus nulla ultricies. Phasellus at commodo ligula.</Typography>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              className="h-auto max-w-full rounded-none object-cover object-center"
              src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="gallery-photo"
            />
            <div className="absolute bottom-4 left-4  bg-opacity-50 text-white p-2 rounded-md">
              <Typography className="text-xl">VILLA</Typography>
              <Typography className="text-2xl font-bold">Stay in Luxury</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
    </>
  );
}

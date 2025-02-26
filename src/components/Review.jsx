import React from "react";
import { Rating, Typography, Avatar } from "@material-tailwind/react";

export function DefaultRating() {
  return <Rating value={4} size="sm" />;
}

export function AvatarDefault() {
  return (
    <Avatar
      src="https://docs.material-tailwind.com/img/face-2.jpg"
      alt="avatar"
      className="avatar"
    />
  );
}

function Review() {
  return (
    <div>
      <div className="mt-10">
        {DefaultRating()}
        <Typography className="text-left text-sm mt-4 font-normal !text-gray-500">
          “Praesent fermentum ligula in dui imperdiet, vel tempus nulla
          ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
          sapien, a dignissim tortor laoreet quis.
        </Typography>
      </div>
      <div
        className="avatar-container mt-2"
        style={{ display: "flex", alignItems: "center" }}
      >
        {AvatarDefault()}
        <Typography
          className="text-left text-sm font-normal !text-gray-500"
          style={{ marginLeft: "10px" }}
        >
          Michael Smith, Client
        </Typography>
      </div>
    </div>
  );
}

export default Review;

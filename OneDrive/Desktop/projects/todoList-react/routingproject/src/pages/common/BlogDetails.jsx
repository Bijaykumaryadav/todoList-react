import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import { blogs } from "../../Data/blogs";

export default function BlogDetails() {
  let uselocation = useLocation();
  let currentId = uselocation.pathname.split("/")[2];
  // note: filter returns an array
  let currentData = blogs.filter((v) => v.id == currentId)[0];
  return (
    <div>
      <Header />
      <h1>{currentData.title}</h1>
    </div>
  );
}

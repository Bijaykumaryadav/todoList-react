import React from "react";
import Header from "./Header";
import "./Header.css";
import { blogs } from "../../Data/blogs";
import { Link } from "react-router-dom";

export default function Blog() {
  let allBLogs = blogs.map((v, i) => {
    return (
      <div className="blogItems" key={i}>
        <h3>{v.title}</h3>
        <p>{v.body}</p>
        <button>
          <Link to={`/blog/${v.id}`}>Read More</Link>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <h1>Blog Page</h1>
      <div className="container">{allBLogs}</div>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/common/Blog";
import BlogDetails from "./pages/common/BlogDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));



// note: This is the static routing 
let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'about-us',
      element: <About />
    },
    {
      path: 'course',
      element: <Course/>
    },
    {
      path: 'blog',
      element: <Blog/>
    },
    {
      path: 'blog/:id',
      element: <BlogDetails />
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

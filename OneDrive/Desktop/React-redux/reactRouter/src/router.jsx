import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, User, Github } from "./components";
import Layout from "./Layout";
import { githubInfoLoader } from "./components/Github/Github";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // note: note down the name of the name of the paramaters capturing from the url now access of userid in that User components had been automatically done by the react
      {
        path: "user/:userid",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
        loader: githubInfoLoader,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout/>}>
//       <Route path="" element={<Home/>}/>
//       <Route path="about" element={<About/>}/>
//       <Route path="github" element={<Github/>} loader={githubInfoLoader}/>
//     </Route>
//   )
// )

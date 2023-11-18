
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home"
import CountryLayout from "./layouts/CountryLayout";
import Countries from "./pages/Countries";
import About from "./pages/About";
import Details from "./pages/Details";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/countries",
      element: <CountryLayout />,
      children: [
        {
          index: true,
          element: <Countries />,
        },
        {
          path: "/countries/:id",
          element: <Details/>
        },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App

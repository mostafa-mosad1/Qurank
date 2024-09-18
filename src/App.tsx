import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Quran from "./Pages/Quran/Quran";
import Descript from "./Pages/Explanation/Explanation";
import Hadiths from "./Pages/Hadiths/Hadiths";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Surah from "./Pages/Surah/Surah";
import SingleExplanation from "./Pages/SingleDescript/SingleExplanation";
import Radio from "./Pages/radio/radio";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Quran", element: <Quran /> },
      { path: "/Explanation", element: <Descript /> },
      { path: "/Hadiths", element: <Hadiths /> },
      { path: "/Surah/:id", element: <Surah /> },
      { path: "/SingleExplanation/:id/:name", element: <SingleExplanation /> },
      { path: "/radio", element: <Radio /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

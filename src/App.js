import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import HomePage from "./Pages/Home";
import DestinationPage from "./Pages/Destination";
import data from "./data.json";

function App() {
  // const routerDestination = data.destinations.map((destination) => ({
  //   path: `:${destination.name.toLowerCase()}`,
  //   element: <DestinationPage />,
  // }));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "destination/:planet",
          element: <DestinationPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

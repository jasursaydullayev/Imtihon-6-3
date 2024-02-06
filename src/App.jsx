import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Layout
import RootLayout from "./layout/RootLayout";

// Pages
import Home from "./pages/Home";
import Card from "./pages/Card";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "country/:id",
          element: <Card />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

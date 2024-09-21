import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./header";
import {
  Exercicio3,
  Exercicio4,
  Exercicio5,
  Exercicio6,
  Exercicio7,
  Exercicio8,
  Exercicio9,
  Exercicio10,
} from "./components";

function Home() {
  return (
    <div>
      <Navigation />
      <h2>Home Page</h2>
    </div>
  );
}

function NotFound() {
  return <h2>404 Page Not Found</h2>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "exercicio_3",
    element: <Exercicio3 />,
  },
  {
    path: "exercicio_4",
    element: <Exercicio4 />,
  },
  {
    path: "exercicio_5",
    element: <Exercicio5 />,
  },
  {
    path: "exercicio_6",
    element: <Exercicio6 />,
  },
  {
    path: "exercicio_7",
    element: <Exercicio7 />,
  },
  {
    path: "exercicio_8",
    element: <Exercicio8 />,
  },
  {
    path: "exercicio_9",
    element: <Exercicio9 />,
  },
  {
    path: "exercicio_10",
    element: <Exercicio10 />,
  },
  {
    path: "NotFound",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

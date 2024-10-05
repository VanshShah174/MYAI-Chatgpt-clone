import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hompage from "./routes/homepage/Homepage.jsx";
import ChatPage from "./routes/chatPage/chatPage.jsx";
import RootLayout from "./layouts/rootLayout/rootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import DashboardPage from "./routes/dashboardPage/dashboardPage.jsx";
const router = createBrowserRouter([
 {
  element:<RootLayout />,
  children:[
    {
      path: "/",
      element: <Hompage />,
    },
    {
      element:<DashboardLayout />,
      children:[
        {
          path: "/dashboard",
          element: <DashboardPage />
        },
        {
          path: "/dashboard/chats/:id",
          element:<ChatPage />
        }
      ]
    }
  ]
 }
  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

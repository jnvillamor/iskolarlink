import Homepage from "@/pages/Homepage/Homepage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: '',
    element: Homepage(),
  },
  {
    path: '/login',
    element: LoginPage(),
  }
])
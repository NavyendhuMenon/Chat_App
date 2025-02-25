import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import MessagePage from "../components/MessagePage";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //parent layout
    children: [
      { path: "signup", element: <AuthLayout> <SignUp /> </AuthLayout> },
      { path: "signin", element : <AuthLayout> <SignIn /> </AuthLayout> },
      {
        path: "",
        element: <Home />,
        children: [{ path: ":userId", element: <MessagePage /> }],
      },
    ],
  },
]);

export default router;

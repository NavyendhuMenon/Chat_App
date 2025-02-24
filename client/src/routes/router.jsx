import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import MessagePage from "../components/MessagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //parent layout
    children: [
      { path: "signUp", element: <SignUp /> },
      { path: "signIn", element: <SignIn /> },
      {
        path: "",
        element: <Home />,
        children: [{ path: ":userId", element: <MessagePage /> }],
      },
    ],
  },
]);

export default router;

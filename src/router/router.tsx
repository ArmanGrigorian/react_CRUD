import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import {
  NotFoundPage,
  PostPage,
  PostsPage,
  UserPage,
  UsersPage,
} from "../components/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostsPage />,
      },
      {
        path: ":id",
        element: <PostPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "users/:id",
        element: <UserPage />,
      },
    ],
    errorElement: <NotFoundPage title="Not Found" />,
  },
]);

type RouterType = ReturnType<typeof createBrowserRouter>;
const typedRouter: RouterType = router;
export default typedRouter;

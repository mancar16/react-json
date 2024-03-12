import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pags/Index";
import UserPage from "./pags/UserPage";
import UserPost from "./pags/UserPost";
import UserAlbum from "./pags/UserAlbum";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Index />
      </div>
    ),
    loader: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      return data
    }
  },
  {
    path: "/users/:userId",
    element: <UserPage />,
  },
  {
    path: "/users/:userId/posts/:postId",
    element: <UserPost />,
    loader: async ({params}) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/" + params.userId + "/posts/" + params.postId);
      const data = await res.json();
      return data
    }
  },
  {
    path: "/users/:userId/posts/:postId",
    element: <UserAlbum />,
    loader: async ({params}) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/" + params.userId + "/albums/" + params.albumId);
      const data = await res.json();
      return {
        photos: data,
      }
    }
  }
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;

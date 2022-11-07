import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPostPage, { action as newPostAcrion } from "./pages/NewPost";
import PostDetailPage, { loader as blogPostLoader } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <BlogPostsPage />,
            loader: blogPostsLoader,
            errorElement: <p>lololo</p>,
          },
          {
            path: ":id",
            element: <PostDetailPage />,
            loader: blogPostLoader,
          },
        ],
      },
      {
        path: "/blog/new",
        element: <NewPostPage />,
        action: newPostAcrion,
      },
    ],
  },
  {
    path: "/newsletter",
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

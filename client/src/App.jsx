import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Calls from "./Calls/Calls";
import Chats from "./Chats/Chats";
import Friends from "./Friends/Friends";
import Main from "./Layouts/Main";
import Settings from "./Settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/friends", element: <Friends /> },
      { path: "/chats", element: <Chats /> },
      { path: "/calls", element: <Calls /> },
      { path: "/settings", element: <Settings /> },
    ],
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

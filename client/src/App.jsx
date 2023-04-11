import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calls from "./Pages/Calls/Calls";
import Chats from "./Pages/Chats/Chats";
import Friends from "./Pages/Friends/Friends";
import Main from "./Layouts/Main";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = createBrowserRouter([
    loggedIn?
      {
        path: "/",
        element: <Main />,
        children: [
          { path: "/", element: <Friends /> },
          { path: "/chats", element: <Chats /> },
          { path: "/calls", element: <Calls /> },
          { path: "/settings", element: <Settings /> },
        ],
      }
      :
      { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },

  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

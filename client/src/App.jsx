import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Calls from "./Pages/Calls/Calls";

import Chats from "./Pages/Chats/Chats";

import Friends from "./Pages/Friends/Friends";

import Main from "./Layouts/Main";

import Settings from "./Pages/Settings/Settings";

import Login from "./Pages/Login/Login";

import Register from "./Pages/Register/Register";


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
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

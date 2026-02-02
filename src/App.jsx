import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

const DefaultRoute = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if (authData) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return <Navigate to="/register" replace></Navigate>;
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;

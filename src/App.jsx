import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AuthGuard from "./auth/AuthGuard";

const DefaultRoute = () => {
  const lData = JSON.parse(localStorage.getItem("lData"));
  if (lData) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }
  return <Navigate to="/login" replace></Navigate>;
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthGuard required={false}>
          <Register/>
        </AuthGuard>
      ),
    },

    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;

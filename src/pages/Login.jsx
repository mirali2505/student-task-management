import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>

      {/* Login form */}
      <form>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your email"
          />
        </div>
        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your password"
          />
        </div>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;

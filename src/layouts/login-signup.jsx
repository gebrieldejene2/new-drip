import { NavLink, Outlet } from "react-router-dom";

export default function LoginSignupLayout() {
  return (
    <div className="container flex flex-col mt-16 mx-auto border md:max-w-xl">
      <nav className="login-navbar flex justify-evenly border-b">
        <NavLink to="/login" className="w-full">
          Login
        </NavLink>
        <NavLink to="/signup" className="w-full">
          <span>Sign up</span>
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

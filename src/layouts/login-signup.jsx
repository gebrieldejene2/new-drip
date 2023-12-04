import { NavLink, Outlet } from "react-router-dom";

export default function LoginSignupLayout() {
  return (
    <div className="container flex flex-col mt-10 mx-auto border md:max-w-lg">
      <nav className="login-navbar flex justify-evenly border-b">
        <NavLink
          to="/login"
          className="w-full text-center text-2xl font-bold border-r border-gray-300 py-2 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-700 dark:focus:ring-opacity-50 dark:active:bg-gray-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:focus:text-white dark:active:text-white"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="w-full text-center text-2xl font-bold border-l border-gray-300 py-2 hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-gray-700 dark:focus:ring-opacity-50 dark:active:bg-gray-700 dark:border-gray-700 dark:text-white dark:hover:text-white dark:focus:text-white dark:active:text-white"
        >
          <span>Sign up</span>
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

import { NavLink, Outlet } from "react-router-dom";

export default function LoginSignupLayout() {
  return (
    <div className="flex flex-col items-center w-full md:max-w-lg mx-auto md:mt-12">
      <h1 className="hidden md:block text-4xl text-gray-900 font-bold mb-4">
        Dripylux
      </h1>
      <div className="container bg-white font-extrabold uppercase text-xs tracking-widest md:p-2">
        <nav className="login-navbar flex items-center w-full text-black">
          <NavLink
            to="/signup"
            className="py-5 w-full text-center border-b-2 border-gray-200"
          >
            join
          </NavLink>
          <div className="border-r border-gray-300 h-12 mx-1"></div>
          <NavLink
            to="/login"
            className="py-5 w-full text-center border-b-2 border-gray-200"
          >
            sign in
          </NavLink>
        </nav>
        <div className="w-full px-5 md:px-12">
          <Outlet />
        </div>
      </div>
      {/* <div className="container flex flex-col mt-10 mx-auto bg-white rounded-lg md:max-w-md">
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
      </div> */}
    </div>
  );
}

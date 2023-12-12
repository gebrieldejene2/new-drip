import { NavLink, Outlet } from "react-router-dom";

export default function LoginSignupLayout() {
  return (
    <div className="flex flex-col items-center w-full md:max-w-lg mx-auto">
      <h1 className="hidden md:block text-4xl font-bold my-8">Dripylux</h1>
      <div className="container bg-white font-bold uppercase text-xs tracking-widest md:p-4">
        <div className="flex flex-col items-center">
          <h1 className="md:hidden text-2xl font-bold my-6">Dripylux</h1>
          <nav className="login-navbar flex items-center w-full text-black mb-4">
            <NavLink
              to="/login"
              className="py-5 w-full text-center border-b-2 border-gray-200"
            >
              sign in
            </NavLink>
            <div className="border-r border-gray-300 h-12 mx-1"></div>
            <NavLink
              to="/signup"
              className="py-5 w-full text-center border-b-2 border-gray-200"
            >
              join
            </NavLink>
          </nav>
        </div>
        <div>
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

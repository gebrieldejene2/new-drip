import { NavLink, Outlet } from 'react-router-dom'

export default function LoginSignupLayout() {
  return (
    <div className="mx-auto flex w-full flex-col items-center md:max-w-lg">
      <h1 className="my-8 hidden text-4xl font-bold md:block">Dripylux</h1>
      <div className="container bg-white text-xs font-bold uppercase tracking-widest md:p-4">
        <div className="flex flex-col items-center">
          <h1 className="my-6 text-2xl font-bold md:hidden">Dripylux</h1>
          <nav className="login-navbar mb-4 flex w-full items-center text-black">
            <NavLink to="/login" className="w-full border-b-2 border-gray-200 py-5 text-center">
              sign in
            </NavLink>
            <div className="mx-1 h-12 border-r border-gray-300"></div>
            <NavLink to="/signup" className="w-full border-b-2 border-gray-200 py-5 text-center">
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
  )
}

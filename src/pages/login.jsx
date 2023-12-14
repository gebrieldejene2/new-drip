export default function Login() {
  return (
    <div className="flex w-full flex-col items-center p-4">
      <form
        action="#"
        method="POST"
        className="flex-flex-col mb-4 w-full items-start px-8 text-stone-400 md:px-12">
        <div className="mb-6 block w-full">
          <label htmlFor="email" className="mb-2 block">
            email address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full border-2 border-stone-400 p-4 text-sm font-medium text-black focus:outline-none"
          />
        </div>
        <div className="mb-4 block w-full">
          <div className="mb-2 flex w-full items-center justify-between">
            <label htmlFor="email" className="block ">
              password:
            </label>
            <a
              href="#"
              className="text-sm font-medium normal-case tracking-normal text-blue-700 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border-2 border-stone-400 p-4 text-sm font-medium text-black focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-darkGray p-4 font-semibold uppercase tracking-widest text-white">
          sign in
        </button>
        <p className="my-8 w-full text-center text-xs text-gray-700">or sign in with ...</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com"
          className="flex w-full items-center justify-center border-2 border-gray-300 p-4 uppercase text-black hover:border-blue-700">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt=""
            className="mr-4"
          />
          google
        </a>
      </form>

      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase font-semibold leading-6 text-gray-700"
              >
                email address:
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full shadow-sm border-2 focus:ring-0 focus-outline-none border-gray-500 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  )
}

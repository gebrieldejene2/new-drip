export default function SignUp() {
  return (
    <div className="flex flex-col items-center w-full p-2">
      {/* <p className="text-center mb-4">sign up with ...</p>
      <div className="flex flex-col w-full items-center mb-8">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com"
          className="flex items-center justify-center w-full border-2 border-gray-300 p-4 uppercase hover:border-blue-700"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt=""
            className="mr-4"
          />
          google
        </a>
        <p className="text-center normal-case font-medium tracking-normal">
          Signing up with social is super quick. No extra passwords to remember
          - no brain fail. Don't worry, we'd never share any of your data or
          post anything on your behalf #NotEvil
        </p>
      </div>
      <p className="text-center mb-8">or sign up with email</p> */}
      <form
        action="#"
        method="POST"
        className="flex-flex-col w-full items-start text-stone-400 mb-4 px-8 md:px-12"
      >
        <div className="text-gray-700">
          <p className="text-center mb-4">sign up with ...</p>
          <div className="flex flex-col w-full items-center mb-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com"
              className="flex items-center justify-center w-full border-2 text-black border-gray-300 p-4 uppercase hover:border-blue-700"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt=""
                className="mr-4"
              />
              google
            </a>
            <p className="text-center normal-case font-medium tracking-normal mt-2">
              Signing up with social is super quick. No extra passwords to
              remember - no brain fail. Don't worry, we'd never share any of
              your data or post anything on your behalf #NotEvil
            </p>
          </div>
          <p className="text-center mb-6">or sign up with email</p>
        </div>
        <div className="block w-full mb-6">
          <label htmlFor="email" className="block mb-2">
            email address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
          />
          <label
            htmlFor="birth"
            className="block normal-case font-medium tracking-wide mt-1"
          >
            We'll send your order confirmation here
          </label>
        </div>
        <div className="block w-full mb-6">
          <label htmlFor="email" className="block mb-2">
            first name:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
          />
        </div>
        <div className="block w-full mb-6">
          <label htmlFor="email" className="block mb-2">
            last name:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
          />
        </div>
        <div className="block w-full mb-4">
          <label htmlFor="email" className="block mb-2">
            password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
          />
          <label
            htmlFor="birth"
            className="block normal-case font-medium tracking-wide mt-1"
          >
            Must be 10 or more characters
          </label>
        </div>
        <div className="block w-full mb-4">
          <label htmlFor="birth" className="block mb-2">
            date of birth:
          </label>
          <div className="flex w-full gap-2 ">
            <select
              name="birth-date"
              id="birth-date"
              className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
            >
              <option>DD</option>
            </select>
            <select
              name="birth-month"
              id="birth-month"
              className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
            >
              <option>MM</option>
            </select>
            <select
              name="birth-year"
              id="birth-year"
              className="w-full text-sm font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
            >
              <option>YYYY</option>
            </select>
          </div>
          <label
            htmlFor="birth"
            className="block normal-case font-medium tracking-wide mt-1"
          >
            You need to be 16 or more to use Dripylux
          </label>
        </div>
        <button
          type="submit"
          className="w-full uppercase bg-darkGray text-white p-4 tracking-widest font-semibold"
        >
          join dripylux
        </button>
        {/* <div className="block w-full mb-4">
          <label htmlFor="birth" className="block mb-2">
            mostly interested in:
          </label>
          <div className="flex items-center text-black normal-case font-medium tracking-wide"></div>
          <input
            id="womenswear"
            name="interested-in"
            type="radio"
            required
            value="womenswear"
            className="mr-2"
          />
          <label htmlFor="html">HTML</label>
          <input type="radio" id="html" name="interested-in" value="menswear" />
          <label htmlFor="html">HTML</label>
        </div> */}
      </form>
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
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
  );
}

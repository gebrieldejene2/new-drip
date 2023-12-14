import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="container mx-auto flex min-h-screen flex-col items-center bg-gray-200 md:mt-8">
      <div className="flex w-full flex-1 flex-col items-center justify-center py-28">
        <h1 className="bg-white px-6 py-2 text-center text-4xl font-bold sm:text-5xl">DRIPYLUX</h1>
        <p className="font-heading bg-white px-4 py-1 text-lg">Get drippy</p>
        <div className="mt-12 flex w-full flex-col flex-wrap items-center justify-evenly font-black md:flex-row">
          <Link
            to={'/women'}
            className="m-2 rounded border bg-white px-8 py-3 hover:scale-105 dark:border-gray-700 dark:text-gray-50">
            SHOP WOMEN
          </Link>
          <Link
            to={'/men'}
            className="m-2 rounded border bg-white px-8 py-3 hover:scale-105 dark:border-gray-700 dark:text-gray-50">
            SHOP MEN
          </Link>
        </div>
      </div>
      <div className="hidden w-full items-center bg-darkGray p-2 text-sm text-white md:flex">
        <div className="mx-auto flex flex-col items-start">
          <strong>XYZ PREMiER</strong>
          <p>Unlimited free Next Day Delivery for</p>
          <p>a whole year for $9.95. Ts&Cs apply.</p>
        </div>
        <div className="mx-auto flex flex-col items-start uppercase">
          <strong>students get 10% off</strong>
          <p>get your code</p>
        </div>
      </div>
      {/* <div className="w-full bg-gray-500">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-4 rounded-l-lg sm:w-2/3 focus:outline-none"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 dark:text-gray-900"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div> */}
    </section>
    // <div>
    //   <div className="flex relative overflow-clip justify-center items-center mt-8 mx-5">
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    //       alt="#"
    //       className="w-full"
    //     />
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    //       alt="#"
    //       className="w-full"
    //     />
    //     <div className="flex flex-col justify-between absolute h-1/2 w-1/2">
    //       <div className="flex flex-col">
    //         <h1 className="text-4xl bg-white px-4 py-2 mx-auto">DRIPYLUX</h1>
    //         <small className="text-lg bg-white px-2 py-1 mx-auto">
    //           Get drippy
    //         </small>
    //       </div>
    //       <div className="flex justify-between">
    //         <button className="bg-white px-3 py-2">SHOP WOMEN</button>
    //         <button className="bg-white px-3 py-2">SHOP MEN</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container md:mt-8 bg-gray-200 min-h-screen mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full flex-1 py-28">
        <h1 className="bg-white px-6 text-center py-2 text-4xl font-bold sm:text-5xl">
          DRIPYLUX
        </h1>
        <p className="px-4 py-1 bg-white font-heading text-lg">Get drippy</p>
        <div className="font-bold w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-12">
          <Link
            to={"/women"}
            className="bg-white hover:scale-105 px-5 py-3 m-2 border rounded dark:text-gray-50 dark:border-gray-700"
          >
            SHOP WOMEN
          </Link>
          <Link
            to={"/men"}
            className="bg-white hover:scale-105 px-8 py-3 m-2 border rounded dark:text-gray-50 dark:border-gray-700"
          >
            SHOP MEN
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center text-sm w-full bg-darkGray text-white p-2">
        <div className="flex flex-col items-start mx-auto">
          <strong>XYZ PREMiER</strong>
          <p>Unlimited free Next Day Delivery for</p>
          <p>a whole year for $9.95. Ts&Cs apply.</p>
        </div>
        <div className="uppercase flex flex-col items-start mx-auto">
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
  );
}

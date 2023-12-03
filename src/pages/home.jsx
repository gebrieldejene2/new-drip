export default function Home() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">DRIPYLUX</h1>
        <p className="px-8 mt-8 mb-12 text-lg">Get drippy</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            SHOP WOMEN
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            SHOP MEN
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-500">
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
      </div>
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

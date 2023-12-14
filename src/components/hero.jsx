const Hero = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:px-10 md:py-32 lg:px-32 xl:max-w-3xl">
        <h1 className="leadi text-4xl font-bold sm:text-5xl">DRIPYLUX</h1>
        <p className="mb-12 mt-8 px-8 text-lg">Get drippy</p>
        <div className="flex flex-wrap justify-center">
          <button className="m-2 rounded border px-8 py-3 text-lg dark:border-gray-700 dark:text-gray-50">
            SHOP WOMEN
          </button>
          <button className="m-2 rounded border px-8 py-3 text-lg dark:border-gray-700 dark:text-gray-50">
            SHOP MEN
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-500">
        <div className="container mx-auto flex flex-col flex-wrap content-center justify-center p-4 py-20 md:p-10">
          <h1 className="leadi text-center text-5xl font-semibold antialiased dark:text-gray-100">
            Get Our Updates
          </h1>
          <p className="pb-8 pt-2 text-center text-xl antialiased dark:text-gray-100">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 rounded-l-lg p-4 focus:outline-none sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 rounded-r-lg bg-violet-400 p-3 font-semibold dark:text-gray-900 sm:w-1/3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

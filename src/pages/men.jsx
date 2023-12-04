const featuredItems = [
  {
    id: 1,
    name: "shoes",
    image: "https://source.unsplash.com/random/300x300/?1",
  },
  {
    id: 2,
    name: "dress",
    image: "https://source.unsplash.com/random/300x300/?2",
  },
  {
    id: 3,
    name: "tops",
    image: "https://source.unsplash.com/random/300x300/?3",
  },
  {
    id: 4,
    name: "skirts",
    image: "https://source.unsplash.com/random/300x300/?4",
  },
  {
    id: 5,
    name: "pics under 20$",
    image: "https://source.unsplash.com/random/300x300/?5",
  },
  {
    id: 6,
    name: "sporty stuff",
    image: "https://source.unsplash.com/random/300x300/?6",
  },
];

export default function Men() {
  return (
    <div>
      <section className="flex flex-col items-center w-full min-h-screen mx-auto bg-amber-200">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-3xl mt-10">
            <h2 className="bg-white px-8 rounded-full mb-2">SALE</h2>
            <h2 className="mb-2">UP TO 70% OFF</h2>
            <h3 className="text-2xl">Get there firsttt!!</h3>
            <small className="text-sm mt-5 font-normal">
              Limited time only. Selected styles marked down as shown
            </small>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="flex flex-col  md:flex-row md:max-w-6xl md:justify-between gap-20 md:gap-5 mb-5">
              {featuredItems.map((featuredItem) => (
                <div
                  key={featuredItem.id}
                  className="flex flex-col items-center w-96 h-64"
                >
                  <img
                    src={featuredItem.image}
                    alt=""
                    className="flex-1 object-cover object-center w-full h-full dark:bg-gray-500"
                  />
                  <button className="bg-white w-full py-2 uppercase text-xs">
                    {featuredItem.name}
                  </button>
                </div>
              ))}
            </div>
            <button className="bg-white px-16 py-3 uppercase text-sm">
              view all
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

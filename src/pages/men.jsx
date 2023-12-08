import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center w-full p-5 bg-amber-200 text-black">
      <div className="flex flex-col items-center text-3xl my-5 font-semibold">
        <h2 className="bg-white px-8 py-2 rounded-full mb-2 uppercase text-center tracking-wide">
          sale
        </h2>
        <h2 className="mb-2 uppercase">up to 70% off</h2>
        <h3 className="text-2xl">Get there firsttt!!</h3>
        <small className="text-sm mt-5 mb-2 font-normal text-center">
          Limited time only. Selected styles marked down as shown
        </small>
      </div>
      <div className="flex flex-col items-center w-full font-semibold">
        <div className="flex flex-col  md:flex-row md:max-w-6xl md:justify-between gap-10 md:gap-4 mb-12 md:mb-10 w-full">
          {featuredItems.map((featuredItem) => (
            // <div
            //   key={featuredItem.id}
            //   className="flex flex-col items-center w-96 h-64"
            // >
            //   <img
            //     src={featuredItem.image}
            //     alt=""
            //     className="flex-1 object-cover object-center w-full h-full dark:bg-gray-500"
            //   />
            //   <Link to={`/men/${featuredItem.name}`}>
            //     <button className="bg-white w-full py-2 uppercase text-xs">
            //       {featuredItem.name}
            //     </button>
            //   </Link>
            // </div>
            <a
              key={featuredItem.id}
              href="../categories"
              className="flex flex-col items-center md:w-96 w-full h-64 group hover:scale-110"
            >
              <img
                src={featuredItem.image}
                alt=""
                className="flex-1 object-cover object-center w-full h-full dark:bg-gray-500"
              />
              <button className="bg-white w-full py-2 uppercase text-xs font-bold group-hover:bg-black group-hover:text-white">
                {featuredItem.name}
              </button>
            </a>
          ))}
        </div>
        <a
          href="../categories"
          className="bg-white px-16 py-3 uppercase font-semibold tracking-widest hover:bg-gray-100"
        >
          view all
        </a>
      </div>
    </div>
  );
}

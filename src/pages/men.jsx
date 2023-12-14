import { Link } from 'react-router-dom'

const featuredItems = [
  {
    id: 1,
    name: 'shoes',
    image: 'https://source.unsplash.com/random/300x300/?1',
  },
  {
    id: 2,
    name: 'dress',
    image: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    id: 3,
    name: 'tops',
    image: 'https://source.unsplash.com/random/300x300/?3',
  },
  {
    id: 4,
    name: 'skirts',
    image: 'https://source.unsplash.com/random/300x300/?4',
  },
  {
    id: 5,
    name: 'pics under 20$',
    image: 'https://source.unsplash.com/random/300x300/?5',
  },
]

export default function Men() {
  return (
    <div className="flex w-full flex-col items-center bg-amber-200 p-5 text-black">
      <div className="my-5 flex flex-col items-center text-3xl font-semibold">
        <h2 className="mb-2 rounded-full bg-white px-8 py-2 text-center uppercase tracking-wide">
          sale
        </h2>
        <h2 className="mb-2 uppercase">up to 70% off</h2>
        <h3 className="text-2xl">Get there firsttt!!</h3>
        <small className="mb-2 mt-4 text-center text-sm font-normal">
          Limited time only. Selected styles marked down as shown
        </small>
      </div>
      <div className="flex w-full flex-col items-center font-semibold">
        <div className="mb-12 flex w-full flex-col gap-10 px-10 md:mb-6 md:max-w-7xl md:flex-row md:justify-between md:gap-8">
          {featuredItems.map((featuredItem) => (
            <Link
              key={featuredItem.id}
              to="/categories"
              className="group flex h-72 w-full flex-col items-center shadow-lg md:w-96 md:hover:scale-110"
            >
              <img
                src={featuredItem.image}
                alt=""
                className="h-full w-full flex-1 object-cover object-center dark:bg-gray-500"
              />
              <button className="w-full bg-white py-2 text-xs font-bold uppercase group-hover:bg-black group-hover:text-white">
                {featuredItem.name}
              </button>
            </Link>
          ))}
        </div>
        <Link
          to="../categories"
          className="bg-white px-16 py-3 font-semibold uppercase tracking-widest hover:bg-gray-100"
        >
          view all
        </Link>
      </div>
    </div>
  )
}

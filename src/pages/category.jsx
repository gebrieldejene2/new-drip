import ProductsList from './product-list'

const category = {
  name: 'Shoes',
  slug: 'shoes',
  description:
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  topProducts: [
    {
      id: 1,
      name: 'trainers',
    },
    {
      id: 2,
      name: 'flat sandals',
    },
    {
      id: 3,
      name: 'helled sandals',
    },
    {
      id: 4,
      name: 'ankle boots',
    },
    {
      id: 5,
      name: 'flat shoes',
    },
    {
      id: 6,
      name: 'heeled sandals',
    },
    {
      id: 7,
      name: 'flip flops',
    },
    {
      id: 8,
      name: 'ballet pumps',
    },
    {
      id: 9,
      name: 'wedding shoes',
    },
  ],
  filterOptions: [
    {
      id: 1,
      name: 'sort',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 2,
      name: 'discount',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 3,
      name: 'product type',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 4,
      name: 'Style',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 5,
      name: 'Leather/Fabric',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 6,
      name: 'Brand',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 7,
      name: 'Color',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 8,
      name: 'Body Fit',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 9,
      name: 'Size',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
    {
      id: 10,
      name: 'Price Range',
      options: [
        {
          id: 1,
          name: 'name A-Z',
        },
        {
          id: 2,
          name: 'price low to high',
        },
        {
          id: 3,
          name: 'price high to low',
        },
      ],
    },
  ],
}

export default function Category() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="hidden w-full border-b py-2 md:flex">breadcrumbs</div>
      <div className="flex w-full flex-col items-center border-b py-4">
        <h2 className="mb-2 w-full text-center text-2xl font-bold">
          Women's sale: {category.name}
        </h2>
        <p className="w-full px-4 text-center text-sm">{category.description}</p>
      </div>
      <div className="flex w-full flex-wrap items-center gap-2 border-b p-2 text-sm md:justify-center">
        {category.topProducts.map((product) => (
          <button
            key={product.id}
            className="rounded-full bg-gray-200 px-2 py-1 text-xs font-bold uppercase hover:scale-105 md:px-4"
          >
            {product.name}
          </button>
        ))}
      </div>
      <form className="mb-8 hidden w-full grid-cols-2 items-center gap-4 bg-gray-200 py-2 md:grid md:grid-cols-6 md:px-20">
        {category.filterOptions.map((filterOption) => (
          <select
            key={filterOption.id}
            id={filterOption.id}
            className="border-y border-gray-300 bg-transparent py-2 text-sm text-gray-700"
          >
            {filterOption.options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        ))}
      </form>
      <div className="container w-full">
        <ProductsList />
      </div>
    </div>
  )
}

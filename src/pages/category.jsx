const category = {
  name: "Shoes",
  slug: "shoes",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  topProducts: [
    {
      id: 1,
      name: "trainers",
    },
    {
      id: 2,
      name: "flat sandals",
    },
    {
      id: 3,
      name: "helled sandals",
    },
    {
      id: 4,
      name: "ankle boots",
    },
    {
      id: 5,
      name: "flat shoes",
    },
    {
      id: 6,
      name: "heeled sandals",
    },
    {
      id: 7,
      name: "flip flops",
    },
    {
      id: 8,
      name: "ballet pumps",
    },
    {
      id: 9,
      name: "wedding shoes",
    },
  ],
  filterOptions: [
    {
      id: 1,
      name: "sort",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 2,
      name: "discount",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 3,
      name: "product type",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 4,
      name: "Style",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 5,
      name: "Leather/Fabric",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 6,
      name: "Brand",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 7,
      name: "Color",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 8,
      name: "Body Fit",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 9,
      name: "Size",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
    {
      id: 10,
      name: "Price Range",
      options: [
        {
          id: 1,
          name: "name A-Z",
        },
        {
          id: 2,
          name: "price low to high",
        },
        {
          id: 3,
          name: "price high to low",
        },
      ],
    },
  ],
};

export default function Category() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full border-b py-2">breadcrumbs</div>
      <div className="flex flex-col items-center w-full py-4 border-b">
        <h2 className="text-2xl font-bold text-center w-full mb-2">
          Women's sale: {category.name}
        </h2>
        <p className="text-center w-full text-sm">{category.description}</p>
      </div>
      <div className="flex items-center justify-center gap-2 w-full p-2 border-b text-sm">
        {category.topProducts.map((product) => (
          <button
            key={product.id}
            className="bg-gray-200 px-4 py-1 rounded-full uppercase font-bold text-xs hover:scale-105"
          >
            {product.name}
          </button>
        ))}
      </div>
      <form className="grid grid-cols-6 gap-4 items-center w-full bg-gray-200 py-2 px-20">
        {category.filterOptions.map((filterOption) => (
          <select
            key={filterOption.id}
            id={filterOption.id}
            className="py-2 text-sm bg-transparent border-y border-gray-300 text-gray-700"
          >
            {filterOption.options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        ))}
      </form>
      <div className="w-full container"></div>
    </div>
  );
}

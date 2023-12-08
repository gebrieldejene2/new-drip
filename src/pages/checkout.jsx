const items = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    color: "Blue",
    price: "$32.00",
    quantity: 3,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    color: "Blue",
    price: "$32.00",
    quantity: 5,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "Medium Stuff Satchel",
    color: "Blue",
    price: "$32.00",
    quantity: 2,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Checkout() {
  return (
    <div className="container flex flex-col items-center max-w-5xl px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl text-gray-900 font-bold my-8 uppercase">
        checkout
      </h1>
      <div className="flex flex-col-reverse md:grid grid-cols-5 gap-5 w-full">
        <form className="col-span-3 flex flex-col w-full text-xs uppercase">
          <div className="w-full bg-white text-black p-5 mb-5">
            <label
              htmlFor="delivery-country"
              className="block font-extrabold mb-4"
            >
              delivery country:
            </label>
            <div className="flex items-center w-1/2">
              <img
                src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
                width="30"
                className="mr-4"
              ></img>
              <select
                name="birth-date"
                id="birth-date"
                className="flex-1 uppercase font-medium text-black border-2 border-stone-400 p-4 focus:outline-none"
              >
                <option>nigeria</option>
              </select>
            </div>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label htmlFor="promocode" className="block font-extrabold mb-4">
              promo/student code or vouchers:
            </label>
            <div className="flex items-center"></div>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label htmlFor="email" className="block font-extrabold mb-2">
              email address
            </label>
            <p className="text-sm text-stone-500 normal-case">
              testemail@gmail.com
            </p>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label
              htmlFor="delivery-address"
              className="block font-extrabold mb-4"
            >
              delivery address
            </label>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label
              htmlFor="delivery-options"
              className="block font-extrabold mb-4"
            >
              delivery options
            </label>
          </div>
          <div className="w-full bg-white text-black p-5 mb-5">
            <label htmlFor="payment" className="block font-extrabold mb-4">
              payment
            </label>
          </div>
        </form>
        <div className="col-span-2 bg-white w-full md:h-1/2 p-5"></div>
      </div>
    </div>
  );
}

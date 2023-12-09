import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

//components
import Cart from "../components/cart-sidenav";
import Favorites from "./favorites-sidenav";

const Navbar = () => {
  const [openCat, setOpenCat] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const [openFav, setOpenFav] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };
  const toggleFav = () => {
    setOpenFav(!openFav);
  };

  return (
    <div>
      <div className="relative flex flex-col max-w-full items-center justify-center">
        <header className="w-full bg-darkGray text-white">
          <div className="flex items-center justify-center md:max-w-7xl md:h-16 md:px-10 mx-auto">
            <a href="/">
              <span className="text-4xl mr-4">Dripylux</span>
            </a>
            <NavLink
              to={"/women"}
              onClick={() => {
                setOpenCat("women");
              }}
              className="h-full flex items-center justify-center px-8 hover:bg-white hover:text-gray-700"
            >
              WOMEN
            </NavLink>
            <NavLink
              to={"/men"}
              onClick={() => {
                setOpenCat("men");
              }}
              className="h-full flex items-center justify-center px-10 hover:bg-white hover:text-gray-700"
            >
              MEN
            </NavLink>
            <input
              type="text"
              className="flex-1 rounded-lg px-4 py-1 ml-4 mr-6"
              placeholder="Search for items and brands"
            />
            <div className="flex gap-8">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="bg-lightGray flex justify-center items-center relative">
            {openCat === "men" ? (
              <div className="py-2">
                <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
                  <NavigationMenu.List className="flex gap-5">
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>New In</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Clothing</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Accessories</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Brands</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Shoes</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Sportwear</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        <span>Homewear</span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <div className="bg-slate-200 w-[1280px] h-[480px]"></div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                  <div className="absolute top-full left-0 flex w-full justify-center">
                    <NavigationMenu.Viewport className="mt-2 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative h-[var(--radix-navigation-menu-viewport-height)] border-black origin-[top_center] overflow-hidden bg-white transition-[width,_height] duration-100 w-[var(--radix-navigation-menu-viewport-width)]" />
                  </div>
                </NavigationMenu.Root>
              </div>
            ) : openCat === "women" ? (
              <div>
                <button className="dropdown p-2">more women</button>
              </div>
            ) : null}
          </div>
          <div className="hidden md:block bg-black text-white w-full">
            <div className="flex justify-between items-center max-w-7xl px-10 mx-auto">
              <button
                onClick={toggleFav}
                className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black"
              >
                WOMEN
              </button>
              <p className="justify-center text-center p-1">
                NEW HERE? Get 15% off almost on everything!*
                <br />
                with code: HIFRIEND
              </p>
              <button
                onClick={toggleCart}
                className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black"
              >
                MEN
              </button>
            </div>
          </div>
        </header>
      </div>
      <Cart openCart={openCart} toggleCart={toggleCart} />
      <Favorites openFav={openFav} toggleFav={toggleFav} />
    </div>
  );
};

export default Navbar;

// {
//   import { Fragment, useState } from "react";
// import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// const navigation = {
//   categories: [
//     {
//       id: "women",
//       name: "Women",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "Basic Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Dresses", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Denim", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Significant Other", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "men",
//       name: "Men",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//           ],
//         },
//       ],
//     },
//   ],
//   pages: [
//     { name: "Company", href: "#" },
//     { name: "Stores", href: "#" },
//   ],
// };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//                 <div className="flex px-4 pb-2 pt-5">
//                   <button
//                     type="button"
//                     className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>

//                 {/* Links */}
//                 <Tab.Group as="div" className="mt-2">
//                   <div className="border-b border-gray-200">
//                     <Tab.List className="-mb-px flex space-x-8 px-4">
//                       {navigation.categories.map((category) => (
//                         <Tab
//                           key={category.name}
//                           className={({ selected }) =>
//                             classNames(
//                               selected
//                                 ? "border-indigo-600 text-indigo-600"
//                                 : "border-transparent text-gray-900",
//                               "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
//                             )
//                           }
//                         >
//                           {category.name}
//                         </Tab>
//                       ))}
//                     </Tab.List>
//                   </div>
//                   <Tab.Panels as={Fragment}>
//                     {navigation.categories.map((category) => (
//                       <Tab.Panel
//                         key={category.name}
//                         className="space-y-10 px-4 pb-8 pt-10"
//                       >
//                         <div className="grid grid-cols-2 gap-x-4">
//                           {category.featured.map((item) => (
//                             <div
//                               key={item.name}
//                               className="group relative text-sm"
//                             >
//                               <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                 <img
//                                   src={item.imageSrc}
//                                   alt={item.imageAlt}
//                                   className="object-cover object-center"
//                                 />
//                               </div>
//                               <a
//                                 href={item.href}
//                                 className="mt-6 block font-medium text-gray-900"
//                               >
//                                 <span
//                                   className="absolute inset-0 z-10"
//                                   aria-hidden="true"
//                                 />
//                                 {item.name}
//                               </a>
//                               <p aria-hidden="true" className="mt-1">
//                                 Shop now
//                               </p>
//                             </div>
//                           ))}
//                         </div>
//                         {category.sections.map((section) => (
//                           <div key={section.name}>
//                             <p
//                               id={`${category.id}-${section.id}-heading-mobile`}
//                               className="font-medium text-gray-900"
//                             >
//                               {section.name}
//                             </p>
//                             <ul
//                               role="list"
//                               aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                               className="mt-6 flex flex-col space-y-6"
//                             >
//                               {section.items.map((item) => (
//                                 <li key={item.name} className="flow-root">
//                                   <a
//                                     href={item.href}
//                                     className="-m-2 block p-2 text-gray-500"
//                                   >
//                                     {item.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </Tab.Panel>
//                     ))}
//                   </Tab.Panels>
//                 </Tab.Group>

//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   {navigation.pages.map((page) => (
//                     <div key={page.name} className="flow-root">
//                       <a
//                         href={page.href}
//                         className="-m-2 block p-2 font-medium text-gray-900"
//                       >
//                         {page.name}
//                       </a>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   <div className="flow-root">
//                     <a
//                       href="#"
//                       className="-m-2 block p-2 font-medium text-gray-900"
//                     >
//                       Sign in
//                     </a>
//                   </div>
//                   <div className="flow-root">
//                     <a
//                       href="#"
//                       className="-m-2 block p-2 font-medium text-gray-900"
//                     >
//                       Create account
//                     </a>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <a href="#" className="-m-2 flex items-center p-2">
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-base font-medium text-gray-900">
//                       CAD
//                     </span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       <header className="relative bg-white">
//         <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
//           Get free delivery on orders over $100
//         </p>

//         <nav
//           aria-label="Top"
//           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
//         >
//           <div className="border-b border-gray-200">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
//                 onClick={() => setOpen(true)}
//               >
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>

//               <div className="ml-4 flex lg:ml-0">
//                 <a href="/">
//                   <span className="text-4xl">Dripylux</span>
//                 </a>
//               </div>

//               {/* Flyout menus */}
//               <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
//                 <div className="flex h-full space-x-8">
//                   {navigation.categories.map((category) => (
//                     <Popover key={category.name} className="flex">
//                       {({ open }) => (
//                         <>
//                           <div className="relative flex">
//                             <Popover.Button
//                               className={classNames(
//                                 open
//                                   ? "border-indigo-600 text-indigo-600"
//                                   : "border-transparent text-gray-700 hover:text-gray-800",
//                                 "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none"
//                               )}
//                             >
//                               {category.name}
//                             </Popover.Button>
//                           </div>

//                           <Transition
//                             as={Fragment}
//                             enter="transition ease-out duration-200"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="transition ease-in duration-150"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                           >
//                             <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
//                               {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
//                               <div
//                                 className="absolute inset-0 top-1/2 bg-white shadow"
//                                 aria-hidden="true"
//                               />

//                               <div className="relative bg-white">
//                                 <div className="mx-auto max-w-7xl px-8">
//                                   <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
//                                     <div className="col-start-2 grid grid-cols-2 gap-x-8">
//                                       {category.featured.map((item) => (
//                                         <div
//                                           key={item.name}
//                                           className="group relative text-base sm:text-sm"
//                                         >
//                                           <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
//                                             <img
//                                               src={item.imageSrc}
//                                               alt={item.imageAlt}
//                                               className="object-cover object-center"
//                                             />
//                                           </div>
//                                           <a
//                                             href={item.href}
//                                             className="mt-6 block font-medium text-gray-900"
//                                           >
//                                             <span
//                                               className="absolute inset-0 z-10"
//                                               aria-hidden="true"
//                                             />
//                                             {item.name}
//                                           </a>
//                                           <p
//                                             aria-hidden="true"
//                                             className="mt-1"
//                                           >
//                                             Shop now
//                                           </p>
//                                         </div>
//                                       ))}
//                                     </div>
//                                     <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
//                                       {category.sections.map((section) => (
//                                         <div key={section.name}>
//                                           <p
//                                             id={`${section.name}-heading`}
//                                             className="font-medium text-gray-900"
//                                           >
//                                             {section.name}
//                                           </p>
//                                           <ul
//                                             role="list"
//                                             aria-labelledby={`${section.name}-heading`}
//                                             className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
//                                           >
//                                             {section.items.map((item) => (
//                                               <li
//                                                 key={item.name}
//                                                 className="flex"
//                                               >
//                                                 <a
//                                                   href={item.href}
//                                                   className="hover:text-gray-800"
//                                                 >
//                                                   {item.name}
//                                                 </a>
//                                               </li>
//                                             ))}
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </Popover.Panel>
//                           </Transition>
//                         </>
//                       )}
//                     </Popover>
//                   ))}

//                   {navigation.pages.map((page) => (
//                     <a
//                       key={page.name}
//                       href={page.href}
//                       className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
//                     >
//                       {page.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Group>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <a
//                     href="#"
//                     className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                   >
//                     Sign in
//                   </a>
//                   <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
//                   <a
//                     href="#"
//                     className="text-sm font-medium text-gray-700 hover:text-gray-800"
//                   >
//                     Create account
//                   </a>
//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a
//                     href="#"
//                     className="flex items-center text-gray-700 hover:text-gray-800"
//                   >
//                     <img
//                       src="https://tailwindui.com/img/flags/flag-canada.svg"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-sm font-medium">CAD</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>

//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                     <span className="sr-only">Search</span>
//                     <MagnifyingGlassIcon
//                       className="h-6 w-6"
//                       aria-hidden="true"
//                     />
//                   </a>
//                 </div>

//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6">
//                   <a href="#" className="group -m-2 flex items-center p-2">
//                     <ShoppingBagIcon
//                       className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                     <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
//                       0
//                     </span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }
// }

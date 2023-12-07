import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

import { Popover } from "@headlessui/react";
import {
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

//components
import MobileMenu from "../components/mobile-menu";
import Cart from "../components/cart-sidenav";
import Favorites from "../components/favorites-sidenav";
import Footer from "../components/footer";

export default function Root() {
  const [openCat, setOpenCat] = useState("");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openFav, setOpenFav] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };
  const toggleFav = () => {
    setOpenFav(!openFav);
  };
  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <div className="flex flex-col w-full bg-gray-100 text-gray-700 font-sans overflow-x-hidden tracking-wide">
      <header>
        <div className="hidden md:flex items-center text-sm w-full px-12 text-gray-700">
          <Link className="ml-auto mr-20">Help & FAQs</Link>
          <button className="px-3 py-1 ml-2 border-x border-gray-300">
            <img
              src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
              width="20"
            ></img>
          </button>
        </div>
        <nav className="flex items-center w-full h-auto md:h-16 bg-darkGray text-white px-4 md:px-12 lg:px-20 py-3 md:py-0">
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="mr-4">
              <Bars3Icon className="h-6 w-6" />
            </button>
            <a href="/">
              <h1 className="font-bold">Dripylux</h1>
            </a>
          </div>
          <div className="hidden md:flex flex-1 items-center h-full">
            <a href="/">
              <h1 className="text-4xl mr-4 font-bold">Dripylux</h1>
            </a>
            <NavLink
              to={"/women"}
              onClick={() => {
                setOpenCat("women");
              }}
              className="h-full flex items-center justify-center px-8 hover:bg-white hover:text-gray-700 font-bold text-sm"
            >
              WOMEN
            </NavLink>
            <NavLink
              to={"/men"}
              onClick={() => {
                setOpenCat("men");
              }}
              className="h-full flex items-center justify-center px-10 hover:bg-white hover:text-gray-700 font-bold text-smfont-bold text-sm"
            >
              MEN
            </NavLink>
            <div className="flex-1 ml-2 mr-6">
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                className="w-full placeholder:text-sm rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8 ml-auto">
            <button className="md:hidden">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link to="/login">
              <UserIcon className="h-6 w-6" />
            </Link>
            <button onClick={toggleFav}>
              <HeartIcon className="h-6 w-6" />
            </button>
            <button onClick={toggleCart}>
              <ShoppingBagIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <div className="hidden md:block bg-lightGray text-gray-200">
          {openCat === "men" ? (
            <div className="relative flex w-full items-center justify-center gap-4">
              <div className="group">
                <button className="p-2 font-bold">Hello</button>
                <div className="absolute hidden group-hover:block z-10 bg-white max-w-5xl left-0 right-0 mx-auto">
                  hello
                </div>
              </div>
            </div>
          ) : openCat === "women" ? (
            <div className="relative flex w-full items-center justify-center gap-4">
              hello
            </div>
          ) : null}
        </div>
        <div className="hidden md:flex w-full bg-black text-white items-center justify-between md:px-12 lg:px-20">
          <button className="border-2 border-white px-4 py-1 hover:bg-white hover:text-black">
            WOMEN
          </button>
          <p className="justify-center text-center p-1">
            NEW HERE? Get 15% off almost on everything!*
            <br />
            with code: <strong>HIFRIEND</strong>
          </p>
          <button className="border-2 border-white px-4 py-1 hover:bg-white hover:text-black">
            MEN
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center w-full min-h-screen">
        <MobileMenu
          openMobileMenu={openMobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Cart openCart={openCart} toggleCart={toggleCart} />
        <Favorites openFav={openFav} toggleFav={toggleFav} />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

//components
import Cart from "../components/cart-sidenav";
import Favorites from "../components/favorites-sidenav";
import Footer from "../components/footer";

export default function Root() {
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
    <div className="flex flex-col">
      <div className="hidden md:flex items-center text-sm w-full px-12 text-gray-700">
        <Link className="ml-auto mr-20">Help & FAQs</Link>
        <button className="px-3 py-1 ml-2 border-x border-gray-300">
          <img
            src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
            width="20"
          ></img>
        </button>
      </div>
      <header className=" bg-darkGray text-white">
        <nav className="root-navbar flex items-center justify-center md:max-w-7xl md:h-16 md:px-10 lg:px-16 mx-auto">
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
          <div className="flex gap-8">
            <Link to="/login">
              <UserIcon className="h-6 w-6" />
            </Link>
            <button onClick={toggleFav}>
              <HeartIcon className="h-6 w-6" />
            </button>
            <button onClick={toggleCart}>
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
        <div className="bg-lightGray items-center">
          {openCat === "men" ? (
            <div>
              <button className="dropdown p-2">more men</button>
            </div>
          ) : openCat === "women" ? (
            <div>
              <button className="dropdown p-2">more women</button>
            </div>
          ) : null}
        </div>
        <div className="hidden md:block bg-black text-white w-full">
          <div className="flex justify-between items-center max-w-7xl md:px-10 lg:px-16 mx-auto">
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
        </div>
      </header>
      <main className="flex flex-col min-h-screen">
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

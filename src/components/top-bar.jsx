import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="hidden md:flex items-center text-sm w-full px-12 text-gray-500">
      <Link className="ml-auto mr-20">Help & FAQs</Link>
      <button className="px-4 py-1.5 ml-2 border-x border-gray-300">
        <img
          src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
          width="20"
        ></img>
      </button>
    </div>
  );
};

export default TopBar;

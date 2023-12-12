import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="hidden md:flex items-center bg-white text-gray-500 text-sm w-full px-12 ">
      <Link to="/support" className="ml-auto mr-20">
        Help & FAQs
      </Link>
      <button className="px-2 py-1 ml-2 border-x border-gray-300">
        <img
          src="https://hatscripts.github.io/circle-flags/flags/ng.svg"
          width="20"
        ></img>
      </button>
    </div>
  );
};

export default TopBar;

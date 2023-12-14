import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="hidden w-full items-center bg-white px-12 text-sm text-gray-500 md:flex ">
      <Link to="/support" className="ml-auto mr-20">
        Help & FAQs
      </Link>
      <button className="ml-2 border-x border-gray-300 px-2 py-1">
        <img src="https://hatscripts.github.io/circle-flags/flags/ng.svg" width="20"></img>
      </button>
    </div>
  )
}

export default TopBar

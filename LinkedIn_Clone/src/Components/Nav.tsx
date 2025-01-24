import { FaRegNewspaper } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
// import { FaLaptop } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import SmLogo from "../assets/sm_logo.png";

function Nav() {
  return (
    <nav className=" text-gray-500 mb-2 font-thin w-full items-center justify-center py-3">
      <div className="flex-row max-w-screen-xl mx-auto md:flex lg:flex content-center items-center w-[100%] px-2 justify-between">
        {/*Responsive Screen*/}
        <div
          id="left_section"
          className="mt-2 flex ml-2 items-center content-center"
        >
          <Link to="/" className="items content-center">
            <img src={Logo} alt="#logo" className="hidden md:block h-6 ml-0" />
          </Link>
          <Link to="/">
            <img src={SmLogo} alt="#" className="h-7 block md:hidden" />{" "}
          </Link>

          <div
            id="join_"
            className="block md:hidden content-end mx-auto items-center  justify-center text-sm space-x-2 mr-0"
          >
            <button
              id="sign_in "
              className="ml-2 text-black rounded-full px-4 py-3 font-normal hover:bg-gray-100 "
            >
              Join now
            </button>

            <button
              id="sign_in "
              className="border-2 border-blue-400 text-blue-400 rounded-full px-6 py-3 font-normal  hover:bg-blue-50 hover:text-blue-500"
            >
              Sign in
            </button>
          </div>
        </div>

        <div
          id="before_list"
          className=" mx-auto  md:justify-end md:justify-items-end md:flex blue-500   md:items-center md:content-center md:space-x-2 mt-3 "
        >
          <ul className="flex  w-full mx-auto justify-between md:text-xl-4 list-none ml-0 pl-0 md:space-x-8 text-right sm:text-black ">
            <li className=" text-sm justify-center hover:black items-center group-hover:text-black  justify-items-center content-center group">
              <Link
                to="/articles"
                className=" block  text-gray-600 font-normal  group-hover:text-black justify-center items-center justify-items-center"
              >
                <FaRegNewspaper
                  className="text-zinc-600  group-active:text-blue-600 group-a:underline group-hover:text-black"
                  size={25}
                />
                Articles
              </Link>
            </li>

            <li className="text-sm font-black justify-center items-center justify-items-center content-center group">
              <a
                href="#"
                className="group-hover:text-black  text-gray-600 font-normal block justify-center items-center justify-items-center"
              >
                <FaUsers
                  className="group-hover:text-black text-zinc-400"
                  size={25}
                />
                People
              </a>
            </li>
            <li className="text-sm font-black justify-center items-center justify-items-center content-center group">
              <a
                href="#"
                className=" text-gray-600 font-normal block group-hover:text-black justify-center items-center justify-items-center"
              >
                <FaPhotoVideo
                  className="text-zinc-400 group-hover:text-black"
                  size={25}
                />
                Learning
              </a>
            </li>
            <li className=" text-sm font-black  justify-center items-center justify-items-center content-center group">
              <a
                href="#"
                className=" block    text-gray-600 font-normal justify-center group-hover:text-black items-center justify-items-center group"
              >
                <FaBriefcase
                  className="text-zinc-400 group-hover:text-black"
                  size={25}
                />
                Jobs
              </a>
            </li>
            <li className="text-sm font-black justify-center items-center justify-items-center content-center group">
              <a
                href="#"
                className=" text-gray-600 font-normal block group-hover:text-black justify-center items-center justify-items-center"
              >
                <FaPuzzlePiece
                  className="text-zinc-400 group-hover:text-black"
                  size={25}
                />
                Games
              </a>
            </li>

            <hr className="border-gray-400 border-l-2 h-10" />
          </ul>
        </div>
        <div
          id="join_"
          className=" hidden sm:hidden md:block items-center justify-end text-xl -mr-0"
        >
          {/* <a href="#" className='ml-5 font-semibold text-black'>Join now</a> */}
          <button
            id="sign_in "
            className="ml-0 text-black rounded-full px-6 py-3 font-normal hover:bg-gray-100 mr-1"
          >
            Join now
          </button>
          <button
            id="sign_in "
            className="border-2 border-blue-400 text-blue-500 rounded-full px-6 py-3 font-normal hover:bg-blue-50 hover:text-blue-500 "
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

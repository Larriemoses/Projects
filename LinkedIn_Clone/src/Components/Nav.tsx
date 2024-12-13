import { FaRegNewspaper } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FaPhotoVideo } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaPuzzlePiece } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { Link } from "react-router-dom";    
import  Logo from '../assets/logo.png'
import SmLogo from '../assets/sm_logo.png'



function Nav() {
  return (
    
    <nav className=" text-gray-500 mb-4 font-thin w-full items-center justify-center">

        <div className="flex-row max-w-screen-xl mx-auto md:flex content-center items-center justify-between w-[90%]">
         
         {/*Responsive Screen*/}
            <div id='left_section' className='mt-2 flex ml-2 items-center content-center'> 
                <Link to="/" className='items content-center'><img src={Logo} alt="#logo" className="hidden md:block h-6 ml-0" /></Link>
                <Link to="/"><img src={ SmLogo } alt="#" className='h-7 block md:hidden' /> </Link>

                <div id="join_" className='block md:hidden content-center mx-auto items-center justify-center text-[10px] space-x-2 mr-0'>
                    <button id="sign_in " className='ml-2 text-black rounded-full px-4 py-3 font-semibold hover:bg-gray-100 ' >Join now</button>

                    <button id="sign_in " className='border-2 border-blue-400 text-blue-400 rounded-full px-6 py-3 font-semibold  hover:bg-blue-50 hover:text-blue-500' >Sign in</button>
                </div>

            </div>
           
            <div id="before_list" className=" mx-auto  md:flex md:flex-auto justify-items-end md:items-center md:content-center md:space-x-2 mt-3 ">


              <ul className="flex  mx-auto md:flex items-center justify-between md:text-xs md:space-x-6  sm:text-black ">
                
                
                <li className=" text-xs justify-center hover:black items-center group-hover:text-black  justify-items-center content-center group">
                    
                    <Link to="/articles" className=" block  text-gray-600  group-hover:text-black justify-center items-center justify-items-center">
                    <FaRegNewspaper className="text-zinc-400  group-active:text-blue-600 group-a:underline group-hover:text-black"size={20}/>Articles</Link>
                </li>

                <li className=" text-xs justify-center items-center justify-items-center content-center group">
                 
                    <a href="#" className="group-hover:text-black text-zinc-600 block justify-center items-center justify-items-center">  
                        <FaUsers className="group-hover:text-black text-zinc-400"size={20}/>
                        People
                    </a>


                </li>
                <li className="justify-center text-xs items-center justify-items-center content-center group">
                 
                    <a href="#" className="text-zinc-600 block group-hover:text-black justify-center items-center justify-items-center">  
                        <FaPhotoVideo className="text-zinc-400 group-hover:text-black"size={20}/>
                        Learning
                    </a>


                </li>
                <li className=" text-xs justify-center items-center justify-items-center content-center group">
                 
                    <a href="#" className=" block   text-zinc-600 justify-center group-hover:text-black items-center justify-items-center group">  
                        <FaBriefcase className="text-zinc-400 group-hover:text-black"size={20}/>
                        Jobs
                    </a>


                </li>
                 <li className="text-xs justify-center items-center justify-items-center content-center group">
                 
                    <a href="#" className=" text-zinc-600 block group-hover:text-black justify-center items-center justify-items-center">  
                        <FaPuzzlePiece className="text-zinc-400 group-hover:text-black"size={20}/>
                        Games
                    </a>


                </li> 
              

                 <li className=" text-xs justify-center items-center justify-items-center flex content-center group" >
                 <hr className='h-10 border-l-2 border-gray-300'  />
                    <a href="#" className=" text-zinc-600 block group-hover:text-black justify-center items-center justify-items-center px-4 md:px-2" >  
                        <FaLaptop className="text-zinc-400 group-hover:text-black"size={20}/>
                        Get the app
                    </a>

                  {/* <div className='h-16 border-l-2 border-gray-300 mx-4'></div> */}
                  <hr className='h-10 border-l-2 border-gray-300' />
                </li>              
                
                </ul>

                <div id="join_" className=' hidden sm:hidden md:block items-center justify-end space-x-2 text-sm -mr-0'>
                    {/* <a href="#" className='ml-5 font-semibold text-black'>Join now</a> */}
                    <button id="sign_in " className='ml-0 text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-100 ' >Join now</button>
                    <button id="sign_in " className='border-2 border-blue-400 text-blue-400 rounded-full px-6 py-3 font-semibold hover:bg-blue-50 hover:text-blue-500 ' >Sign in</button>
                </div>

            </div>
        </div>
       
    </nav>

 
  )
}

export default Nav

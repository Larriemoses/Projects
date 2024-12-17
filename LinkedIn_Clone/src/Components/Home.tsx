// import React from 'react'
// import SmLogo from '../assets/sm_logo.png'
import Image_01 from '../assets/image_01.svg'

function Home() {
  return (
   
    <main className='w-full justify-center justify-items-center pt-6'>
     <div className='flex-wrap justify-center justify-items-center md:flex  md:flex-row w-[90%]  '>
        <div className=" flex-1">
            <h1 className='text-gray-500 text-[3em]'>Welcome to your professional community</h1>
            <button className="bg-blue-600  px-5 w-3/5 py-3 hover:bg-red-200 text-white rounded-full">         
              Continue with google
            </button>
            <button className=" w-3/5 py-3 border border-t-2 border-black text-gray-600  rounded-full">         
              Sign in with email
            </button>


        </div>
        <div className= "flex-1 h-auto m-auto content-center items-center sm:mx-auto  md:-mr-32 lg:mr-4">
          <img src={ Image_01 } alt="#" className="flex flip-rtl "/>


        </div>
     </div>
     </main>
    
  )
}

export default Home

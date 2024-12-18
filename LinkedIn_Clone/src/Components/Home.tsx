// import React from 'react'
// import SmLogo from '../assets/sm_logo.png'
import Image_01 from '../assets/image_01.svg'

function Home() {
  return (
   
    <main className='w-full justify-center justify-items-center pt-6'>
     <div className='flex-wrap justify-center justify-items-center md:flex  md:flex-row w-[80%]  '>
        <div className=" flex-1 justify-center justify-items-center md:justify-center text-center md:justify-items-start w-full">
            
            <h1 className='flex text-center -top-3 text-3xl md:text-start md:top-0 text-gray-500 md:text-[3em] leading-tight mb-3 '>Welcome to your professional community</h1>

            <button className="bg-blue-400 justify-center flex w-[100%] items-center px-3 py-1 hover:bg-blue-600 md:w-[60%] text-white  rounded-full mb-4">         
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABJlBMVEX////lQzU0o1NCgO/2twQ+fu/T3vpMhu83eu/n7v1znvLo8P32tQCGq/TlQTMwolD++vr1sQAnn0rkPC3kNiX3zMn//vr97cz98dfg6fz4/PlDqV/6393409H+9fTjKRLpZlzqbGPzr6r5zWnJ5NDr9e386ej0trLxnpj1wb7sfXXkMB3nTD7vlY/nVkrrdGv857L4yFj3vCv61Hz4w0X74KT++On09/7735NajfHD1Pm02b1VsG0AmjrW69yRy6DuiIDjHwD4zb/seUDvijvxnDP0qzDrdEnoW0HlODzwkDLqakypwfdklPGUtPW+u0SnuVPfvDqLtl5Wqle9v1V7wIxqrVRjtHxFksFWobBUp5VOjd9LkstXn7lPop5Bo3RHo4ORu9p6j5UwAAAH4klEQVR4nO2aa3fSSBiAQwgW2zShSahKuBW5lgAt1nbbAKGrrq7b1nph0VrX3f//J3YmKS2XTO7DgGeeL3o8wJnH9zIzb8IwFAqFQqFQKBQKhUKhUCgUCoVCoVAolF+NVCqVh6RILyQU+Wo2m0s3aqVSHVJrpHO5bDVPell+SeWruUapvl/UlPPzQqHQBBQK5wVFK+7XS41cdW3ClKpmG/VhUWs2FVkWYtMIgqw0m1pxWG9k18Enn6sN99qyMqcxZyS0O61adsUzrlobFtvCfEBshMBHtL1WeoV1svWOJsiCm8m9T6y9X6qSXrQ91VZb9mry4FMsrWB0ssOmQ504+BS0xmrppKqlWNO/iYVc2FslnXyjo8gBVSCKPMyuSqPOtjQlaFgshOZebSWCk28U5TBhsWwUrZUlbWKGJUDdLyILnTTpVMt13HdIbwhym2yXToEUi0bFtNHqBLfQVK0dnUsMptqQmE2qHq0LCM55i5RLSwjdxeZQ2jlCLsNmxC6CUiTnEm2KgQawlybjkm/9Oi6pUizqHAMuZDZN2JOjdYkRc2HSvvZKwcLxM0qRlEu249VFVpqFQhOcqcFfzs2/IFzahOoFFL8nF3CJPBeKrVo6Z9EotYqFc8UuRIpGqCczTM3D7QUOyNr17MxQFo5p00NlIT7g/E8qLkzOvZEJstxG3k8aHW3mXiqQyzGmuu8WGHD87TheHNPmHOf+00ViLqlazNkF1ETHdUABdYSJS2MpC7cj57LDgMV5GezlG/uaTNol1XJOMlkb5rxtGNU6sIEu5C7LOc0xMODq6/l6lWqARtAm6JLfbzqlmFL0Nc7LFUm6ML87bZfAxee4KEtyILN7+OpP9HMX3y5kOeC6rzXUkbHZWSsX5pDnuDdtexlid96AHHSBDPfHW7vYyGvmwryALhy380pbdNFqpIer/nhyZMlw3Pt388Ufq6/EFN87L7mJDPfmrTaTavL+ij6bRHH84t4FFM6raRuwkZNenU8esswsnNfv7vuAINTXq2CYXauXPfDmr8kGKq/XbsnALONmZUCqWTaCUFqzwDDHz+dcYKqZF7X1C8zuwdGCDOzRoHCUEunF+WX35XyW3RUOaGXrFhjm+Dc7F1g4SmvdKsauZO4K5/267THzu8wU/NGx65dPnj0KzEn0LrsHtiUDZQ7dv711tRGUy0c4ZHh7GZ7/zYPMdiIoG2cYZF7uIALDPfEiE0/Eg5HEIfMCJdPdxStzEb0MspnxR5hltqPvAE9RzWznOW6ZrSXKeKj/UDKbj6OX6aJkDjDLXGKQQW0zOx6aWRiZxOmvJLPxbIkyTzHLxKlMQBncaUZlXGRItWYsDQApg3nTTJxikCF1nMERGXIHTQwnAHJXAAxnM3KXs83oT83g2oyQ8XZtDi5zFf19JuRAYzugCp6bZrhR09Z20o2lyqDaGd/9UHb98snFphvINMQw0ECNZ/mja8nIuNs8dmbrbMPeJnmKQ8Z2cM7zHz+xUm8Q/ufPEHmWvIx+z7R/pMHzHz6LLCvp4X9+EyWDYZ4BOD5ckOl+YSFirxL2x08uUTIYOjNjPmyeseG5j9esaMqwoUNzhqj+xMYFFpm5B7TA5ZNquoA8Cx2aK2TJYJibQ6Z3Gh505L/Ze0QPDc2JR6eIzpzAcDIzmXqpAXSx68/ilEzPfa9x4gLlksBTMszU6yZmirHTSKMwifb4EiWzgWP/N5nkGc9Np5gVGjZMol2gjqEJXCXDTF7R4rtfPrPziKoe2AZdMXE8u4yJ2c/47vWCilk2Qc8BW+hzWRxbljHWa40f51NsUjbjYDYnqLaMN8vgC6ecTYrdN4EgNicXiCMmlMHwoOmB3cNrVUTJgNj4b2knZ6iCAeB4ODtFWUS7BDoJOLkkLnEGhmEyI8lBBtiUffU0x7jgLX/IgHUKDbDRfQRnC7nBmIE5xdeXLTKGY2jAfmN4bQOZynbCKS5Ybv+zDHouNuzYW3Aq+vhrHNmV4YUZ0xlziozu2AOAjciO3Csno49USf12irbB8WrGApWxc2gsHZfrGlABn5LYm+8om+Qm3lZ2x8Bhq5noSOIYfVarGKokWb8h/bxN2tYNlheA7NAlVxuwTEkCxZOZNcpkKgOj15/6vqT+sD0BJK+W4wL+Zz3IwIX2++pILw8mlHVjLPb7s1kqSv98X2zQCSwTJlsGrmXzsFS4eLXX66nQTbKJqSjd3M4HZ2lJBin3vMXmbrl3ICP488fcQQDfbdmGjO7Lxo35Hp3cXFqSWTYuu40/RPXm9sEmgWW+7GRjeGlp3m3En18nPXqpBYPFBgTn28ZdcPAMMZ1tRlHb3HxPmKOypatAG8P5OuDbRvr3Np7ANCl3t9FVr/uNR5vejzghl8g7NOzR/xFSsWyijI0UYpIYBeVRZIUjij2yLuZ5Ppr9E97pyKow5vU3iuBIqhH6YWIUDIzQXU2UHC5zywUEpx8qOJK4GmGxqOhs8OCI/ZAP3iKnMrK7eXlSUSN4jyBqzL7m0wd8nng/RjAwxirr3QeajPyMc5fMQAc+ouQuBGPYGxvl1VWBVAb6yMVHFCVJhSaD1UywGYCPMerBydlCDQEN8K/qyNDLlTUwschU4JRs1FOlPkSy/uibAdF1EJK1MZkAjODkD2AAgAOcB1bWJyJ2ZO4gvQ4KhUKhUCgUCoVCoVAoFAqFQqFQKBRKxPwPSysiUJY3JvEAAAAASUVORK5CYII=" alt="google" className='rounded-full max-h-8 p-0 mr-1' /> Continue with google
            </button>

            <button className="  justify-center flex w-[100%] items-center px-3 py-2 md:w-[60%] hover:bg-gray-200 mb-6 border-2 border-gray-600 text-gray-600  rounded-full">         
              Sign in with email
            </button>

            <p className='text-center text-xs w-[100%] md:w-[70%] self-center text-gray-600 leading-5 mb-7' >By clicking Continue to join or sign in, you agree  to LinkedIn's <a href="#User_Agreement" className='text-blue-600 font-semibold hover:underline '>User Agreement</a>, <a href="#Privacy_Policy" className='text-blue-600 font-semibold hover:underline '>Privacy Policy</a> , <a href="#Cookie_Policy" className='text-blue-600 font-semibold hover:underline '>Cookie Policy</a></p>

            <h2 className='flex mb-6 text-center self-center '>New to LinkedIn? <a href="#Join_now" className='text-blue-600 hover:underline font-semibold'>Join Now</a></h2>
        </div>
        <div className= "flex-1 md:h-auto m-auto content-center justify-center justify-items-center items-center ">
          <img src={ Image_01 } alt="#" className="flex h-[30vh]  md:h-auto"/>


        </div>
     </div>
     </main>
    
  )
}

export default Home

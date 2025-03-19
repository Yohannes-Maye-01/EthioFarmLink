
import { Link } from '@remix-run/react'

export default function Header() {
  return (
     <header className="w-full  flex  bg-gray-100 p-4 dark:bg-gray-950 text-gray-800 dark:text-gray-200 font-bold lg:text-2xl sm:text-xl xm:text-lg">


     <div className="w-full flex flex-row items-center  space-x-4   justify-between mx-auto">
     
      


       {/* Desktop Menu */}
       
       <nav className="flex space-x-4 group items-center" >
       <h1 className="w-[80px] h-[80px] rounded-full">
        <img src="LOGO.png" alt="logo" className='rounded-full shadow-2xl w-[80px] h-[80px]' /></h1>
         <Link to="/" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">Home</Link>
         <Link to="/services" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">Services</Link>
         <Link to="/about" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">About</Link>
         <Link to="/contact" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">Contact</Link>
       </nav>


       {/* Login & Signup */}
       <div className="flex space-x-4 ">
         <Link to="/login" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">LogIn</Link>
         <Link to="/signup" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-sky-500 hover:decoration-4 hover:text-sky-500">Sign Up</Link>
       </div>

     </div>

    
   </header>
  )
}

"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [account, setAccount] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLoginPage = () => setIsModalOpen(!isModalOpen);


  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };


  const handleProjectRouter = () => {
    if (userLoggedIn) {
      router.push('/projects');
    } else {
      toggleLoginPage();
    }
  };

  const Signup = async () => {
    try {
      const response = await axios.post('/api/user/signup', user);
      if (response.data) {
        toast.success("Signup Successful");
        setAccount(true);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };


  const Login = async () => {
    try {
      const response = await axios.post('/api/user/login', userLogin);
      if (response.data) {
        toast.success("Login Successful");
        setUserLoggedIn(true); 
        setIsModalOpen(false);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };



  const UserLoginOrNot = async () => {
    try {
      const response = await axios.get('/api/user/me');
      if (response.data.success) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    } catch (error: any) {
      setUserLoggedIn(false); 
      toast.error("Not Logged In");
    }
  };


  const logout = async () => {
    try {
      await axios.get('/api/user/logout');
      setUserLoggedIn(false); 
      toast.success("Logout Successful");
    } catch (error: any) {
      toast.error(error.response?.data || "Logout failed");
    }
  };

  useEffect(() => {
    UserLoginOrNot(); 
  }, []);


  const handleError = (error: any) => {
    if (error.response) {
      toast.error(error.response.data.message || "Request failed");
    } else if (error.request) {
      toast.error("Network error: API not reachable.");
    } else {
      toast.error("Unexpected error occurred.");
    }
  };
  return (
    <div className="shadow sticky z-50 top-0 bg-[#F4ECE6] ">

      <nav className="px-6 py-2.5 bg-[#d7c2af]">
        <div className="flex flex-wrap justify-between items-center  max-w-screen-xl">
        

          <div className=" items-center text-black flex justify-evenly space-x-16 xs:space-x-0  " >
            <div>
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </div>
            <Link
              href="#"
              className="hover:text-gray-950 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none text-black"
            >
              About Me
            </Link>
            <Link
              href="#"
              className={`text-white focus:ring-4 focus:ring-orange-300 font-bold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${userLoggedIn ? "bg-red-500" : "bg-gray-800"
                }`}
              onClick={userLoggedIn ? logout : toggleLoginPage} // Use userLoggedIn, not account
            >
              {userLoggedIn ? "Logout" : "Get Started"}
            </Link>
          </div>
          <div
            className=" xs:justify-center xs:items-center xs:w-auto xs:flex hidden "
            id="mobile-menu-2"
          >
            <ul className="sm:flex mt-4 font-medium sm:flex-row xs:gap-9 xs:space-x-5 xs:mt-0  sm:gap-5 sm:space-x-4 hidden">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/" ? "text-gray-700 font-bold border-b-2 border-b-orange-500" : "text-black font-bold "
                    }   hover:text-gray-700 lg:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/projects" ? "text-gray-700 font-bold border-b-2 border-b-orange-500" : "text-black font-bold "
                    }  hover:text-gray-700 lg:p-0 `}
                    onClick={handleProjectRouter}
                >
                  Projects
                </Link>

              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/contact" ? "text-gray-700 font-bold border-b-2 border-b-orange-500" : "text-black font-bold "
                    }  hover:text-gray-700 lg:p-0`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/resume" ? "text-gray-700 font-bold border-b-2 border-b-orange-500" : "text-black font-bold "
                    }   hover:text-gray-700 lg:p-0`}onClick={handleProjectRouter}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
            className="justify-center items-center w-auto h-full z-20 absolute top-32 -left-2 xs:hidden bg-[#d7c2af00]"
            id="mobile-menu-2"
          >
            <ul className=" mt-4 font-medium max-h-screen bg-[#d7c2af00] flex flex-col justify-center items-center gap-16  ">
              <li>
                <Link
                  href="/"
                  className={`flex py-2 pr-2 pl-3 duration-200 ml-0 rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}
                >
                  <Image src="https://www.svgrepo.com/show/508090/home-alt.svg" alt="_home" width="35" height="40"></Image>Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`flex py-2 pr-2 pl-3 duration-200 rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}
                    onClick={handleProjectRouter}
                >
                 <Image src="https://www.svgrepo.com/show/432551/projects.svg" alt="_projects" width="30" height="35"></Image>Projects
                </Link>

              </li>
              <li>
                <Link
                  href="/contact"
                  className={`flex py-2 pr-2 pl-3 duration-200 rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}
                >
                  <Image src="https://www.svgrepo.com/show/487232/contact-book.svg" alt="_contact" width="30" height="35"></Image>Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`flex py-2 pr-2 pl-3 duration-200 rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}onClick={handleProjectRouter}
                >
                 <Image src="https://www.svgrepo.com/show/324376/resume-business-cv-work-job-curriculum-2.svg" alt="_resume" width="30" height="35"></Image>Resume
                </Link>
              </li>
            </ul>
          </div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
    <div
      className="bg-gradient-to-br from-indigo-200 via-slate-700 to-indigo-300 dark:from-slate-900 dark:via-gray-800 dark:to-slate-700 p-6 rounded-xl shadow-2xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-4xl text-white font-bold mb-4 tracking-wide">
        {account ? "Login" : "Sign Up"}
      </h2>
      <form>
        {!account && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-white text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleSignupChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white border border-transparent focus:lue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 shadow-sm hover:shadow-md"
              placeholder="Enter your Username"
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={account ? userLogin.email : user.email}
            onChange={account ? handleLoginChange : handleSignupChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white border border-transparent focus:lue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={account ? userLogin.password : user.password}
            onChange={account ? handleLoginChange : handleSignupChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white border border-transparent focus:lue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter your password"
          />
        </div>

        {/* OAuth Buttons */}
        <div className="flex justify-center space-x-3 mt-4 w-full gap-5">
          <button
            type="button"
            className="flex gap-2 justify-center items-center px-4 py-2 text-sm font-bold rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white dark:bg-gray-700 dark:hover:bg-gray-600 w-1/2"
          >
            <svg className="h-7 w-7 text-white" width="22" height="22" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />  
              <path d="M17.788 5.108A9 9 0 1021 12h-8" />
            </svg> Google
          </button>
          <button
            type="button"
            className="flex gap-2 justify-center items-center px-4 py-2 text-sm font-bold rounded-md bg-gray-700 hover:bg-gray-800 transition-colors text-white w-1/2"
          >
            <svg className="h-7 w-7 text-white " width="22" height="22" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />  
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg> Github
          </button>
        </div>

        
        <div className="flex justify-center space-x-2 mt-4 gap-2">
          <div 
            className="text-center mt-2 text-gray-200 hover:text-white cursor-pointer transition-colors font-semibold" 
            onClick={() => setAccount(!account)}
          >
            {account ? "Don't have an account?" : "Already have an account?"}
          </div>

          {account && (
            <div className="text-orange-500 hover:text-white transition-colors font-bold mt-2">
              <Link href="#">Forget Password</Link>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`flex space-x-2 mt-4 gap-4 ${account ? "justify-end" : "justify-center"}`}>
          <button
            type="button"
            className="px-4 py-2 text-sm rounded-md bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white shadow-md"
            onClick={toggleLoginPage}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-5 py-2 text-sm rounded-md transition-colors bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg"
            onClick={account ? Login : Signup}
          >
            {account ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </div>
  );
};

export default Header;



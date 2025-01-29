"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); 
  const router = useRouter();
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [account, setAccount] = useState(false); 
  const [userLoggedIn , setUserLoggedIn] = useState(false)
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
        setIsModalOpen(false)
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      handleError(error);
    }
  };


  const UserLoginOrNot = async()=>{
    try {
      const response = await axios.get('/api/user/me');
      if(response.data.success){
        setUserLoggedIn(true);
      }
    } catch (error:any) {
      toast.error("Not LoggedIn.")
    }
  }

  useEffect(()=>{
      UserLoginOrNot();
  },[account])
  
  const handleError = (error:any) => {
    if (error.response) {
      toast.error(error.response.data.message || "Request failed");
    } else if (error.request) {
      toast.error("Network error: API not reachable.");
    } else {
      toast.error("Unexpected error occurred.");
    }
  };
  return (
    <div className="shadow sticky z-50 top-0 ">
      
      <nav className=" px-4 lg:px-6 py-2.5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="font-sans font-bold md:text-4xl sm:text-3xl text-2xl text-black ">
            Vikram Singh
          </div>
          
          <div className="flex items-center lg:order-2 text-black">
                        <div>
                        <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                        </div>
                      <Link
                          href="#"
                          className="hover:text-gray-950 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none text-white"
                      >
                          About Me 
                      </Link>
                      <Link
                          href="#"
                          className={`text-white  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${userLoggedIn?"bg-red-500":"bg-gray-800"}`} onClick={toggleLoginPage}
                      >
                          {userLoggedIn?"Logout":"Get Started"}
                      </Link>
                  </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    pathname === "/" ? "text-gray-950" : "text-white"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-950 lg:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    pathname === "/contact" ? "text-gray-950" : "text-white"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-950 lg:p-0`} 
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    pathname === "/projects" ? "text-gray-950" : "text-white"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-950 lg:p-0 `}
                  onClick={handleProjectRouter} 
                >
                  Projects
                </Link>
                
              </li>
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                    pathname === "/resume" ? "text-gray-950" : "text-white"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-gray-950 lg:p-0`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 dark:bg-slate-800 p-6 rounded-xl shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl text-gray-950 font-bold dark:text-white mb-4">
              {account ? "Login" : "Signup"}
            </h2>
            <form>
              
              {!account && (
                <div className="mb-4">
                  <label htmlFor="username" className="block text-black dark:text-white text-sm font-semibold mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 border-none rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-gray-700 focus:outline-none transition 
               duration-200 shadow-sm hover:shadow-md  dark:bg-slate-700 text-black dark:text-white"
                    placeholder="Enter your Username"
                  />
                </div>
              )}

             
              <div className="mb-4">
                <label htmlFor="email" className="block text-black dark:text-white text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={account ? userLogin.email : user.email} 
                  onChange={account ? handleLoginChange : handleSignupChange}
                  className="w-full px-4 py-2 border-none rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-gray-700 focus:outline-none transition 
               duration-200 shadow-sm hover:shadow-md  dark:bg-slate-700 text-black dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              
              <div className="mb-4">
                <label htmlFor="password" className="block text-black dark:text-white text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={account ? userLogin.password : user.password} 
                  onChange={account ? handleLoginChange : handleSignupChange} 
                  className="w-full px-4 py-2 border-none rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-gray-700 focus:outline-none transition 
               duration-200 shadow-sm hover:shadow-md  dark:bg-slate-700 text-black dark:text-white"
                  placeholder="Enter your password"
                />
              </div>
              <div className={`flex justify-center space-x-3 mt-4 w-full gap-5`}>
              <button
                type="button"
                className=" flex gap-2 justify-center items-center px-4 py-2 text-sm font-bold rounded-md bg-[#9F5EDE] hover:bg-[#4e1e7e] transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-white w-1/2"
              
              >
                <svg className="h-7 w-7 text-white"  width="22" height="22" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg> Google
              </button>
              <button
                type="button"
                className=" flex gap-2 justify-center items-center px-4 py-2 text-sm font-bold rounded-md bg-[#DB682D] hover:bg-orange-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-white w-1/2"
              
              >
                <svg className="h-7 w-7 text-white "  width="22" height="22" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg> Github
              </button>
            </div>

            <div className='flex justify-center space-x-2 mt-4 gap-2'>
            <div className='text-center mt-2 flex justify-center items-center' onClick={
              () => {
                setAccount(!account)
              }
            }>{account?"Don't have an account?":"Already have an account?"}</div>
            
            <div className={`${account?"":"hidden"} flex justify-center items-center mt-2 text-gray-400 hover:text-white transition-colors font-bold`}>
              <Link href="#">Forget Password</Link>
            </div>
  </div>

              {/* Action Buttons */}
              <div className={`flex  space-x-2 mt-4 gap-4 ${account?"justify-end":"justify-center"}`}>
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded-md bg-[#ffffff] transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white"
                  onClick={toggleLoginPage}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-5 py-2 text-sm rounded-md transition-colors bg-orange-500 hover:bg-orange-600 text-white"
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



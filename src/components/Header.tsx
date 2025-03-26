"use client";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';



const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);
  

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/VikramResume.pdf';
    link.download = 'VikramResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const handleProjectRouter = () => {
    
      router.push('/projects');
  
  };


  const handleResumeRouter = () => {
    
      handleDownload();
    
  };

 
  return (
    <div className="shadow sticky z-50 top-0 bg-[#AF9483] ">

      <nav className="px-6 py-2.5 bg-[#AF9483]">
        <div className="flex flex-wrap xs:justify-between justify-end items-center  max-w-screen-xl">
        

          
          <div
            className=" xs:justify-center xs:items-center xs:w-auto xs:flex hidden "
            id="mobile-menu-2"
          >
            <ul className="sm:flex mt-4 font-medium sm:flex-row xs:gap-9 xs:space-x-5 xs:mt-0  sm:gap-5 sm:space-x-4 hidden">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/" ? "text-gray-700 font-bold border-b-2 border-b-slate-500" : "text-white font-bold "
                    }   hover:text-gray-700 lg:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/projects" ? "text-gray-700 font-bold border-b-2 border-b-slate-500" : "text-white font-bold "
                    }  hover:text-gray-700 lg:p-0 `}
                    onClick={handleProjectRouter}
                >
                  Projects
                </Link>

              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/contact" ? "text-gray-700 font-bold border-b-2 border-b-slate-500" : "text-white font-bold "
                    }  hover:text-gray-700 lg:p-0`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-2 pl-3 duration-200  border-gray-100 ${pathname === "/resume" ? "text-gray-700 font-bold border-b-2 border-b-slate-500" : "text-white font-bold "
                    }   hover:text-gray-700 lg:p-0`}onClick={handleResumeRouter}
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
           <svg  onClick ={() => setSidebar(!sidebar)} className={`h-10 w-10 text-slate-800 ml-3 mb-20 -mt-12 transition-all duration-300 ${sidebar ? "hidden" : "flex"}`}  width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="14" y2="12" />  <line x1="4" y1="18" x2="18" y2="18" /></svg>

           <svg onClick ={() => setSidebar(!sidebar)} className={`h-10 w-10 text-slate-800 ml-3 mb-20 -mt-12 transition-all ${sidebar ? "flex" : "hidden"}`} width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="10" y1="12" x2="20" y2="12" />  <line x1="6" y1="18" x2="20" y2="18" /></svg>

            <ul className={` mt-4 font-medium max-h-screen bg-[#d7c2af00]  flex-col justify-center items-center gap-16 ${sidebar ? "flex" : "hidden"} transition-all duration-300 `}>
              <li>
                <Link
                  href="/"
                  className={`flex py-2 pr-2 -ml-4 pl-3 duration-200  rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}
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
                  className={`flex py-2 pr-2 pl-3 duration-200 rounded-full justify-center items-center  text-transparent font-bold gap-1 hover:text-gray-800 lg:p-0`}onClick={handleResumeRouter}
                >
                 <Image src="https://www.svgrepo.com/show/324376/resume-business-cv-work-job-curriculum-2.svg" alt="_resume" width="30" height="35"></Image>Resume
                </Link>
              </li>
            </ul>
          </div>

    </div>
  );
};

export default Header;



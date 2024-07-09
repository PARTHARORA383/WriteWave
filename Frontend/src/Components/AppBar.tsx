import { Link } from "react-router-dom"
import { useState , useEffect } from "react";
import  "./style.css"
import { SlideBar } from "./Slidebar";
export const AppBar = ()=>{


  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;
//Scroll effect of appbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={`grid grid-cols-12 place-items-center border-b bg-notionGray border-supabaseGray-300  w-screen ${isVisible ? 'visible-navbar z-10' : "hidden-navbar" }`} style={{height : "70px"}}>
    <div className="col-span-2 text-supabaseGray-200 text-2xl  p-3 ">
     <Link to = {"/dashboard"}>Medium</Link>
    </div>
      <div className="col-span-8 flex justify-center items-center text-supabaseGray-200 font-normal text-xl ">
     <SlideBar/>
      </div>
    <div className=" hidden lg:block col-span-2 text-supabaseGray-200 pl-6 p-3  text-xl font-normal hover:text-green-600">
    <Link to={"/signin"}>
     Login
    </Link>
    </div>
  </div>

}
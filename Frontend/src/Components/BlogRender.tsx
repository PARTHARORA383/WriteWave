import { Blog } from "../Hooks";
import { Avatar } from "./BlogCard";
import { parseContent } from "./ParseContent";
import { useState , useEffect } from "react";


const styles = {
  fontFamily: "Arial, sans-serif",
};

export const BlogRender = ({ blog }:{blog : Blog}) => {
  const contentElements = parseContent(blog.content);
  
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

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

  return ( 
  <div className="grid grid-cols-12 bg-notionGray w-full h-screen relative">
      <div className="col-span-12 lg:col-span-9 mt-14 p-10 border-r-2 max-h-full">
        <div className="text-3xl font-bold text-supabaseGray-200">{blog.title}</div>
        <div className="text-supabaseGray-300 text-sm mt-1">Published on 2nd December</div>
        <div className="text-lg text-notionDarkText">
          {contentElements.map((element, index) => {
            if (element.type === "heading") {
              return (
                <h2 key={index} className="font-sans-serif text-2xl font-bold mt-4 mb-2" style={styles}>
                  {element.text}
                </h2>
              );
            }
            return (
              <p key={index} className="mb-4 font-sans">
                {element.text}
              </p>
            );
          })}
          {blog.content}
        </div>
      </div>

      <div className={`col-span-12 lg:col-span-3 pl-5 mt-10 ${isVisible ? "pt-10" : "pt-0"}`}>
        <div className="flex flex-col fixed">
          <div className="m-2 flex pr-7">
            <Avatar name={blog.author.name || "Anonymous"} />
            <div className="font-medium text-supabaseGray-200 text-lg pl-5">{blog.author.name || "Anonymous"}</div>
          </div>
          <div className="text-md font-normal mr-5 text-supabaseGray-300">
            Meet Alex, the enigmatic blogger who wields words like a maestro conducts music. With a trusty cup of coffee in hand and a keyboard as their weapon, Alex ventures into the digital abyss, crafting tales that captivate and inspire. From unraveling the mysteries of technology to exploring the depths of human emotion, there's no topic too vast for this intrepid wordsmith. With each post, Alex invites readers on a journey of discovery and introspection, leaving them with a sense of wonder and a thirst for more. Join Alex on their quest to illuminate the world, one blog post at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

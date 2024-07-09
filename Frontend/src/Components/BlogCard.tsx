import { Link } from "react-router-dom"


interface BlogCard {
  authorName : string,
  title:string,
  content : string,
  publishedDate:string
  id : number

}

export const BlogCard = ({authorName, title , content , publishedDate , id }:BlogCard)=>{ 
  return  <div>
    <div className="  border-spacing-2 m-8 pr-9 pl-9 pb-10  pt-10 mt-2
  border-supabaseGray-800 w-full h-64 ">
    <div className="flex items-center mb-5">
      <div className=" flex justify-center flex-col cursor-pointer"><Avatar name = {authorName}/></div>
      <div className="font-semi-bold text-gray-200 pl-2 text-xs  cursor-pointer ">{authorName}</div> 
      <div className="pl-1  text-notionDarkText flex flex-col text-xs">&#183;</div>
      <div className=" pl-1 text-supabaseGray-300 font-extralight text-xs cursor-pointer">{publishedDate}</div>
    </div>
    <Link to ={`/blogs/${id}`}>
    <div className="text-3xl font-semibold text-notionDarkText cursor-pointer ">
      {title}
    </div>
    <div className="text-lg font-normal text-notionDarkText font-serif-sans mt-2 cursor-pointer">{content.slice(0,300)+ "..."}</div>
   
    <div className= "mt-3 mb-3 text-xs text-supabaseGray-400">{`${Math.ceil(content.length/100)} minute(s) Read`}</div>
    </Link>
   </div>
  <div className="border-t border-supabaseGray-800 max-w-7xl mt-16 ml-16 mr-16">
  </div>
    </div>
}

 export function Avatar({name}:{name : string}){
  return<div >
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="text-md text-gray-600 dark:text-gray-300 ">{name[0]}</span>
</div>
  </div>
  }
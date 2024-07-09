import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks"
import { BlogRender } from "../Components/BlogRender";


export const Blog=()=>{

   const {id} = useParams();
  const {loading , blog} = useBlog({
    id : id || ""
  });
  
  if(loading){
     <div className=" text-2xl text-white">
      loading...
     </div>
  }

  if (!blog) {
    return <div className=" text-2xl text-white">Blog not found</div>;
  }


return <div className=" bg-supabaseGray-800">
<BlogRender blog = {blog}/>
</div>


}
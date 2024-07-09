import { BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../Hooks"

export const Blogs = () => {

  const { loading, blogs } = useBlogs();
  if (loading) {
    return <>loading...</>
  }
  return <div className="grid grid-cols-12 justify-center bg-notionGray">
    <div className="col-span-12 lg:col-span-9 border-r-2 ">
    <div className="flex flex-col p-4 ">
      <div className="mt-4 max-w-full">
        {blogs.map(blog =>
          <BlogCard
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}

            title={blog.title}
            content={blog.content}
            publishedDate="jkhkadsj" />)}
      </div>
    </div>
    </div>
    <div className="col-span-3">
   hello 
    </div>
  </div>
}
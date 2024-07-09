import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createBlogInput , updateBlogInput } from '@parth383/medium-common'
export const blogRouter = new Hono<{
  Bindings :{
    DATABASE_URL : string,
    JWT_SECRET : string
  }
  Variables:{
    userId : string
  }
}>();

blogRouter.use("/*" , async (c ,next)=>{
  const authHeader = c.req.header("authorization")||"";
  const user = await verify(authHeader , c.env.JWT_SECRET)
if(user){
  //@ts-ignore
  c.set("userId",user.id)
   await next();  
}
else{
  return  c.json({
    message : "You are not logged in"
  })
}
})


blogRouter.post("/" , async (c)=>{
  const body = await c.req.json()
  const {success} = createBlogInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message : "Invalid content type"
    })
  }
  const authorId = c.get("userId")
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const post = await prisma.post.create({
    data : {
      title : body.title,
      content : body.content,
      authorId : Number(authorId)
    }
  });
  return c.json({
    id : post.id
  })
})
.put("/" , async (c)=>{
  const body = await c.req.json()
  const {success} = updateBlogInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message : "Invalid content type"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());

   const blog =  await prisma.post.update({
    where:{
      id : body.id
    },
    data : {
      title : body.title,
      content : body.content,
    }
  })
  return c.json({
    id : body.id
  })
})



blogRouter.get("/bulk" ,async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.findMany({
    select : {
      content :true,
      title:true,
      id:true,
      author:{
        select :{
          name:true
        }
      }
    }
  })//add pagination

  return c.json({
     blog
});
}) 

blogRouter.get("/:id" ,async (c)=>{

  try{
    const id = await  c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const blog = await prisma.post.findFirst({
      where :{
        id : Number(id)
      },
      select :{
        title : true ,
        content : true ,
        author : {
          select:{
            name : true
          }
        }

      }
    })

    return c.json({
      blog
    });
  
  }catch(e){
    c.status(411);
    return c.json({
      error:"Error while fetching blog"
    })
  }
})

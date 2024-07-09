import z from "zod"
//signup
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

//signin
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),

})

//create blog
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string()
})

//update blog
export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number()
})





export type signupInput = z.infer<typeof signupInput>
export type signinInput = z.infer<typeof signinInput>
export type createBlogInput = z.infer<typeof createBlogInput>
export type updateBlogInputBlogInput = z.infer<typeof updateBlogInput>

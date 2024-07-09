import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'
const app = new Hono().basePath('/api/v1');
app.use("/*", cors());
app.route("/user", userRouter);
app.route("/blog", blogRouter);
app.get('/', (c) => {
    return c.text('Hello randi!');
});
export default app;

import { router } from "../trpc";
import { postRoutes } from "./post";
import { userRoutes } from "./user";

export const appRouter = router({
  users: userRoutes,
  posts: postRoutes,
});

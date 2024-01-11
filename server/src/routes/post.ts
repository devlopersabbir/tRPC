import { publicProcedure, router } from "../trpc";

export const postRoutes = router({
  getPosts: publicProcedure.query(() => {
    return {
      id: 1,
      name: "apple watch",
      price: 2000,
    };
  }),
});

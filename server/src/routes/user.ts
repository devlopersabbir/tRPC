import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRoutes = router({
  index: publicProcedure.query(() => {
    return {
      id: 1,
      name: "Sabbir",
      age: 20,
    };
  }),
  store: publicProcedure
    .input(z.object({ name: z.string(), age: z.number() }))
    .mutation(async (opts) => {
      console.log(opts.input);
    }),
});

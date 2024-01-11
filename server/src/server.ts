import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  "/",
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(5000, () => console.log("Server running!"));
export type appRouter = typeof appRouter;

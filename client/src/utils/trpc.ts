import { createTRPCReact } from "@trpc/react-query";
import type { appRouter } from "../../../server/src/server";

export const trpc = createTRPCReact<appRouter>();

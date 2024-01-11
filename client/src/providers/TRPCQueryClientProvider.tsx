import { ReactNode } from "react";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "../utils/trpc";
import { appRouter } from "../../../server/src/server";

export const queryClient = new QueryClient();
export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:5000",
    }),
  ],
});
const TRPCQueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient as any}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TRPCQueryClientProvider;

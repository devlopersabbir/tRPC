import React, { useEffect, useRef } from "react";
import "./App.css";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { appRouter } from "../../server/src/server";

export const trpcClient = createTRPCProxyClient<appRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:5000",
    }),
  ],
});
function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const result = async () => {
      // const res = await trpcClient.users.getUsers.query();
      const res = await trpcClient.posts.getPosts.query();
      console.log(res);
    };
    return () => {
      result();
    };
  }, []);
  return (
    <React.Fragment>
      <div>
        <h1>hello</h1>
        <input type="text" ref={inputRef} />
        <button
          type="button"
          onClick={() => {
            trpcClient.users.store.mutate({
              name: inputRef.current?.value ?? "",
              age: 20,
            });
          }}
        >
          create
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;

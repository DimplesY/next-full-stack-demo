import { api, HydrateClient } from "@/trpc/server";
import { Test } from "./test";
import { auth } from "@/server/auth";

export default async function Home() {

  const result = await api.test.foo({ test: '你好' })
  const session = await auth()

  return (
    <HydrateClient>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {result.input.test}
        <Test />
        {
          session && (
            <div>
              <div>{session.user.name}</div>
              <div>{session.user.email}</div>
            </div>
          )
        }
      </div>
    </HydrateClient>
  );
}

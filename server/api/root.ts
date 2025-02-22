import { createCallerFactory, createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from 'zod'

export const appRouter = createTRPCRouter({
  test: createTRPCRouter({
    foo:publicProcedure.input(z.object({ test: z.string() })).query(({ input }) => {
      return {
        input
      }
    })
  })
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);

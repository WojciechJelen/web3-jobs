import { createTRPCRouter } from "~/server/api/trpc";
import { jobOffersRouter } from "~/server/api/routers/job-offers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  jobOffers: jobOffersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

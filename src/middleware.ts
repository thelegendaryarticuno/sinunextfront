
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

// Define the public routes including dynamic routes
const isPublicRoute = (request: NextRequest) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Define your public routes here
  const publicRoutes = [
    "/",
    "/events",
    /^\/events\/[^\/]+$/, // Regex for /events/[eventId]
  ];

  // Check if pathname matches any public route
  return publicRoutes.some((route) =>
    typeof route === "string" ? pathname === route : route.test(pathname)
  );
};

export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) {
    // Public routes do not need protection
    return;
  }

  // Protect all other routes
  auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

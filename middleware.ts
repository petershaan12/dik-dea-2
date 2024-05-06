import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";
const intlMiddleware = createMiddleware({
  locales: ["en", "id"],
  defaultLocale: "id",
});

export default authMiddleware({
  beforeAuth: (req) => {
    return intlMiddleware(req);
  },

  publicRoutes: [
    "/:locale",
    "/:locale/about",
    "/:locale/sign-in",
    "/:locale/sign-up",
  ],
});



export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
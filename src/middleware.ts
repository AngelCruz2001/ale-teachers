import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

// export async function middleware(req: any) {
//   if (["/home", "/course"].includes(req.nextUrl.pathname)) {
//     const { data: session, status } = await getSession();
//     console.log("Logged in: ", session ? true : false);
//     const url = req.nextUrl.clone();
//     url.pathname = "/auth";
//     if (!session) return NextResponse.rewrite(url);
//   }

//   if (req.nextUrl.pathname === "/auth") {
//     const session = await getSession({ req });
//     if (session) return NextResponse.redirect("/home");
//   }

//   return NextResponse.next();
// }
export async function middleware(req: any) {
  // if (req.nextUrl.pathname === "/auth") {
  //   const session = await getToken({
  //     req: req,
  //     secret: process.env.NEXTAUTH_SECRET,
  //   });
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/home";
  //   if (session) return NextResponse.rewrite(url);
  // }
  // if (["/home", "/course"].includes(req.nextUrl.pathname)) {
  //   const session = await getToken({
  //     req: req,
  //     secret: process.env.NEXTAUTH_SECRET,
  //   });
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/auth";
  //   if (!session) return NextResponse.rewrite(url);
  // }

  return NextResponse.next();
}
// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/home"] }

// return NextResponse.next();

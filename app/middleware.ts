// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   console.log(request);
  
//   const token = request.cookies.get('authToken')?.value;
//   const { pathname } = request.nextUrl;
// console.log(pathname);

//   // Redirect authenticated users from auth pages
//   if (token && ['/login', '/signup'].includes(pathname)) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   // Redirect unauthenticated users from protected pages
//   if (!token && pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }
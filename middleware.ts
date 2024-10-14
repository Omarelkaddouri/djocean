// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed methods
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, { status: 200 });
  }

  return response;
}

// Specify the paths for the middleware to apply to
export const config = {
  matcher: ['/api/:path*'], // Apply only to API routes
};

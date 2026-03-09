import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

// jsonwebtoken uses Node.js crypto — not available in the Edge runtime.
export const runtime = 'nodejs';

// ─── PUBLIC PATHS ────────────────────────────────────────────────────────────
// Pages that do NOT require authentication.
// Add app-specific public routes here (e.g. '/about', '/pricing', '/blog').
// ─────────────────────────────────────────────────────────────────────────────
const PUBLIC_PATHS = ['/', '/login', '/signup'];

function isPublicPath(pathname: string): boolean {
  // Exact match for listed public paths
  if (PUBLIC_PATHS.includes(pathname)) return true;

  // Always allow Next.js internals and infrastructure
  if (
    pathname.startsWith('/api/auth/') ||
    pathname.startsWith('/api/health') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/public/')
  ) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) return NextResponse.next();

  const token = request.cookies.get('auth-token')?.value;
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

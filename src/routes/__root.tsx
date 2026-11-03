import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Outlet,
  notFoundComponent: () => (
    <section className="mx-auto flex min-h-[50svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground mt-3 max-w-md">The page you requested does not exist.</p>
    </section>
  ),
})

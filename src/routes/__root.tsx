import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Outlet,
  notFoundComponent: () => (
    <section className="mx-auto flex min-h-[50svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="font-medium text-muted-foreground text-sm">404</p>
      <h1 className="mt-2 font-semibold text-3xl tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">The page you requested does not exist.</p>
    </section>
  ),
})

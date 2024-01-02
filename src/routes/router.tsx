import Layout from "./layout.tsx"
import Home from "./page.tsx"
import {
  Navigate,
  NotFoundRoute,
  RootRoute,
  Route,
  Router,
} from "@tanstack/react-router"

const rootRoute = new RootRoute({
  component: Layout,
})

const homeRouter = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <Navigate to="/" />,
})

const routeTree = rootRoute.addChildren([homeRouter])

export const router = new Router({ routeTree, notFoundRoute })

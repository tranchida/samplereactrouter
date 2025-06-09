import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        route("admin", "routes/admin.tsx"),
    ]),
    route("*", "routes/notfoundPage.tsx"),
] satisfies RouteConfig;

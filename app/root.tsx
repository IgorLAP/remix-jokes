import { LiveReload, Outlet, Links } from "@remix-run/react";
import globalSyle from "~/styles/global.css";
import globalLargeStyles from "~/styles/global-large.css";
import globalMediumStyles from "~/styles/global-medium.css";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalSyle,
  },
  {
    rel: "stylesheet",
    href: globalMediumStyles,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalLargeStyles,
    media: "screen and (min-width: 1024px)",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}

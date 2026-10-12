/**
 * Sounds API — an HTTP server that streams fart noises.
 *
 * @module
 */

import { getSound, makeSoundURL, randomSound } from "./mod.ts";

if (import.meta.main) {
  Deno.serve((request: Request) => {
    const url = new URL(request.url);
    if (url.pathname === "/favicon.ico") {
      return new Response(
        "",
        { headers: { "Location": "https://fartlabs.org/fl-logo.png" } },
      );
    }

    if (url.pathname === "/") {
      return fetch(makeSoundURL(randomSound()));
    }

    const id = Number(url.pathname.slice(1));
    if (Number.isNaN(id)) {
      throw new Error("ID is not a number");
    }

    return fetch(makeSoundURL(getSound(id)));
  });
}

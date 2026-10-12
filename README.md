# fart-js

> TypeScript library that embeds or streams fart noises, extracted from the
> [Fart Movie](https://github.com/gddmadoss/fart-movie) series, into any
> JavaScript application.

Works in Deno, Node.js, and browsers.

## Embed

Import the catalog of fart noises extracted from the films.

```ts
import { sounds } from "https://raw.githubusercontent.com/gddmadoss/fart-js/main/mod.ts";

console.log(`${sounds.length} fart noises extracted from the Fart Movie series.`);
```

## Stream

Make a streaming URL for any sound, then fetch or play it.

```ts
import { makeSoundURL, randomSound } from "https://raw.githubusercontent.com/gddmadoss/fart-js/main/mod.ts";

const response = await fetch(makeSoundURL(randomSound()));
```

## Play (browser)

```ts
import { playSound, randomSound } from "https://raw.githubusercontent.com/gddmadoss/fart-js/main/play.ts";

await playSound(randomSound());
```

`playSound` defaults to the global `Audio` constructor; pass your own player
factory for anything else:

```ts
await playSound(randomSound(), (src) => new Audio(src));
```

## Sounds API

Run the HTTP server.

```sh
deno task serve
```

- `GET /` — stream a random fart noise.
- `GET /:id` — stream the fart noise at zero-based index `id`.

> [!NOTE]
> The API was formerly hosted at `farts.deno.dev`. Deno Deploy Classic was
> sunset on July 20, 2026, so run it yourself anywhere Deno runs.

## Catalog

[`sounds.json`](sounds.json) lists every noise with the film `title` it was
extracted from and its file name under [`sounds/`](sounds/).

# fart-js

> TypeScript library that embeds or streams fart noises, extracted from the
> [Fart Movie](https://github.com/gddmadoss/fart-movie) series, into any
> JavaScript application.

The sounds are served as plain HTTPS WAV URLs, so any JS app can play them —
even without importing this library.

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

## Play

With the library (browser):

```ts
import { playSound, randomSound } from "https://raw.githubusercontent.com/gddmadoss/fart-js/main/play.ts";

await playSound(randomSound());
```

`playSound` defaults to the global `Audio` constructor; pass your own player
factory for anything else:

```ts
await playSound(randomSound(), (src) => new Audio(src));
```

Or with plain JS — the URLs are all you need:

```js
const audio = new Audio(
  "https://raw.githubusercontent.com/gddmadoss/fart-js/main/sounds/fart-movie-gregory-title1-extracted1.wav",
);
audio.play();
```

> [!NOTE]
> Source-URL imports work directly in Deno and Bun. Node.js apps and bundlers
> can vendor the files or point their build tool at the repo.

## Catalog

[`sounds.json`](sounds.json) lists every noise with the film `title` it was
extracted from and its file name under [`sounds/`](sounds/).

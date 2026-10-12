/**
 * fart-js embeds or streams fart noises, extracted from the Fart Movie
 * series, into any JavaScript application.
 *
 * @module
 */

import sounds from "./sounds.json" with { type: "json" };

// Adapted from
// https://github.com/FartLabs/concentration/blob/52182ee29da3cc57eef0033fec067fd4933bf529/src/lib/sounds/sounds.ts
//

/** A fart noise extracted from the Fart Movie series. */
export interface SoundData {
  /** Which film the noise was extracted from (1-indexed). */
  title: number;

  /** File name of the WAV under the `sounds/` directory. */
  sound: string;
}

/** Every fart noise extracted from the Fart Movie series. */
export { sounds };

/** Make the streaming URL of a sound. */
export function makeSoundURL(data: SoundData) {
  return `https://github.com/gddmadoss/fart-js/raw/main/sounds/${data.sound}`;
}

/** Get a sound by zero-based index into the catalog. */
export function getSound(id: number): SoundData {
  const sound = sounds[id];
  if (sound === undefined) {
    throw new Error("ID is out of range");
  }

  return sound;
}

/** Pick a random sound from the catalog. */
export function randomSound(): SoundData {
  return getSound(Math.floor(Math.random() * sounds.length));
}

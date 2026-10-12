/**
 * Browser helpers for playing fart noises.
 *
 * @module
 */

import { makeSoundURL, type SoundData } from "./mod.ts";

/**
 * Minimal audio player shape. The browser `Audio` element satisfies it;
 * handler slots are `unknown` so DOM handler signatures stay assignable.
 */
export interface PlayableAudio {
  play(): unknown;
  onended: unknown;
  onerror: unknown;
}

/** Wraps a streaming URL into a player. */
export type CreatePlayer = (src: string) => PlayableAudio;

/** Play a player to completion. */
export function playAudio(audio: PlayableAudio): Promise<void> {
  audio.play();

  return new Promise((resolve, reject) => {
    audio.onended = () => resolve();
    audio.onerror = (e: unknown) => reject(e);
  });
}

/** Play a sound. Defaults to the global `Audio` constructor (browsers). */
export function playSound(
  data: SoundData,
  createPlayer: CreatePlayer = defaultCreatePlayer,
): Promise<void> {
  return playAudio(createPlayer(makeSoundURL(data)));
}

function defaultCreatePlayer(src: string): PlayableAudio {
  const AudioCtor = (globalThis as { Audio?: new (src: string) => PlayableAudio })
    .Audio;
  if (AudioCtor === undefined) {
    throw new Error(
      "No global Audio constructor; pass a createPlayer factory to playSound",
    );
  }

  return new AudioCtor(src);
}

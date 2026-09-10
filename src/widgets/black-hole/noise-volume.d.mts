import type { Gpu, Sampler } from "vgpu";

export const NOISE_VOLUME_SIZE: number;

export function createNoiseVolume(
  gpu: Gpu,
  size?: number,
  label?: string
): any;

export function noiseVolumeSampler(
  vgpu: typeof import("vgpu"),
  gpu: Gpu
): Sampler;

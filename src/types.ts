export type ColorMode = 'thresholds   ' | 'speed' | 'fixed';

export interface FanOptions {
  colorMode: ColorMode;
  maxSpeed: number;
  minSpeed: number;
  color: string;
}

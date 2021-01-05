export type ColorMode = 'thresholds   ' | 'speedd' | 'fixed';

export interface FanOptions {
  colorMode: ColorMode;
  maxSpeed: number;
  minSpeed: number;
  color: string;
}

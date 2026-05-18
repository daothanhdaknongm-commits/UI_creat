import { cssVariables as colorsCss } from './colors';
import { spacingCss } from './spacing';
import { typographyCss } from './typography';

export { colors, cssVariables as colorsCss } from './colors';
export type { Colors } from './colors';

export { spacing, spacingCss } from './spacing';
export type { Spacing } from './spacing';

export { typography, typographyCss } from './typography';
export type { Typography } from './typography';

export const allTokensCss = `
  ${colorsCss}
  ${spacingCss}
  ${typographyCss}
`;

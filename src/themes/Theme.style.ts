// eslint-disable-next-line import/no-extraneous-dependencies
// import { Blue, BlueA, Fuschia, FuschiaA } from "@essencia-ui/colors";
import { createStitches } from "@stitches/core";

import {
  Fonts,
  FontSizes,
  LineHeights,
  Sizes,
  Spaces,
  Radii,
  FontWeights,
} from "../core";

const Theme = createStitches({
  theme: {
    colors: {
      // ...Blue,
      // ...BlueA,
      // ...Fuschia,
      // ...FuschiaA,
    },
    fonts: { ...Fonts },
    fontSizes: { ...FontSizes },
    lineHeights: { ...LineHeights },
    sizes: { ...Sizes },
    space: { ...Spaces },
    radii: { ...Radii },
    fontWeights: { ...FontWeights },
  },
  utils: {
    paddingX: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export { Theme };

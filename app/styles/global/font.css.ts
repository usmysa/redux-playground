import { globalFontFace, style } from "@vanilla-extract/css";

const notoSans = "GlobalNotoSans";

globalFontFace(notoSans, {
  src: 'url("/fonts/NotoSans-Regular.ttf") format("truetype"), url("/fonts/NotoSans-Bold.ttf") format("truetype"), url("/fonts/NotoSans-ExtraRegular.ttf") format("truetype")',
});

export const font = style({
  fontFamily: notoSans,
});

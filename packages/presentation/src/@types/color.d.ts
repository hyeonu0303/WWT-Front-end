type MAYBE_SPACE = ' ' | '';

namespace Color {
	export type RGB = `rgb(${number},${MAYBE_SPACE}${number},${MAYBE_SPACE}${number})`;
	export type RGBA = `rgba(${number},${MAYBE_SPACE}${number},${MAYBE_SPACE}${number},${MAYBE_SPACE}${number})`;
	export type HEX = `#${string}`;
	export type Color = RGB | RGBA | HEX;
}
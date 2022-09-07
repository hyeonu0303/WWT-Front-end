type MAYBE_DECIMAL = `.${number}` | '';

namespace Size {
  type Pixel = `${number}${MAYBE_DECIMAL}px`
	type Percent = `${number}${MAYBE_DECIMAL}%`
  type Size = Pixel | Percent;
}

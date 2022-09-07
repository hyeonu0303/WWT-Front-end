interface ColorInterface {
  primary: Color.HEX
  font: Color.HEX
  background: Color.HEX
  border: Color.HEX
}

interface MarginInterface {
  normal: Size.Pixel
}

interface FontSizeInterface {
  normal: Size.Pixel
  strong: Size.Pixel
}

export interface ThemeAttribute {
  color: ColorInterface
  margin: MarginInterface
	fontSize: FontSizeInterface
}

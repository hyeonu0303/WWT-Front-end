import { css, Theme } from '@emotion/react'

export const HeaderStyle = (theme: Theme) => css`
	height: 75px;
	width: 100%;
	overflow: hidden;
	box-shadow: ${theme.shadows[2]};
`

export const WrapperStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const ContentsWrapperStyle = css`
  flex: 1;
  overflow: auto;
`

export const HeaderContainerStyle = css`
	height: 100%;
`
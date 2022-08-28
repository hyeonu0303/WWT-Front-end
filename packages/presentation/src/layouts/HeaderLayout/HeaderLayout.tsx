/** @jsxImportSource @emotion/react */
import React from 'react'
import {
  HeaderStyle,
  WrapperStyle,
  ContentsWrapperStyle,
} from './HeaderLayout.styles'

interface HeaderLayoutProps {
  children?: React.ReactNode
  headerElement?: React.ReactNode
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  children,
  headerElement,
}) => {
  return (
    <div css={WrapperStyle}>
      <header css={HeaderStyle}>{headerElement}</header>
      <div css={ContentsWrapperStyle}>{children}</div>
    </div>
  )
}

export default HeaderLayout

/** @jsxImportSource @emotion/react */
import React from 'react'
import Container from '@mui/material/Container'
import {
  HeaderStyle,
  WrapperStyle,
  ContentsWrapperStyle,
	HeaderContainerStyle,
} from './HeaderLayout.styles'
import { useTheme } from "@emotion/react";

interface HeaderLayoutProps {
  children?: React.ReactNode
  headerElement?: React.ReactNode
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  children,
  headerElement,
}) => {
	const theme = useTheme();
  return (
    <div css={WrapperStyle}>
      <header css={HeaderStyle(theme)}>
        <Container css={HeaderContainerStyle}>{headerElement}</Container>
      </header>
      <div css={ContentsWrapperStyle}>{children}</div>
    </div>
  )
}

export default HeaderLayout

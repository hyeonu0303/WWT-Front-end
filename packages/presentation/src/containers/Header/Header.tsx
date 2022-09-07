/** @jsxImportSource @emotion/react */
import React from 'react'
import LogoHorizon from 'assets/img/logo_horizon.png'
import Image from 'next/image'
import { WrapperStyle } from './Header.styles'
import Link from 'next/link'

const Header: React.FC<{}> = () => {
  return (
    <div css={WrapperStyle}>
      <Link href="/">
        <a href="/">
          <Image
            src={LogoHorizon}
            alt="Horizon Logo"
            objectFit="contain"
            width={256}
          />
        </a>
      </Link>
    </div>
  )
}

export default Header

import { css } from '@emotion/react'
import Flex from './Flex'

export default function Navbar() {
  return (
    <nav css={NavBarContainerStyles}>
      <Flex justify="space-between" align="center">
        <h1 css={NavBarTitleStyles}>Home</h1>
        <div>버튼</div>
      </Flex>
    </nav>
  )
}

const NavBarContainerStyles = css`
  padding: 20px 0;
`

const NavBarTitleStyles = css`
  font-size: 20px;
  font-weight: 600;
`

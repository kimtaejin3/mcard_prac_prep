import { css } from '@emotion/react'

export default function Top({ title, description }: { title: string; description: string }) {
  return (
    <div css={TopContainerStyles}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const TopContainerStyles = css`
  padding: 20px 0;

  h1 {
    font-size: 23px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`

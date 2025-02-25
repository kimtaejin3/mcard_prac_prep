import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
`

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}

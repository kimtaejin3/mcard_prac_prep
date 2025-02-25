import MainRoute from './routes/MainRoute'
import { Global } from '@emotion/react'
import { global } from './css/global'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <MainRoute />
      </MainLayout>
    </>
  )
}

export default App

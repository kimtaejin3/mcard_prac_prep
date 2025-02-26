import MainRoute from './routes/MainRoute'
import { Global } from '@emotion/react'
import { global } from './css/global'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/shared/Navbar'

function App() {
  return (
    <>
      <Global styles={global} />
      <MainLayout>
        <Navbar />
        <MainRoute />
      </MainLayout>
    </>
  )
}

export default App

import './App.css'
import { css } from '@emotion/react'

function App() {
  const a = 1
  return (
    <div css={css({ backgroundColor: 'red' })}>
      <header className="App-header">
        <p
          css={css`
            color: blue;
          `}>
          Editasdf <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

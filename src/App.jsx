import { useState, useEffect } from 'react'

// styles
import { GlobalStyle } from './GlobalStyle'

//Components
import Header from './components/Header'
import Section from './components/Section'

function App() {

  return <div className='App'>
    <GlobalStyle />
    <Header />
    <Section>
    </Section>

  </div>
}

export default App

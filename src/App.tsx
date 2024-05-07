// import { useState } from 'react'

import { Header } from './components/Header';
import { LatestResults } from './components/LatestResults';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';
import { Trophy } from './components/Trophy';
import { FeaturedMatches } from './components/FeaturedMatches';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <LatestResults />
        <Intro />
        <Trophy />
        <Results />
        <FeaturedMatches />
      </main>
      <Footer />
    </>
  )
}

export default App

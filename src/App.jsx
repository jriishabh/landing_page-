import React from 'react'
import Hero from './Components/Hero/Hero'
import Banner from './Components/Banner/Banner'
import Summary from './Components/Summary/Summary'
import Module from './Components/Module/Module'
import Whyus from './Components/Whyus/Whyus'
import Photos from './Components/Photos/Photos'
import Labs from './Components/Labs/Labs'


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <Summary></Summary>
      <Module></Module>
      <Whyus></Whyus>
      <Labs></Labs>
      <Photos></Photos>
    </div>
  )
}

export default App
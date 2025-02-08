import React from 'react'
import Hero from './Components/Hero/Hero'
import Banner from './Components/Banner/Banner'
import Summary from './Components/Summary/Summary'
import Module from './Components/Module/Module'
import Whyus from './Components/Whyus/Whyus'
import Photos from './Components/Photos/Photos'
import Labs from './Components/Labs/Labs'
import FAQ from './Components/Faq/FAQ'
import CEHCourse from './Components/CEHCourse/CEHCourse'
import Banner2 from './Components/Banner2/Banner2'


const App = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      
      <Summary></Summary>
      <Banner2></Banner2>
      <Module></Module>
      <Whyus></Whyus>
      <Labs></Labs>
      <CEHCourse></CEHCourse>
      <Photos></Photos>
     <FAQ></FAQ>
    </div>
  )
}

export default App
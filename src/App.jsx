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
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <div id="summary">
        <Summary />
      </div>
      <Banner2 />
      <div id="course">
        <Module />
      </div>
      <div id="why-us">
        <Whyus />
      </div>
      <div id="labs">
        <Labs />
      </div>
      <div id="ceh-course">
        <CEHCourse />
      </div>
      <div id="photos">
        <Photos />
      </div>
      <Banner2 />
      <div id="faqs">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default App;

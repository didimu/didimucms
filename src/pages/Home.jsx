import React from 'react'
import MainContents from '../components/layout/MainContents'
import Slider from '../components/mainSection/Slider'
import MainSection1 from '../components/mainSection/MainSection1'
import MainSection2 from '../components/mainSection/MainSection2'
import MainSection3 from '../components/mainSection/MainSection3'

const Home = () => {
  return (
    <>
      <MainContents>
       <Slider  /> 
       <MainSection1 />
       <MainSection2 />
       <MainSection3 />
      </MainContents>
    </>
  )
}

export default Home
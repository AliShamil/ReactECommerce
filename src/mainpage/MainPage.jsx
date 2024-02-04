import React from 'react'
import Navbar from '../common/Navbar'
import Main from './components/Main'


function MainPage() {
  return (
    <>
      <div className="lg:px-[117px]">
        <Navbar />
        <Main/>
      </div>
    </>
  )
}

export default MainPage
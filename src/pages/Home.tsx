import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
const Home = () => {
  return (
    <div>
      <div >
        <Navbar />

      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <SideBar />
      </div>
    </div>
  )
}

export default Home
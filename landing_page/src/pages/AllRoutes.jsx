import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMen from './HomeMen'
import HomeWomen from './HomeWomen'
import Landing from './Landing'
import SignIn from './SignIn'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        <Route path="/homemen" element={<HomeMen/>} ></Route>
        <Route path="/homewomen" element={<HomeWomen/>} ></Route>
        <Route path="/signin" element={<SignIn/>} ></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes

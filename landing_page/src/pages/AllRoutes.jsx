import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeMen from './HomeMen'
import HomeWomen from './HomeWomen'
import Landing from './Landing'
import SignIn from './SignIn'
import SignUp from './SignUp'
import QuickShop from "./QuickShop"
import Error from './Error'
import AddBag from './AddBag'
import CheckOut from './CheckOut'
import Payment from './Payment'

function AllRoutes({searchText,setSearch,name,setName}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        <Route path="/homemen" element={<HomeMen searchText={searchText} setSearch={setSearch}/>} ></Route>
        <Route path="/homewomen" element={<HomeWomen searchText={searchText} setSearch={setSearch}/>} ></Route>
        <Route path="/signin" element={<SignIn name={name} setName={setName} />} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/quickshop" element={<QuickShop/>}></Route>
        <Route path="/addbag" element={<AddBag/>}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes

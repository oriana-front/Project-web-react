import React, { useEffect } from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'

const Root = () => {

  return (
    <div >
      
    <Outlet/>
    </div>
  )
}


export default Root

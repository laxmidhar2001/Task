import React from 'react'
import Navbars from './Navbars'
import Drawer from './Drawer'
import Welcompage from '../firstpage/Welcompage'

function Dashboard() {
  const color ="#FCD34D"
  return (
   
    <div>
    <Navbars/>
    <div>
    <Drawer data={color}/>
    <Welcompage/>
    </div>
   
    </div>
  )
}

export default Dashboard
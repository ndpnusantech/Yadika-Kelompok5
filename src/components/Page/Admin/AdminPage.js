import React from 'react'
import SidebarAdm from '../../SidebarAdm'
import './adminPage.css'
export default function AdminPage() {
  return (
    <div className='d-flex' >
      <SidebarAdm />
      <div className="dasboardMain" style={{width:'calc(100% - 200px)', height:'695px', backgroundColor:'red'}}>
      </div>
    </div>
  )
}
